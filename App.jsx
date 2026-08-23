import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)}>
        {title} ▼
      </button>

      {open && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <Link key={index} to={item.path} onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Page({ title, intro, sections }) {
  return (
    <main className="content-page">
      <div className="content-inner">
        <span className="page-kicker">SNU Chennai</span>
        <h1>{title}</h1>
        {intro && <p className="page-intro">{intro}</p>}

        {sections &&
          sections.map((section, i) => (
            <div className="content-section" key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs &&
                section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              {section.list && (
                <ul>
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </main>
  );
}

function Home() {
  return (
    <main className="hero">
      <div className="hero-card">
        <p className="eyebrow">SHIV NADAR UNIVERSITY CHENNAI</p>
        <h1>Welcome to Shiv Nadar University Chennai</h1>
        <p>
          Established by the Shiv Nadar University Act 2018 of the Tamil Nadu
          Legislative Assembly, SNU Chennai is part of the Shiv Nadar
          Foundation's three-decade legacy in education. Set on a campus
          shared with SSN College of Engineering in Kalavakkam, the university
          offers engineering, commerce & management, science & humanities and
          law programs.
        </p>
      </div>
    </main>
  );
}

// ---------------------------------------------------------
// REAL CONTENT sourced and paraphrased from snuchennai.edu.in
// ---------------------------------------------------------
const CONTENT = {
  vision: {
    title: "Vision & Mission",
    sections: [
      {
        heading: "Our Vision",
        paragraphs: [
          "A global university focused on innovation, research, academic excellence and creativity, working to develop socially conscious leaders capable of addressing future challenges.",
        ],
      },
      {
        heading: "Our Mission",
        paragraphs: [
          "To build a center of excellence in higher education on par with leading institutions worldwide, and to run programs in niche areas that deliver quality education through innovative research — producing the knowledge leaders of tomorrow.",
        ],
      },
    ],
  },
  leadership: {
    title: "Leadership",
    sections: [
      {
        heading: "University Leadership",
        list: [
          "Mr. R. Srinivasan — Chancellor",
          "Prof. S. K. Bhattacharyya — Vice Chancellor",
          "Dr. N. Nallusamy — Registrar",
        ],
      },
      {
        heading: "Founders",
        paragraphs: [
          "Mr. Shiv Nadar, Founder of HCL Group and the Shiv Nadar Foundation, established the institution as part of his broader philosophy of 'creative philanthropy.'",
          "Ms. Roshni Nadar Malhotra, Chairperson of HCLTech and Trustee of the Shiv Nadar Foundation, has described the university as an aspiration to deliver world-class academic opportunities to all sections of society.",
        ],
      },
      {
        heading: "Distinguished Mentors",
        list: [
          "Prof. C. Rangarajan — Chairman, Madras School of Economics; former Governor, Reserve Bank of India",
          "Dr. Raj Reddy — University Professor, Carnegie Mellon University; ACM Turing Award winner",
        ],
      },
    ],
  },
  departments: {
    title: "Departments",
    sections: [
      {
        heading: "SSN School of Engineering",
        list: [
          "Biomedical Engineering",
          "Chemical Engineering",
          "Civil and Infrastructure Engineering",
          "Computer Science and Engineering",
          "Electrical and Electronics Engineering",
          "Electronics and Communication Engineering",
          "Information Technology",
          "Mechanical Engineering",
        ],
      },
      {
        heading: "School of Commerce & Management",
        list: ["Department of Commerce", "MBA program"],
      },
      {
        heading: "School of Science & Humanities",
        list: ["B.Sc Economics (Data Science)"],
      },
      {
        heading: "Shiv Nadar School of Law",
        list: ["B.A., LL.B (integrated law program)"],
      },
    ],
  },
  undergraduate: {
    title: "Undergraduate Programs",
    intro:
      "The SSN School of Engineering alone runs 12 undergraduate programs across 8 departments, built to keep pace with evolving technology trends.",
    sections: [
      {
        heading: "Programs on offer",
        list: [
          "B.Tech across all 8 engineering departments",
          "B.Com and B.Com (Professional Accounting)",
          "B.Sc Economics (Data Science)",
          "B.A., LL.B (5-year integrated law program)",
        ],
      },
    ],
  },
  postgraduate: {
    title: "Postgraduate Programs",
    sections: [
      {
        heading: "Programs on offer",
        list: [
          "M.Tech programs across engineering departments",
          "MBA — blends contemporary industry exposure with a transformative approach to building managerial competency",
        ],
      },
    ],
  },
  phd: {
    title: "PhD Programs",
    sections: [
      {
        paragraphs: [
          "SNU Chennai's PhD programs are built around original research at the frontiers of specialized fields and at the intersections between disciplines, guided by faculty from across the university's schools of engineering, commerce & management, science & humanities and law.",
        ],
      },
    ],
  },
  eligibility: {
    title: "Eligibility",
    sections: [
      {
        paragraphs: [
          "Eligibility criteria are set separately for each program — B.Tech, B.Com / B.Sc Economics, B.A. LL.B, MBA, M.Tech and PhD — and are published on the respective admissions pages of the university's admissions portal, along with any entrance-exam or interview requirements for that program.",
        ],
      },
    ],
  },
  application: {
    title: "Application Process",
    sections: [
      {
        paragraphs: [
          "Applications are submitted online through the university's dedicated admissions portal, with a separate application form for each program.",
        ],
        list: [
          "B.Tech Applications",
          "B.Com / B.Com (Professional Accounting) / B.Sc Economics (Data Science) Applications",
          "B.A., LL.B Applications",
          "MBA Applications",
          "M.Tech Applications",
          "Ph.D. Applications",
        ],
      },
    ],
  },
  dates: {
    title: "Important Dates",
    sections: [
      {
        paragraphs: [
          "The university publishes its Academic Calendar and admissions timelines for each cycle on its official website, covering application windows, entrance assessments, and the start of term for every program.",
        ],
      },
    ],
  },
  research: {
    title: "Research Areas",
    sections: [
      {
        heading: "School of Commerce & Management",
        list: [
          "Behavioural Finance",
          "Consumer Behaviour",
          "Corporate Finance & Governance",
          "Corporate Social Responsibility",
          "Financial Inclusion & Markets",
          "Investment Management",
          "Human Resource Management & Organisational Behaviour",
          "Mergers & Acquisitions",
          "Sustainable and Green Finance",
        ],
      },
      {
        heading: "Across the University",
        paragraphs: [
          "The School of Engineering and the School of Science & Humanities run their own active research programs alongside Commerce & Management, spanning technical, scientific and interdisciplinary work.",
        ],
      },
    ],
  },
  publications: {
    title: "Publications",
    sections: [
      {
        paragraphs: [
          "Faculty across SNU Chennai's schools publish regularly in peer-reviewed journals and present at national and international conferences. Dedicated research groups, such as the Speech Lab, maintain their own publication records within their specialized fields.",
        ],
      },
    ],
  },
  campus: {
    title: "Campus Life",
    intro:
      "SNU Chennai's shared campus with SSN College of Engineering is home to over 4,000 students, with infrastructure and support built around academics, wellbeing and extracurricular life.",
    sections: [
      {
        heading: "Academic Infrastructure",
        paragraphs: [
          "Cross-campus Wi-Fi and an extensively stocked library give students continuous access to academic resources.",
        ],
      },
      {
        heading: "Hostel & Sports",
        paragraphs: [
          "Hostel facilities offer spacious, air-conditioned rooms, while sports facilities include an indoor stadium, outdoor grounds, and dedicated coaching for both fitness and competitive sport.",
        ],
      },
      {
        heading: "Health, Wellness & Accessibility",
        paragraphs: [
          "A resident campus doctor, round-the-clock emergency support, and an on-campus pharmacy cover students' healthcare needs. Most campus buildings include ramps, rails and accessible facilities for differently-abled students.",
        ],
      },
      {
        heading: "Clubs, Transport & Community Service",
        paragraphs: [
          "A wide range of clubs and activities support students' personal interests, AC buses run multiple routes across the city for day scholars, and the National Service Scheme (NSS) unit runs community engagement and outreach initiatives.",
        ],
      },
    ],
  },
  placements: {
    title: "Placements",
    intro:
      "Placements at SNU Chennai are run by the same team behind SSN's long placement track record, combining structured training with direct industry exposure.",
    sections: [
      {
        heading: "Placement Training",
        paragraphs: [
          "The training program covers aptitude testing, technical and soft skills, resume writing, and mock interviews to prepare students for the job market.",
        ],
      },
      {
        heading: "Industry Exposure",
        paragraphs: [
          "Students gain industry exposure through internships, co-op placements, hackathons and other competitions run in partnership with leading companies.",
        ],
      },
      {
        heading: "Alumni Outcomes",
        paragraphs: [
          "Alumni of the Shiv Nadar Foundation network are placed with organizations including Amazon, Apple, Google, Microsoft, SAP, Dell, HP, TCS and S&P Global, and have gone on to universities such as UCL, McGill and the London Business School.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact Us",
    sections: [
      {
        heading: "Address",
        paragraphs: [
          "Shiv Nadar University Chennai, Rajiv Gandhi Salai (OMR), Kalavakkam – 603 110, Chengalpattu (Dt), Tamil Nadu, India.",
        ],
      },
      {
        heading: "Phone",
        list: ["044 - 3511 9300", "044 - 2746 1700", "1800 208 1199 (toll-free)"],
      },
    ],
  },
};

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo">
          Shiv Nadar University
        </Link>

        <div className="menu">
          <Dropdown
            title="About Us"
            items={[
              { name: "Vision & Mission", path: "/vision" },
              { name: "Leadership", path: "/leadership" },
              { name: "Departments", path: "/departments" },
            ]}
          />

          <Dropdown
            title="Academics"
            items={[
              { name: "Undergraduate", path: "/undergraduate" },
              { name: "Postgraduate", path: "/postgraduate" },
              { name: "PhD", path: "/phd" },
            ]}
          />

          <Dropdown
            title="Admissions"
            items={[
              { name: "Eligibility", path: "/eligibility" },
              { name: "Application Process", path: "/application" },
              { name: "Important Dates", path: "/dates" },
            ]}
          />

          <Dropdown
            title="Research"
            items={[
              { name: "Research Areas", path: "/research" },
              { name: "Publications", path: "/publications" },
            ]}
          />

          <Link to="/campus">Campus Life</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Page {...CONTENT.vision} />} />
        <Route path="/leadership" element={<Page {...CONTENT.leadership} />} />
        <Route path="/departments" element={<Page {...CONTENT.departments} />} />
        <Route path="/undergraduate" element={<Page {...CONTENT.undergraduate} />} />
        <Route path="/postgraduate" element={<Page {...CONTENT.postgraduate} />} />
        <Route path="/phd" element={<Page {...CONTENT.phd} />} />
        <Route path="/eligibility" element={<Page {...CONTENT.eligibility} />} />
        <Route path="/application" element={<Page {...CONTENT.application} />} />
        <Route path="/dates" element={<Page {...CONTENT.dates} />} />
        <Route path="/research" element={<Page {...CONTENT.research} />} />
        <Route path="/publications" element={<Page {...CONTENT.publications} />} />
        <Route path="/campus" element={<Page {...CONTENT.campus} />} />
        <Route path="/placements" element={<Page {...CONTENT.placements} />} />
        <Route path="/contact" element={<Page {...CONTENT.contact} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
