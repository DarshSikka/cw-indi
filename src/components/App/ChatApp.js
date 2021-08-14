import React from "react";
import Nav from "./Nav";
import ChatMessage from "./ChatMessage";

function ChatApp() {
  let messages = [{ id: 1, text: "lol", photoURL: "", uid: "1" }];
  return (
    <div>
      <Nav />
      <main style={{ height: "75vh" }}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        {/* <span ref={dummy}></span> */}
      </main>

      <form
        class="rounded"
        // onSubmit={sendMessage}
        style={{
          height: "10vh",
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          fontSize: "1.5rem",
        }}
      >
        <input
          class="rounded-r"
          value={""}
          onChange={console.log("lol")}
          // onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type..."
          style={{
            color: "whitesmoke",
            lineHeight: 1.5,
            width: "100%",
            fontSize: "1.5rem",
            background: "#333",
            outline: "none",
            border: "none",
            padding: "0 10px",
          }}
        />

        <button
          type="submit"
          disabled={!""}
          style={{ width: "20%", height: "100%", padding: 0 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="text-white p-2 bg-green-500 rounded"
            style={{ width: "100%", height: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatApp;
