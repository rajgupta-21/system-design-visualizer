"use client";
import { setUserName } from "@/app/redux/slice/project-title-status.slice";
import { DataResponseForUser, User } from "@/app/types/page";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function WelcomeCard() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | undefined>();
  const handleDetailsOfUser = async () => {
    const response = await fetch("http://localhost:4000/auth/user", {
      method: "GET",
      credentials: "include",
    });
    const data: DataResponseForUser = await response.json();
    setUser(data.user);
    dispatch(setUserName(data.user.name));
  };
  useEffect(() => {
    handleDetailsOfUser();
  }, []);
  return (
    <div
      className="
rounded-2xl
p-8
border
border-white/10
bg-gradient-to-br
from-purple-900/30
to-blue-900/20
"
    >
      <h1
        className="
text-3xl
font-bold
"
      >
        Welcome back, {user?.name} 👋
      </h1>

      <p className="text-zinc-400 mt-3">
        Design scalable systems visually and intelligently.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          className="
px-6
py-3
rounded-xl
bg-gradient-to-r
from-purple-500
to-blue-500
font-semibold
"
        >
          + New Design
        </button>

        <button
          className="
px-6
py-3
rounded-xl
border
border-white/20
"
        >
          Explore Templates
        </button>
      </div>
    </div>
  );
}
