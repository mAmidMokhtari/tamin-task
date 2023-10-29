import React, { FC } from "react";

import { usePosts } from "@/store/postContext";

interface IJuryActions {
  id: string;
  accepted?: boolean;
  rejected?: boolean;
}

const JuryActions: FC<IJuryActions> = ({ id, accepted, rejected }) => {
  const { acceptPostHandler, rejectPostHandler } = usePosts();

  const onAcceptPost = () => {
    acceptPostHandler(id);
  };

  const onRejectPost = () => {
    rejectPostHandler(id);
  };

  return (
    <div className="flex gap-2 items-start">
      <button
        disabled={accepted || rejected}
        onClick={onAcceptPost}
        className="btn btn-success disabled:btn-disabled"
      >
        Accept
      </button>
      <button
        disabled={rejected || accepted}
        onClick={onRejectPost}
        className="btn btn-error disabled:btn-disabled"
      >
        Reject
      </button>
    </div>
  );
};

export default JuryActions;
