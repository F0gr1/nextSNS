import MainLayout from "@/components/layout/MainLayout";
import PostForm from "@/components/post/PostForm";
import PostCard from "@/components/post/PostCard";

const MOCK_POSTS = [
  {
    id: "1",
    content: "Next.jsとNestJSでSNSアプリを作っています！",
    author: {
      id: "1",
      name: "テストユーザー",
      username: "testuser",
    },
    createdAt: new Date().toISOString(),
    likes: 5,
    comments: 2,
    isLiked: true,
  },
  {
    id: "2",
    content: "TypeScriptの型システムは素晴らしいですね！",
    author: {
      id: "2",
      name: "開発者",
      username: "developer",
    },
    createdAt: new Date().toISOString(),
    likes: 3,
    comments: 1,
    isLiked: false,
  },
];

export default function Home() {
  return (
    <MainLayout>
      <PostForm />
      <div className="space-y-4">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </MainLayout>
  );
}
