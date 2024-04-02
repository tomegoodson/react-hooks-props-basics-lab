// Example usage of the About component
import React from 'react';
import About from './About'; // Assuming this is the correct path to your About component

function App() {
  const bioContent = "This is my bio.";

  return (
    <div className="App">
      <About bio={bioContent} />
    </div>
  );
}

export default App;