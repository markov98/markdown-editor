"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [text, setText] = useState("# Hello\n\nType **markdown** on the left.");

  return (
    <div className="flex h-screen">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 resize-none border-r p-4 font-mono text-sm outline-none"
      />
      <div className="prose max-w-none flex-1 overflow-auto p-4">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}