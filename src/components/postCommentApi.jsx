import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

function Table() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetchCommentList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      setComment(data);
    };
    fetchCommentList();
  }, [setComment]);

  return (
    <div className='App'>
      Post Comments Api :
      <ReactBootStrap.Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((com) => {
            return (
              <tr key={com.id}>
                <td>{com.email}</td>
                <td>{com.name}</td>
                <td>{com.body}</td>
              </tr>
            );
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Table;
