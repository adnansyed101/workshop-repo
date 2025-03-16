"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("Dashboard link");

  const [name, setName] = useState("name");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        value={name}
        className="bg-white"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
