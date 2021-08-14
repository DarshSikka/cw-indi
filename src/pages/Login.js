import React, { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import cookie from "react-cookies";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("logging in");
    fetch(`${process.env.REACT_APP_API_KEY}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.log("logged in");
        console.log(result);
        if (result.auth) {
          setMsg({ error: false, message: "Logged in successfully" });
          cookie.save("userToken", result.token);
        } else {
          setMsg({ error: true, message: "Wrong username/password" });
        }
      });
  };
  return (
    <div>
      <Nav />
      <form onSubmit={handleLogin} style={{ minHeight: "75vh" }}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Login
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                      style={{ fontWeight: "bold" }}
                    >
                      USERNAME
                    </label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <p
                  class="text-center"
                  style={{ color: msg.error ? "red" : "green" }}
                >
                  {msg.message}
                  {!msg.error ? <Redirect to="/profile" /> : null}
                </p>

                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Login
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

export default Login;
