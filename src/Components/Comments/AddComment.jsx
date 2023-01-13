import React from "react";
import { useState } from "react";
import appService from "../App/Appservices/AppService";
import { useForm } from "react-hook-form";
import { useLoginStore } from "../Login/useLoginStore";
import { AddCommentsStyled } from "./Styled.AddComments";
import { FaPen } from 'react-icons/fa'
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
        <AddCommentsStyled onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            {...register("product_id")}
            id="product_id"
            value={product_id}
          />
          <input
            type="hidden"
            {...register("user_id")}
            value={userInfo.user_id}
          />
          {errors.title?.type === "required" && <p>FORKERT</p>}
          <FaPen />
          <div>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Titel"
            />
            <textarea
              {...register("comment", { required: true })}
              id="comment"
              rows="1"
              placeholder="Fortæl os hvad du synes"
            ></textarea>
          </div>
          <input type="submit" value="Indsæt" />
        </AddCommentsStyled>
      ) : (
        <p>Log dog ind</p>
      )}
    </>
  );
};

export default AddComment;
