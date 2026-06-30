"use client";

import { menu } from "@/app/constants/page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
          fixed
          cursor-pointer
          top-6
          left-6
          z-50
          rounded-xl
          bg-purple-600/30
          border
          border-purple-500/30
          px-4
          py-2
          text-purple-300
          hover:bg-purple-600/50
          transition
          "
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed
        md:static
        z-40
        h-screen
        transition-all
        duration-300
        h-screen
        
        ${isOpen ? "translate-x-0 w-72" : "-translate-x-full w-0"}

        border-r
        border-white/10
        bg-black/20
        p-6
        flex-col
        `}
      >
        {isOpen && (
          <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-10 ">
              <Link
                href="/dashboard"
                className="
                text-2xl
                font-bold
                bg-linear-to-r
                from-purple-400
                to-blue-400
                text-transparent
                bg-clip-text
                "
              >
                ◆ DesignAI
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="
                text-zinc-400
                hover:text-white
                cursor-pointer
                text-xl
                "
              >
                ✕
              </button>
            </div>

            {/* Menu */}
            <nav className="space-y-2">
              {menu.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                    block
                    px-4
                    py-3
                    rounded-xl
                    transition

                    ${
                      active
                        ? "bg-purple-600/30 text-purple-300 border border-purple-500/20"
                        : "text-zinc-400 hover:bg-white/5"
                    }

                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </aside>
    </>
  );
}
