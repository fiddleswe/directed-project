import "./index.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Header from "./components/Header"

function App() {
  return (
    <div className="flex flex-col gap-4 pt-[170px]">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
