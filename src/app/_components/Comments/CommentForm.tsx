import { ChangeEvent, FC, useState } from "react";

interface ICommentForm {
  onAddComment: (text: string, id: string) => void;
  id: string;
}

const CommentForm: FC<ICommentForm> = ({ onAddComment, id }) => {
  const [comment, setComment] = useState("");

  const commentChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  function getUID() {
    return Date.now().toString(36);
  }

  const sendComment = () => {
    const commentId = getUID();
    onAddComment(comment, id, commentId);
  };

  return (
    <form>
      <label htmlFor="comment" className="sr-only">
        Comment
      </label>
      <div className="flex items-center gap-2">
        <input
          onChange={commentChangeHandler}
          type="text"
          className="input input-bordered flex-1"
          placeholder="Insert Comment..."
        />
        <button
          onClick={sendComment}
          type="button"
          className="p-2 text-blue-700 rounded-lg cursor-pointer hover:text-blue-500 transition-colors"
        >
          <svg
            className="w-5 h-5 rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Insert Comment</span>
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
