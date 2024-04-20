import React from "react";

export const Register = () => {
  return (
    <main>
      <section>
        <h1>Register</h1>
        <p>Please register to login</p>
      </section>
      <form>
        <input name="name" placeholder="Username" />
        <input name="email" placeholder="email@gmail.com" />
        <input name="password" placeholder="password" type="password" />
        <button>Sign up</button>
      </form>
    </main>
  );
};
