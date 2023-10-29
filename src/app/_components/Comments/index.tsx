import { FC } from "react";

import { usePosts } from "@/store/postContext";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

interface IComments {
  comments: { text: string; id: string }[];
  id: string;
}

const Comments: FC<IComments> = ({ comments, id }) => {
  const { addCommentHandler } = usePosts();
  return (
    <div className="w-full flex flex-col gap-2">
      <CommentForm onAddComment={addCommentHandler} id={id} />
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment.text} />
      ))}
    </div>
  );
};

export default Comments;
