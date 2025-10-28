import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleOnchange = (e) => {
    const {name,value} = e?.target;
    setFormData(
        (prev)=>({...prev,[name]:value})
    )
    console.log(e.target)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited",formData);
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
          onChange={(e) => handleOnchange(e)
            
          }
        />
        <button className="bg-yellow-500">submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
