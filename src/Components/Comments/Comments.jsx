import React from "react";
import useGetByIdApiDataFromEnpoint from "../../Hooks/useGetByIdApiDataFromEnpoint";
import Login from "../Login/Login";
import { useLoginStore } from "../Login/useLoginStore";
import AddComment from "./AddComment";

const Comments = ({ postID }) => {
  const { loggedIn } = useLoginStore();

  const product_id = postID;
  // const [comments, setComments] = useState([]);
  const { state: comments } = useGetByIdApiDataFromEnpoint(
    "comments",
    product_id,
    "items"
  );
  return (
    <section>
      <h3>Kommentarer</h3>
      {loggedIn ? (
        <div>
          <ul>
            {comments.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          
        </div>
      ) : (
        <div>
          <p>Log ind for at se og oprette kommentarer</p>
          <Login />
        </div>
      )}
    </section>
  );
};

export default Comments;
