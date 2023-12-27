import React, { useState, useEffect } from "react";
import "./CommentPage.css";


export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Load comments from local storage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment
  const addComment = () => {
    if (newComment.trim() === "") {
      return;
    }

    const comment = {
      id: Date.now(),
      author: "User", // You can replace this with the actual user name
      content: newComment,
    };

    setComments((prevComments) => [...prevComments, comment]);
    setNewComment("");
  };

  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="comment-container">
      <h1>Comment Page</h1>
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
        ></textarea>
        <button onClick={addComment}>Submit</button>
      </div>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
