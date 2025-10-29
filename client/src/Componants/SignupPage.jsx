import React, { useState } from "react";
import LoginPage from "./login";
import { useNavigate } from "react-router-dom";
import API from "../features/api";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await API.post("/user/register", formData);
    navigate("/");
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(formData);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center  border p-10 ">
      <form
        className="grid grid-rows-1 gap-2 text-center  p-10   
      "
        onSubmit={handleSubmit}
      >
        <h1 className="justify-center">Login </h1>

        <input
          type="string"
          className="border border-b-black p-2"
          placeholder="youe name"
          onChange={(e) => handleOnchange(e)}
          name="name"
          value={formData.name}
        />
        <input
          type="email"
          className="border border-b-black p-2"
          placeholder="youe@email.com"
          onChange={(e) => handleOnchange(e)}
          name="email"
          value={formData.email}
        />
        <input
          name="password"
          value={formData.password}
          type="password"
          className="border border-b-black p-2"
          placeholder="******"
          onChange={(e) => handleOnchange(e)}
        />
        <button className="bg-yellow-500  " onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
