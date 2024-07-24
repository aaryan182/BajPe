import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 


export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      navigate("/dashboard"); 
    }
  }, []);

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="FirstName"
            label={"First Name"}
            type={"text"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="LastName"
            label={"Last Name"}
            type={"text"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Email"
            label={"Email"}
            type={"email"}
          />
          <div className="relative">
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              label={"Password"}
              type={showPassword ? "text" : "password"} 
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 mt-8 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};