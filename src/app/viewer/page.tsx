"use client";
import { usePosts } from "@/store/postContext";

import Post from "../_components/Post";

export default function Viewer() {
  const { posts } = usePosts();

  return (
    <div className="flex gap-2 flex-col items-start p-6 bg-gradient-to-r from-yellow-50 to-blue-200">
      <ul className="w-full">
        {posts.map((post) => (
          <li className="mb-4" key={post.id}>
            <Post
              type="viewer"
              accepted={post.accepted}
              liked={post.liked}
              rejected={post.rejected}
              comments={post.comments}
              text={post.text}
              id={post.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
