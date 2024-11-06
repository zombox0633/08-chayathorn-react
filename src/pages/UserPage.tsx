import ButtonNavigate from "../components/ButtonNavigate";
import HeaderSection from "../components/HeaderSection";

function UserPage() {
  return (
    <main className=" flex flex-col items-center justify-evenly w-full min-h-screen py-16 px-8">
      <HeaderSection/>
      <div className=" w-full flex justify-center gap-x-32">
        <ButtonNavigate name={"Home"} path={"/"} />
        <ButtonNavigate name={"Admin"} path={"/admin"} />
      </div>
    </main>
  );
}

export default UserPage;
