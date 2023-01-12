import React from "react";
import { useState } from "react";
import appService from "../App/Appservices/AppService";
import Comments from "../Comments/Comments";
import { useForm } from "react-hook-form";
import { useLoginStore } from "../Login/useLoginStore";
// a work in progress, currently loops infinitely
const AddComment = ({addPostID}) => {
  const product_id = addPostID
  const { loggedIn, userInfo } = useLoginStore();
  const [postID, setPostID] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const postData = {
      user_id: data.user_id,
      product_id: data.product_id,
      comment: data.comment,
      active: true,
      title: data.title,
    };
    try {
      const response = await appService.Create("comments", postData);

      if (response.status) {
        console.log(response.data);
        setPostID(response.data.new_id);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loggedIn ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("product_id")}
            id="product_id"
            value={product_id}
          />
          <input
            type="text"
            {...register("user_id")}
            value={userInfo.user_id}
          />

          {errors.title?.type === "required" && <p>FORKERT</p>}
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
          />
          <textarea
            {...register("comment", { required: true })}
            id="comment"
            rows="10"
            placeholder="Giv din mening til kende"
          ></textarea>
          <input type="submit" value="Send comment" />
        </form>
      ) : (
        <p>Log dog ind</p>
      )}
    </>
  );
};

export default AddComment;
