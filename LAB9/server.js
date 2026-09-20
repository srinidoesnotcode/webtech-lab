/**
 * Student Information Web Server
 * WebTech Lab Assignment
 *
 * Demonstrates the use of three built-in Node.js modules:
 *   - http : to create the web server and handle requests/responses
 *   - fs   : to read/write student data from/to a JSON file (acts as our "database")
 *   - url  : to parse the request URL and extract path + query parameters
 *
 * Run with:  node server.js
 * Server listens on: http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'students.json');

// ---------- Helper functions (fs module) ----------

function readStudents() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeStudents(students) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2), 'utf-8');
}

function sendJSON(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload, null, 2));
}

function collectRequestBody(req, callback) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    try {
      callback(null, body ? JSON.parse(body) : {});
    } catch (err) {
      callback(err);
    }
  });
}

// ---------- HTML homepage (served for GET /) ----------

function homePage() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Student Information Server</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; background:#f4f6f8; color:#222; }
    h1 { color:#2c3e50; }
    code { background:#eee; padding:2px 6px; border-radius:4px; }
    table { border-collapse: collapse; margin-top:20px; width:100%; background:#fff; }
    th, td { border:1px solid #ccc; padding:8px 12px; text-align:left; }
    th { background:#2c3e50; color:#fff; }
    ul { line-height:1.8; }
  </style>
</head>
<body>
  <h1>🎓 Student Information Web Server</h1>
  <p>Built using Node.js core modules: <code>http</code>, <code>fs</code>, <code>url</code></p>
  <h3>Available API Endpoints</h3>
  <ul>
    <li><code>GET /students</code> — list all students</li>
    <li><code>GET /students?id=101</code> — get one student by id</li>
    <li><code>POST /students</code> — add a new student (JSON body)</li>
    <li><code>PUT /students?id=101</code> — update a student (JSON body)</li>
    <li><code>DELETE /students?id=101</code> — delete a student</li>
  </ul>
</body>
</html>`;
}

// ---------- HTTP server ----------

const server = http.createServer((req, res) => {
  // url module: parse the request URL into pathname + query object
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;
  const method = req.method;

  console.log(`${new Date().toISOString()}  ${method} ${req.url}`);

  // ---- Home page ----
  if (pathname === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePage());
    return;
  }

  // ---- /students routes ----
  if (pathname === '/students') {
    let students;
    try {
      students = readStudents();
    } catch (err) {
      return sendJSON(res, 500, { error: 'Could not read student data', details: err.message });
    }

    // GET /students  or  GET /students?id=101
    if (method === 'GET') {
      if (query.id) {
        const student = students.find(s => s.id === Number(query.id));
        if (!student) return sendJSON(res, 404, { error: `Student with id ${query.id} not found` });
        return sendJSON(res, 200, student);
      }
      return sendJSON(res, 200, students);
    }

    // POST /students  -> add new student
    if (method === 'POST') {
      return collectRequestBody(req, (err, newStudent) => {
        if (err) return sendJSON(res, 400, { error: 'Invalid JSON body' });
        if (!newStudent.name || !newStudent.department) {
          return sendJSON(res, 400, { error: 'name and department are required' });
        }
        const nextId = students.length ? Math.max(...students.map(s => s.id)) + 1 : 101;
        const student = { id: nextId, ...newStudent };
        students.push(student);
        writeStudents(students);
        return sendJSON(res, 201, { message: 'Student added', student });
      });
    }

    // PUT /students?id=101 -> update existing student
    if (method === 'PUT') {
      if (!query.id) return sendJSON(res, 400, { error: 'id query parameter is required' });
      return collectRequestBody(req, (err, updates) => {
        if (err) return sendJSON(res, 400, { error: 'Invalid JSON body' });
        const idx = students.findIndex(s => s.id === Number(query.id));
        if (idx === -1) return sendJSON(res, 404, { error: `Student with id ${query.id} not found` });
        students[idx] = { ...students[idx], ...updates, id: students[idx].id };
        writeStudents(students);
        return sendJSON(res, 200, { message: 'Student updated', student: students[idx] });
      });
    }

    // DELETE /students?id=101
    if (method === 'DELETE') {
      if (!query.id) return sendJSON(res, 400, { error: 'id query parameter is required' });
      const idx = students.findIndex(s => s.id === Number(query.id));
      if (idx === -1) return sendJSON(res, 404, { error: `Student with id ${query.id} not found` });
      const removed = students.splice(idx, 1)[0];
      writeStudents(students);
      return sendJSON(res, 200, { message: 'Student deleted', student: removed });
    }

    return sendJSON(res, 405, { error: `Method ${method} not allowed on /students` });
  }

  // ---- Fallback 404 ----
  sendJSON(res, 404, { error: `Route ${pathname} not found` });
});

server.listen(PORT, () => {
  console.log(`Student Information Server running at http://localhost:${PORT}/`);
});
