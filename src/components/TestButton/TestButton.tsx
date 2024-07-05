import React from "react";

// Define props interface if needed
export interface TestButtonProps {
  // Define props here, e.g., title, onClick, etc.
  title: string;
  onClick: () => void;
}

// Functional component
const TestButton: React.FC<TestButtonProps> = ({ title, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>Hello</button>
    </div>
  );
};

export default TestButton;
