import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";

export default function HomeLayout() {
  return (
    <div className="flex flex-col gap-4 pt-[100px]">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}