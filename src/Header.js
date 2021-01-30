import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>African Marketplace</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}
