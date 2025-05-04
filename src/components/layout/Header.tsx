import Link from "next/link";
import {
  HomeIcon,
  UserCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-indigo-600">
            NestNext SNS
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <HomeIcon className="h-6 w-6" />
            </Link>
            <Link
              href="/notifications"
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <BellIcon className="h-6 w-6" />
            </Link>
            <Link
              href="/profile"
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <UserCircleIcon className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
