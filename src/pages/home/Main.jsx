const mainClass = "flex flex-col gap-4 pt-[150px] font-normal text-white";

export default function Main() {
  return (
    <main className={`${mainClass}`}>
      <div>
        <h1 className="ml-32 text-3xl font-bold">Registered course</h1>
        <div className="mb-4 ml-32 mt-6 h-[30vh] w-[85%] rounded-xl bg-[#141414]"></div>
      </div>

      <div>
        <h1 className="ml-32 text-3xl font-bold pt-10">Course progress</h1>
        <div className="mb-4 ml-32 mt-6 h-[50vh] w-[35%] rounded-xl bg-[#141414]"></div>
        <h1></h1>
      </div>
    </main>
  );
}