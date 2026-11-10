import { Link } from "react-router-dom";

export default function Unavailable() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <div>
        <h1>Page coming soon</h1>
        <p>This page is not available yet.</p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}