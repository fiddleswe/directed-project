const profileUser = "h-[12vh] w-[12vh] p-4 pl-4 ml-5 mt-5 rounded-xl bg-white/60 text-white";

export default function header() {
  return (
    <header className="flex flex-col">
      <div className="ml-32 h-[100vh] w-[20%] rounded-xl bg-[#141414]">
        <picture>
          <img className={`${profileUser}`} src="bg" alt="Profile Picture"></img>
        </picture>
      </div>
    </header>
  );
}
