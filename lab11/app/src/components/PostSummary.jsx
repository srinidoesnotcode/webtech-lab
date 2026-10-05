import { Link } from "react-router-dom";
export default function PostSummary({post}){return <article className="post-card"><h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2><p>{post.content}</p><div className="post-meta"><span>By {post.author}</span><span>{new Date(post.createdAt).toLocaleDateString()}</span></div></article>}
