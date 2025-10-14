
// props
// addInput: (content:string) => void;

import { useState } from "react";

type PostInputProps = {
  addInput: (content: string) => void;
}

export default function PostInput({ addInput }: PostInputProps) {
  const [content, setContent] = useState("");

  return (
    <>
      <div className="h-64 w-128 border-4 rounded-2xl flex flex-col p-4 gap-4">

        <div className="flex justify-center">
          <textarea
            className="w-full h-38 rounded-2xl border-4 p-2 text-2xl"
            value={content}
            onChange={
              (e) => {
                setContent(e.target.value)
              }}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="p-2 px-4 rounded-2xl w-30 text-2xl border-4"
            onClick={() => {
              if (!content) return;
              addInput(content)
              setContent("");
            }}
          >Post</button>
        </div>

      </div>
    </>
  );
}
