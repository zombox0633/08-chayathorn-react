import { useContext } from "react";
import { UserContext } from "../context/UserContext";

type TableUserDataPropsType = {
  status: "Action" | "User";
};

function TableUserData({ status }: TableUserDataPropsType) {
  const { user, setUser } = useContext(UserContext);
  const headerTable = ["First Name", "Last Name", "Position"];
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
          {status === "Action" && (
            <th>
              <p>Action</p>
            </th>
          )}
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
              {status === "Action" && (
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
              )}
            </tr>
          ))
        ) : (
          <tr>
            {headerTable.map((_, index) => (
              <td key={index}>
                <p>-</p>
              </td>
            ))}
            {status === "Action" && (
              <td>
                <p>-</p>
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableUserData;
