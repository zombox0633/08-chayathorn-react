import React from "react";

function HomePage() {
  return (
    <div className=" flex flex-col items-center justify-evenly w-full min-h-screen py-16 px-8">
      <div className=" flex flex-col items-center gap-y-6">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
      </div>
      <div className=" w-full flex justify-center gap-x-32">
        <button>User Home Sector</button>
        <button>Admin Home Sector</button>
      </div>
    </div>
  );
}

export default HomePage;
