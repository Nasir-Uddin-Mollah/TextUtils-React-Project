import React from "react";

export default function About() {
  return (
    <>
      <div className="max-w-md mx-auto my-10 p-8 rounded-xl border-2 border-indigo-500 shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          About This Project
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          This is a simple React practice project to help you learn and
          demonstrate core React concepts like components, props, and state
          management.
        </p>
      </div>
    </>
  );
}
