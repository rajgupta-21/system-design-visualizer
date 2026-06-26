import Header from "./components/header";
import Prompt from "./components/prompt";

const Visualizer = () => {
  return (
    <div>
      {/*header*/}
      <Header />
      {/*Prompt menu*/}
      <Prompt />
      {/*Canvas */}
      <div className=""></div>
      {/*Node inspector*/}
      <div className=""></div>
    </div>
  );
};

export default Visualizer;
