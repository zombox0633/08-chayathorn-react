import ButtonNavigate from "../components/ButtonNavigate";
import HeaderSection from "../components/HeaderSection";

function AdminPage() {
  return (
    <main className=" flex flex-col items-center justify-evenly w-full min-h-screen py-16 px-8">
      <HeaderSection />
      <div className=" w-full flex justify-center gap-x-32">
        <ButtonNavigate name={"Home"} path={"/"} />
        <ButtonNavigate name={"User"} path={"/user"} />
      </div>
      <form className=" flex justify-center">
        <div className=" flex gap-x-2 p-4 border-2">
          <input id="first-name" type="text" placeholder="First name" />
          <input id="last-name" type="text" placeholder="Last name" />
          <input id="position" type="text" placeholder="Position" />
          <button>Save</button>
        </div>
      </form>
    </main>
  );
}

export default AdminPage;
