"use client";
import { ChangeEvent, useId, useState } from "react";

import { useRouter } from "next/navigation";

import { usePosts } from "@/store/postContext";

export default function User() {
  const router = useRouter();
  const { addPostsHandler } = usePosts();
  const id = useId();
  const [text, setText] = useState("");

  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onAddPost = () => {
    addPostsHandler(text, id);
    router.push("/viewer");
  };

  return (
    <div className="p-8 bg-gradient-to-r from-yellow-50 to-blue-200 min-h-screen">
      <h2 className="text-center my-4">Please tell us about your Idea...</h2>
      <div className="flex gap-2 flex-col items-center">
        <form className="w-full">
          <textarea
            rows={3}
            className="textarea textarea-bordered textarea-lg w-full max-w-full"
            placeholder="Write your thoughts here..."
            onChange={textChangeHandler}
          ></textarea>

          <button
            type="button"
            onClick={onAddPost}
            className="btn btn-primary float-right"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
