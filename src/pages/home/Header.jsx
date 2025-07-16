import React from "react";

const profileUser = "h-[16vh] w-[16vh] rounded-full bg-white/60 text-white";
const headerContainer = "-ml-[100px] flex items-start gap-7 sm:-ml-[150px] md:-ml-[200px] lg:-ml-[250px] xl:-ml-[300px]";
const subheaderContainer = "flex flex-col justify-center text-[17px] font-normal text-white text-opacity-60";

export default function header() {
  return (
    <header className="flex justify-center">
      <div className={`${headerContainer}`}>
        <div className={`${profileUser}`}></div>
        <div className={`${subheaderContainer} space-y-1`}>
          <div className="text-[30px]">Shindanai Sudprasert</div>
          <div>Joined Jan 9, 2025</div>
          <div>Bangkok, Thailand</div>
        </div>
      </div>
    </header>
  );
}
