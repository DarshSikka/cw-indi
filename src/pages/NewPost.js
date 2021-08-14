import React, { useState, useEffect } from "react";
import cookies from "react-cookies";
import { Redirect } from "react-router-dom";
import Nav from "../components/Nav";
export default function NewPost(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(props.user());
  });
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const submit = () => {
    console.log(
      JSON.stringify({
        content: post,
        title,
        author: user.username,
        img: image,
      })
    );
    fetch(`${process.env.REACT_APP_API_KEY}/posts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: post,
        title,
        author: user.username,
        img: image,
      }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        if (!res.error) {
          alert("Uploaded");
        }
      });
  };
  const handleFile = (e) => {
    const rdr = new FileReader();
    rdr.onload = (eve) => {
      setImage(eve.target.result);
    };
    rdr.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Nav />
      {!user?.username ? (
        <h1>Login to access this feature</h1>
      ) : (
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <br />
          <textarea
            style={{ border: "2px solid red" }}
            value={post}
            placeholder="Enter post content"
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <br />
          <label for="filer">Upload an image</label>
          <br />
          <input
            onChange={handleFile}
            type="file"
            id="filer"
            style={{ display: "none" }}
          />
          <label>Preview: </label>
          <img src={image} />
          <button onClick={submit}>Upload</button>
        </div>
      )}
    </>
  );
}
