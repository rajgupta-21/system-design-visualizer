import Button from "@/app/components/shared/Button";
import Image from "next/image";

const MainBody = () => {
  return (
    <div className="flex w-full  px-12 py-10">
      {/* Left section */}
      <div className="w-1/2 flex flex-col justify-center">
        {/* Gradient tag header */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit">
          <Image
            alt="header logo"
            src="/headerlogo.svg"
            width={25}
            height={25}
          />
          <span className="text-primary text-sm font-medium">
            AI POWERED ARCHITECTURE DIAGRAMS
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col mt-10">
          <span className="text-5xl font-bold text-white/80 leading-tight">
            Describe your system.
          </span>
          <span className="text-5xl font-bold text-accent mt-2 leading-tight">
            AI designs the architecture.
          </span>
        </div>

        {/* Description */}
        <div className="mt-10 flex flex-col">
          <p className="text-white/60 font-medium">
            Turn natural language into interactive system design diagrams.
          </p>
          <p className="text-white/60 font-medium mt-2">
            Perfect for learning, interviewing, and documenting
          </p>
          <p className="text-white/60 font-medium mt-2">
            Scalable Architectures
          </p>
        </div>

        {/* Optional CTA (since you imported Button but weren’t using it) */}
        <div className="mt-8 flex gap-4">
          <Button className="px-6 py-3 rounded-lg bg-accent text-black font-semibold hover:opacity-90 transition cursor-pointer">
            Get Started
          </Button>

          <Button
            variant="ghost"
            className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition cursor-pointer"
          >
            View Demo
          </Button>
        </div>
      </div>

      {/* Right section (placeholder for visual / diagram preview) */}
      <div className="w-1/2  flex items-center justify-center">
        <div className="w-full  rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center overflow-hidden">
          <Image
            src="/appsectionimage.png"
            alt="heropng"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
