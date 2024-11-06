
import ButtonNavigate from "../components/ButtonNavigate";
import HeaderSection from "../components/HeaderSection";
import UserCreationForm from "../components/UserCreationForm";
import TableUserData from "../components/TableUserData";

function AdminPage() {
  return (
    <main className=" flex flex-col items-center justify-evenly w-full min-h-screen py-16 px-8">
      <HeaderSection />
      <div className=" w-full flex justify-center gap-x-32">
        <ButtonNavigate name={"Home"} path={"/"} />
        <ButtonNavigate name={"User"} path={"/user"} />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold">Create User</h3>
        <UserCreationForm />
      </div>
      <TableUserData status="Action" />
    </main>
  );
}

export default AdminPage;
