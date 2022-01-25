import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

export default function Table() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };
    fetchPostList();
  }, [setPosts]);
  // delete section
  const handleDelete = (e) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      const filterd = posts.filter((postsIds) => postsIds.id !== e);
      setPosts(filterd);
    }
  };
  // delete end
  // read more start
  const ReadMore = ({ children = 100 }) => {
    const text = children;
    const [isShow, setIsShowLess] = useState(true);
    const result = isShow ? text.slice(0, 100) : text;
    function toggleIsShow() {
      setIsShowLess(!isShow);
    }
    return (
      <p>
        {result}
        <span className='btn btn-primary m-2' onClick={toggleIsShow}>
          {isShow ? "Read More" : "Read Less"}
        </span>
      </p>
    );
  };
  // read more end
  return (
    <div className='App'>
      Post Listing page
      <ReactBootStrap.Table striped bordered hover variant='light'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td>
                <span className='btn btn-info'>
                  <a
                    href={`https://jsonplaceholder.typicode.com/posts/${item.id}`}>
                    {item.id}
                  </a>
                </span>
              </td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>
                <ReadMore>{item.body}</ReadMore>
              </td>
              <td onClick={() => handleDelete(item.id)}>
                <span className='btn btn-danger m-2'>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}
