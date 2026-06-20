import MainBody from "./components/mainBody";
import Navbar from "./components/navbar";
import WhyEngineersLoveitsec from "./components/whyEngineersLoveitsec";

export default function Home() {
  return (
    <div className="">
      {/*Navbar*/}
      <Navbar />
      {/*Main Body*/}
      <MainBody />
      {/*why engineers love it section*/}
      <WhyEngineersLoveitsec />
      {/*Ready to desing section*/}
      <div className=""></div>
      {/*footer */}
      <div className=""></div>
    </div>
  );
}
