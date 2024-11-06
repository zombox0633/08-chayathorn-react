import { useNavigate } from "react-router-dom";

type ButtonNavigatePropsType = {
  name: string;
  path: string;
};

function ButtonNavigate({ name, path }: ButtonNavigatePropsType) {
  const navigate = useNavigate();

  return (
    <button type="button" className="btn-df" onClick={() => navigate(`${path}`)}>
      {name}
    </button>
  );
}

export default ButtonNavigate;
