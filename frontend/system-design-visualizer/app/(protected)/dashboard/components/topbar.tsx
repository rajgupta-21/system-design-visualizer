"use client";

import { useSelector } from "react-redux";

const getInitial = (name?: string) => {
  if (!name) return "U";

  return name.charAt(0).toUpperCase();
};

export default function Topbar() {
  const userName = useSelector((state) => state.project.userName);

  return (
    <header
      className="
        h-20
        border-b
        border-white/10
        flex
        items-center
        justify-between
        px-8
      "
    >
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex gap-5">
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-purple-600
            flex
            items-center
            justify-center
            font-semibold
            text-white
          "
        >
          {getInitial(userName)}
        </div>
      </div>
    </header>
  );
}
