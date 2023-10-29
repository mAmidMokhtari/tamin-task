import "./globals.css";

import Link from "next/link";

import { AppProvider } from "@/store/postContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body>
        <AppProvider>
          <div className="navbar bg-gradient-to-r from-yellow-50 to-blue-200">
            <div className="flex-1">
              <Link href="/">
                <button className="btn btn-ghost normal-case text-xl sm:btn-sm md:btn-md lg:btn-lg">
                  Home
                </button>
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/user">
                    <button className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg">
                      Submit New Idea
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/viewer">
                    <button className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg">
                      Show Results
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/juror">
                    <button className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg">
                      Jury
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
