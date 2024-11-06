import { useContext, useState } from "react";
import { UserContext, UserDataType } from "../context/UserContext";

type InputUserDataType = {
  firstName: string;
  lastName: string;
  position: string;
};

function UserCreationForm() {
  const { setUser } = useContext(UserContext);
  const [inputUserData, setInputData] = useState<InputUserDataType>({
    firstName: "",
    lastName: "",
    position: "",
  });

  const handleInputUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUserData: UserDataType = {
      id: crypto.randomUUID(),
      firstName: inputUserData.firstName.trim(),
      lastName: inputUserData.lastName.trim(),
      position: inputUserData.position.trim(),
    };

    setUser((prev) => [...prev, newUserData]);
    setInputData({
      firstName: "",
      lastName: "",
      position: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className=" flex justify-center">
      <div className=" flex gap-x-2 p-4 border-2">
        <input
          name="firstName"
          type="text"
          value={inputUserData.firstName}
          placeholder="First name"
          required
          onChange={handleInputUser}
        />
        <input
          name="lastName"
          type="text"
          value={inputUserData.lastName}
          placeholder="Last name"
          required
          onChange={handleInputUser}
        />
        <input
          name="position"
          type="text"
          value={inputUserData.position}
          placeholder="Position"
          required
          onChange={handleInputUser}
        />
        <button type="submit" className="btn-df">
          Save
        </button>
      </div>
    </form>
  );
}

export default UserCreationForm;
