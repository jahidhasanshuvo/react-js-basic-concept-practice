import logo from "./logo.svg";
import "./App.css";
import { UserProfileList } from "./suspensTest";
import ExampleNav from "./SampleCodes/dropdown";
import FancyModalButton from "./SampleCodes/options";
import KeyTest from "./SampleCodes/keyTest";
import Debounce from "./SampleCodes/debounce";
import LifeCycleMethod from "./SampleCodes/lifeCycleMethod";
import Game from "./SampleCodes/test";
import ReactHooks from "./SampleCodes/reactHooks";

function App() {
  // return <UserProfileList />;
  // return <ExampleNav />;
  // return <FancyModalButton />;
  // return <KeyTest />;
  // return <Debounce />;
  return (
    <>
      <LifeCycleMethod hello="gelo" />;
      <ReactHooks />
    </>
  );
  // return <Game />;
}

export default App;
