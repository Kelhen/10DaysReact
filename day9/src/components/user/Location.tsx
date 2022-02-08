import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Location() {
  const user = useContext(UserContext);
  return (
    <div>
      <strong>Location: </strong>
      <span>{user.location}</span>
    </div>
  );
}
