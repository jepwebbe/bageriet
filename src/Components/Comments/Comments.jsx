import React from "react";
import useGetByIdApiDataFromEnpoint from "../../Hooks/useGetByIdApiDataFromEnpoint";
import Login from "../Login/Login";
import { useLoginStore } from "../Login/useLoginStore";
import AddComment from "./AddComment";
import propic from "../../Assets/images/commentpictureDALLE.png";
import { CommentsStyled } from "./Styled.Comments";

const Comments = ({ postID }) => {
  const { loggedIn, username } = useLoginStore();

  const product_id = postID;
  // const [comments, setComments] = useState([]);
  const { state: comments } = useGetByIdApiDataFromEnpoint(
    "comments",
    product_id,
    "items"
  );
  // Function co-authored by chatGPT
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  return (
    <CommentsStyled>
      <h3>{comments && comments ? comments.length : "0"} kommentarer</h3>
      {loggedIn ? (
        <div>
          <AddComment addPostID={product_id} />
          {comments &&
            comments.map((item) => (
              <div key={item.id} className="gridme">
                <img src={propic} alt="Profilbillede genereret af DALL-E" />

                <div>
                  <h4>{item.title}</h4>
                  <p>Skrevet den {formatTimestamp(item.created)}</p>
                  <p>{item.comment}</p>
                  <p>
                    Skrevet af {item.user.firstname} "{item.user.username}"{" "}
                    {item.user.lastname}
                  </p>
                  {username === item.user.username && <button>X</button>}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <p>Log ind for at se og oprette kommentarer</p>
          <Login />
        </div>
      )}
    </CommentsStyled>
  );
};

export default Comments;
