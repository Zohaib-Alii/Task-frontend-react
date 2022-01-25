import { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

function PostDetailApi() {
  const [postID, setPostID] = useState([]);
  useEffect(() => {
    const fetchPostDetailList = async () => {
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/posts/${1}`
      );
      setPostID(data);
    };
    fetchPostDetailList();
  }, [setPostID]);
  return (
    <div>
      POST DETAILS API
      <ReactBootStrap.Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{postID.title}</td>
            <td>{postID.body}</td>
            <td>in this Api we dont have comments</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default PostDetailApi;
