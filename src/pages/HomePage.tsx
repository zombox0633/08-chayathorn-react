import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center justify-evenly w-full min-h-screen py-16 px-8">
      <div className=" flex flex-col items-center gap-y-6">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
      </div>
      <div className=" w-full flex justify-center gap-x-32">
        <button onClick={() => navigate("/user")}>User Home Sector</button>
        <button onClick={() => navigate("/admin")}>Admin Home Sector</button>
      </div>
    </div>
  );
}

export default HomePage;
