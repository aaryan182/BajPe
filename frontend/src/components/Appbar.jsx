import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (!userToken) {
      navigate("/signin");
    } else {
      axios
        .get(import.meta.env.VITE_SERVER_URL + "/api/v1/user/getUser", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setUser(res.data);
        });
    }
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div>
      <Link to="/dashboard">
        <div>BajPe</div>
      </Link>
      <div>
        <Button label={"Sign Out"} onclick={signOutHandler} />
        <div>{user?.firstName}</div>
        <div>
          <div>{user?.firstName[0].toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};
