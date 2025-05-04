import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function PostForm() {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API実装後に投稿処理を追加
    console.log("投稿内容:", content);
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 mb-8"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="いまどうしてる？"
        className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <div className="flex items-center justify-between mt-4">
        <button
          type="button"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <PhotoIcon className="h-6 w-6" />
        </button>
        <button
          type="submit"
          disabled={!content.trim()}
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          投稿する
        </button>
      </div>
    </form>
  );
}
