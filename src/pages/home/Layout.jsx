import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pt-[170px]">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

 ".pages/home/Layout"