import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import { TailwindIndicator } from "./components/tailwindIndicator";

function App() {
  return (
    <div>
      <Header />
      <div className="2xl:ml-52 md:flex-col ">
        <Main />
        <Footer />
      </div>
      <TailwindIndicator />
    </div>
  );
}

export default App;
