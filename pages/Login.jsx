import React from "react";

export default function Login() {
  function handleSubmit() {}

  function handleChange() {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign in to your account</h1>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
