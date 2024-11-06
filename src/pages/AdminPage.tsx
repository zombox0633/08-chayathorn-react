import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ButtonNavigate from "../components/ButtonNavigate";
import HeaderSection from "../components/HeaderSection";
import UserCreationForm from "../components/UserCreationForm";
import TableUserData from "../components/TableUserData";

function AdminPage() {
  const { user, setUser } = useContext(UserContext);
  return (
    <main className=" flex flex-col items-center justify-evenly w-full min-h-screen py-16 px-8">
      <HeaderSection />
      <div className=" w-full flex justify-center gap-x-32">
        <ButtonNavigate name={"Home"} path={"/"} />
        <ButtonNavigate name={"User"} path={"/user"} />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold">Create User</h3>
        <UserCreationForm setUser={setUser} />
      </div>
      <TableUserData user={user} setUser={setUser} />
    </main>
  );
}

export default AdminPage;
