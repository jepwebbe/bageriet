import React from "react";
import useGetByIdApiDataFromEnpoint from "../../Hooks/useGetByIdApiDataFromEnpoint";
import Login from "../Login/Login";
import { useLoginStore } from "../Login/useLoginStore";
import AddComment from "./AddComment";
import propic from "../../Assets/images/commentpictureDALLE.png";
import { CommentsStyled } from "./Styled.Comments";
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
    <CommentsStyled>
      <h3>{comments && comments? comments.length : "0" } kommentarer</h3>
      {loggedIn ? (
        <div>
          {comments &&
            comments.map((item) => (
              <div key={item.id} className="gridme">
                <img src={propic} alt="Profilbillede genereret af DALL-E" />

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.comment}</p>
                  <p>
                    Skrevet af {item.user.firstname} "{item.user.username}"{" "}
                    {item.user.lastname}
                  </p>
                </div>
              </div>
            ))}
          <AddComment addPostID={product_id} />
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
