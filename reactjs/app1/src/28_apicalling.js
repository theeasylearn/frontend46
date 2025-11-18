// SimpleRegister.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function SimpleRegister() {
  const [name, setName] = useState("");       // store name
  const [email, setEmail] = useState("");     // store email
  const [responseText, setResponseText] = useState(""); // show result

  // Runs when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();               // stop page reload
    setResponseText("Sending...");    // quick feedback

    const payload = { name, email };  // data to send

    try {
      // POST to a public test API (no server required)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // parse JSON response and show it
      const data = await res.json();
      setResponseText("Server returned: " + JSON.stringify(data));
    } catch (err) {
      // simple error message for beginners
      setResponseText("Error: " + err.message);
      console.error(err);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 480, margin: 20 }}>
      <h2>Simple POST (Fetch) Demo</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            type="email"
            required
          />
        </div>

        <button type="submit" style={{ padding: "8px 12px" }}>
          Send
        </button>
      </form>

      <div style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>
        <strong>Result:</strong>
        <div>{responseText || "No response yet. Submit the form."}</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SimpleRegister />);
