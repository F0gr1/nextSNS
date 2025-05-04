interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  return (
    <aside className={`${className} bg-white rounded-lg shadow p-6`}>
      <nav className="space-y-4">
        <div className="font-medium text-gray-900">トレンド</div>
        <div className="space-y-2">
          {["#NestJS", "#NextJS", "#TypeScript", "#React"].map((tag) => (
            <a
              key={tag}
              href={`/search?q=${tag}`}
              className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>

        <hr className="my-6" />

        <div className="font-medium text-gray-900">おすすめユーザー</div>
        <div className="space-y-4">
          {[
            { name: "Tech User", username: "@techuser" },
            { name: "Web Dev", username: "@webdev" },
            { name: "Code Master", username: "@codemaster" },
          ].map((user) => (
            <div key={user.username} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
                <div className="text-xs text-gray-600">{user.username}</div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
