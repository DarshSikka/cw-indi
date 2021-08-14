import React from "react";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid ? "sent" : "received";

  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img
          className="pfp"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p
          style={{
            overflow: "wrap",
            wordWrap: "break-word",
            maxWidth: "600px",
            lineHeight: "34px",
            padding: "10px 20px",
            borderRadius: "25px",
            position: "relative",
            textAlign: "center",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;
