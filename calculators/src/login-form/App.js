import React, { useEffect, useState } from "react";
import Home from "./Home";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isRemember: false,
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleChange(e) {
    setForm((prevform) => ({
      ...prevform,
      [e.target.name]: e.target.value.trim().toLowerCase(),
    }));
    console.log(
      `Changed ${e.target.name} to ${e.target.value.trim().toLowerCase()}`
    );
  }

  const handleChangeCheckbox = () => {
    setForm((prevform) => ({ ...prevform, isRemember: !prevform.isRemember }));
    console.log(`Toggled isRemember to ${!form.isRemember}`);
  };

  const checkValidForm = () => {
    const { email, password } = form;
    setIsValid(email.trim() !== "" && password.trim() !== "");
    console.log(`Form is ${isValid ? "valid" : "invalid"}`);
  };

  const handleSubmit = () => {
    if (isValid) setIsLoggedIn(true);
    console.log(`Logged in: ${isLoggedIn}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("Logged out");
  };

  useEffect(() => {
    checkValidForm();
  }, [form]);

  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">
            {isLoggedIn ? "Welcome" : "Please sign in"}
          </h1>
          {!isLoggedIn && (
            <>
              <div className="form-floating">
                <input
                  className="form-control email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <label>Email address</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
                <label>Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input
                    type="checkbox"
                    checked={form.isRemember}
                    onChange={handleChangeCheckbox}
                  />{" "}
                  Remember me
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="button"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </>
          )}
          {isLoggedIn && (
            <Home onLogOut={handleLogout} />
            )}
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  );
}

export default App;
