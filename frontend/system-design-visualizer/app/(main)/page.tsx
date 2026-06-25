import MainBody from "./components/mainBody";
import Readytodesing from "./components/readytodesing";
import WhyEngineersLoveitsec from "./components/whyEngineersLoveitsec";

export default function Home() {
  return (
    <div className="">
      {/*Main Body*/}
      <MainBody />
      {/*why engineers love it section*/}
      <WhyEngineersLoveitsec />
      {/*Ready to desing section*/}
      <Readytodesing />
      {/*footer */}
      <div className=""></div>
    </div>
  );
}
