import { UserDataType } from "../context/UserContext";

type TableUserDataPropsType = {
  user: UserDataType[];
  setUser: React.Dispatch<React.SetStateAction<UserDataType[]>>;
};

function TableUserData({ user, setUser }: TableUserDataPropsType) {
  const headerTable = ["First Name", "Last Name", "Position", "Action"];
  const isUser = user.length > 0;

  const handleDelete = (id: string) => {
    const filterData = user.filter((item) => item.id !== id);
    setUser(filterData);
  };

  return (
    <table className=" max-w-[50rem]">
      <thead>
        <tr>
          {headerTable.map((header, index) => (
            <th key={index}>
              <p>{header}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isUser ? (
          user.map((item) => (
            <tr key={item.id}>
              <td>
                <p>{item.firstName}</p>
              </td>
              <td>
                <p>{item.lastName}</p>
              </td>
              <td>
                <p>{item.position}</p>
              </td>
              <td>
                <div className="flex gap-x-6 ">
                  {/* <button className="btn-table">Edit</button> */}
                  <button
                    className="btn-table"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            {headerTable.map((_, index) => (
              <td key={index}>
                <p>-</p>
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableUserData;
