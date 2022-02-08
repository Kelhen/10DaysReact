import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Name() {
  const user = useContext(UserContext);
  return (
    <div>
      <strong>Name: </strong>
      <span>{user.name}</span>
    </div>
  );
}
