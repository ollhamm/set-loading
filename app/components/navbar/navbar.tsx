"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useStore from "@/app/store";

const Navbar = () => {
  const { loading } = useStore();

  const router = useRouter();
  return (
    <div className="flex flex-row w-full bg-slate-300 px-3 py-3 gap-4">
      <div className="flex bg-slate-400 py-3 px-2 rounded-lg hover:bg-slate-50 cursor-pointer">
        <div onClick={() => router.push("/")}>Home page</div>
      </div>
      <div className="flex bg-slate-400 py-3 px-2 rounded-lg hover:bg-slate-50 cursor-pointer">
        <div onClick={() => router.push("/upload")}>Uploaded</div>
      </div>
      <div className="ml-auto items-end flex">
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Navbar;
