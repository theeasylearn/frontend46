//file:1
//Card.js

//file:2
//App.js

import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <Card
        title="React Card 1"
        image="https://via.placeholder.com/400x250.png?text=Card+Image"
        description="This is a simple card component built with React and Tailwind CSS."
      />
      <Card
        title="React Card 2"
        image="https://unsplash.com/photos/a-cozy-bedroom-with-a-neatly-made-bed-UvVHCAz9mFY"
        description="This is a simple card component built with React and Tailwind CSS."
      />
    </div>
  );
}

//file:3
//index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   // optional (Tailwind or your own CSS)
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
