import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function UserForm() {
  const user = useContext(UserContext);

  return (
    <div>
      <form action="" className="grid gap-2 rounded bg-gray-100 py-8 px-4">
        <div className="grid gap-1">
          <label className=" capitalize" htmlFor="name">
            update name:
          </label>
          <input
            className="rounded border border-gray-300 px-4 py-2"
            type="text"
            id="name"
            name="name"
            onChange={(e) => user.setName(e.target.value)}
          />
        </div>
        <div className="grid gap-1">
          <label className=" capitalize" htmlFor="location">
            update location:
          </label>
          <input
            className="rounded border border-gray-300 px-4 py-2"
            type="text"
            id="location"
            name="location"
            onChange={(e) => user.setLocation(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
