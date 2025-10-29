import React, { useState } from "react";
import API from "../features/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited", formData);
    const response = await API.post("/user/login", formData);
    console.log("API response from login api ", response);
    navigate("/");
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
          type="email"
          className="border border-b-black"
          placeholder="youe@email.com"
          onChange={(e) => handleOnchange(e)}
          name="email"
          value={formData.email}
        />
        <input
          name="password"
          value={formData.password}
          type="password"
          className="border border-b-black"
          placeholder="******"
          onChange={(e) => handleOnchange(e)}
        />
        <button className="bg-yellow-500">submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
