import React from "react";

const mainClass =
  "flex flex-col gap-4 pt-[150px] font-normal text-white";

export default function main() {
  return (
    <main className={`${mainClass}`}>
      <div>
        <h1 className="ml-32 text-3xl font-bold">Registered course</h1>
      </div>
      <div className="mb-4 ml-32 mt-6 h-[30vh] w-[85%] rounded-xl bg-[#141414]"></div>
    </main>
  );
}
