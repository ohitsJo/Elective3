"use client";

import { useState } from "react";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const user: UserProps = {
  name: "",
  email: "",
  password: "",
};

const SignInPage = () => {
  const [values, setValues] = useState(user);
  return (
    <div className="p-10 flex justify-center items-center flex-col">
      <h1 className="text-center text-cyan-700 text-4xl">Sign In Here</h1>
      <div className="pt-5 flex flex-col gap-5 w-1/3">
        <input
          type="text"
          className="rounded-md border p-2"
          placeholder="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />

        <input
          type="text"
          className="rounded-md border p-2"
          placeholder="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <input
          type="password"
          className="rounded-md border p-2"
          placeholder="Password"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
      </div>
    </div>
  );
};

export default SignInPage;
