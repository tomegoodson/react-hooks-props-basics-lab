// App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"; // Import the Links component

// Import user data
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* Pass githubUrl and linkedInUrl as props to the Links component */}
      <Links githubUrl={user.githubUrl} linkedInUrl={user.linkedInUrl} />
    </div>
  );
}

export default App;
