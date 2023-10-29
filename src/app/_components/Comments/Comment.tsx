import { FC } from "react";

interface IComment {
  comment: string;
}

const Comment: FC<IComment> = ({ comment }) => {
  return (
    <div className="card-bordered px-4 py-2 rounded-lg border-gray-300">
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
