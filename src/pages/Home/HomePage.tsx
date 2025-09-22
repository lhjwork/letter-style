import React from "react";
import Stamp from "../../components/shared/test/Stamp";

const HomePage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Stamp>
        <p>This is my first stamp with Tailwind!</p>
        <p>So clean and easy!</p>
      </Stamp>
    </div>
  );
};

export default HomePage;
