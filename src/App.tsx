import { useState } from "react";
import Post from "./components/Post";
import PostInput from "./components/PostInput";

export default function App() {
  const [postList, setPostList] = useState<string[]>([]);

  function addPost(content: string) {
    setPostList(prevList => {
      const newList = [content, ...prevList];
      return newList;
    });
  }

  return (
    <div
      className="flex flex-col justify-center min-h-screen items-center py-10 gap-4"
    >

      <div className="bg-red-500 w-full h-20">
      </div>

      <PostInput addInput={addPost} />

      {postList.map((content) => {
        return <Post key={content} content={content} />
      })}

    </div>
  )
}
