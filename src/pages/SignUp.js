import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import cookie from "react-cookies";

const SignUp = () => {
  const [msg, setMsg] = useState({});
  const handleSignUp = (e) => {
    e.preventDefault();
    const [username, email, name, password, confirm] = e.target;
    if (password.value === confirm.value && password.value.length > 8) {
      fetch(`${process.env.REACT_APP_API_KEY}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
          name: name.value,
        }),
      })
        .then((resp) => resp.json())
        .then((result) => {
          console.log(result);
          if (result._id) {
            cookie.save("userToken", result._id);
            setMsg({
              messages: ["User created & Logged in"],
              error: false,
            });
          } else {
            setMsg({
              error: true,
              messages: ["Drat, username/email is taken :("],
            });
          }
        });
    } else {
      if (password.value.length <= 8) {
        setMsg({
          messages: [
            ...(msg.messages || []),
            "At least 8 characters needed for password",
          ],
          error: true,
        });
      }
      if (password.value !== confirm.value) {
        setMsg({
          messages: [...(msg.messages || []), "Passwords don't match"],
          error: true,
        });
      }
    }
  };
  return (
    <div>
      <Nav />
      <form onSubmit={handleSignUp} style={{ minHeight: "75vh" }}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Register
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Already a member?{" "}
                <Link
                  to="/login"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap flex-col -m-2">
                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="text"
                      className="leading-7 text-sm text-gray-600"
                      style={{ fontWeight: "bold" }}
                    >
                      USERNAME
                    </label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-first focus:bg-white focus:ring-2 focus:ring-first text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                      style={{ fontWeight: "bold" }}
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-first focus:bg-white focus:ring-2 focus:ring-first text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                      style={{ fontWeight: "bold" }}
                    >
                      NAME
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-first focus:bg-white focus:ring-2 focus:ring-first text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-gray-600"
                      style={{ fontWeight: "bold" }}
                    >
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-first focus:bg-white focus:ring-2 focus:ring-first text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2 mx-auto">
                  <div className="relative">
                    <label
                      htmlFor="cpassword"
                      className="leading-7 text-sm text-gray-600"
                      style={{ fontWeight: "bold" }}
                    >
                      CONFIRM PASSWORD
                    </label>
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-first focus:bg-white focus:ring-2 focus:ring-first text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                {msg?.messages?.map((ele) => {
                  return (
                    <h4
                      class="text-center"
                      style={{ color: msg.error ? "red" : "green" }}
                    >
                      {ele}
                      {!msg.error ? <Redirect to="/app" /> : null}
                    </h4>
                  );
                })}
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-second bg-first border-0 py-2 px-8 focus:outline-none hover:bg-third rounded text-lg"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
