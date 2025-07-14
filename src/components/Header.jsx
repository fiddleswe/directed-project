import React from "react";

const profileUser = "h-[17vh] w-[17vh] rounded-full bg-white/60 text-white"
const usernameHolder = "text-[30px] font-medium text-white text-opacity-60"

export default function Header() {
  return (
    <header className="flex items-center justify-center relative gap-10">
        <div className={`${profileUser}`}>
        </div>
        <div className={`${usernameHolder}`}>
            Username
        </div>
    </header>   
  );
}
