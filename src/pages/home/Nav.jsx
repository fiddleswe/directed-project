import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 text-[22px] text-white text-opacity-60";
const navClass = "left-0 top-0 z-50 w-full border-b-[1.5px] border-white/15 bg-black p-4 shadow-md";
const ulClass = "flex items-center justify-start gap-5 text-[14px] font-normal text-white text-opacity-60 ml-5";
const inputClass = "placeholder-white/60 text-white bg-[#2C2C2C] w-96 h-12 rounded-2xl pl-11 font-normal";
const searchClass = "text-sm font-normal text-white text-opacity-60";

export default function nav() {
  return (
    <nav
      className={`${navClass} fixed flex items-center justify-between`}
    >
      <ul className={ulClass}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Learning</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
      </ul>

      <div
        className={`${searchClass} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <IoMdSearch className={iconClass} />
        <input
          type="text"
          aria-label="Search course..."
          placeholder="Find your course..."
          className={inputClass}
        />
      </div>

      <div className="mr-5 flex items-center gap-5">
        <div className="h-[40px] w-[40px] rounded-full bg-white/60"></div>
        <IoIosArrowDown className="text-[25px] text-white text-opacity-60" />
      </div>
    </nav>
  );
}