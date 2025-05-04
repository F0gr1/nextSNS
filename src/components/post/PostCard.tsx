import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";

interface PostCardProps {
  post: {
    id: string;
    content: string;
    author: {
      id: string;
      name: string;
      username: string;
      avatar?: string;
    };
    createdAt: string;
    likes: number;
    comments: number;
    isLiked?: boolean;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex items-start gap-4">
        <Link href={`/profile/${post.author.username}`}>
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Link
              href={`/profile/${post.author.username}`}
              className="font-medium text-gray-900 hover:text-indigo-600"
            >
              {post.author.name}
            </Link>
            <span className="text-sm text-gray-500">
              @{post.author.username}
            </span>
            <span className="text-sm text-gray-500">・</span>
            <time className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString("ja-JP")}
            </time>
          </div>
          <p className="text-gray-900 mb-4">{post.content}</p>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors">
              {post.isLiked ? (
                <HeartIconSolid className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
