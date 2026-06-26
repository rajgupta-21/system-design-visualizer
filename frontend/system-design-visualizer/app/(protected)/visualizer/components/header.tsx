import Button from "@/app/components/shared/Button";
import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  MoreVertical,
  Share,
  Share2Icon,
} from "lucide-react";

const Header = () => {
  return (
    <header
      className="
      w-full
      border-b
      border-white/10
      bg-black/20
      px-4
      py-2
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        gap-4
        flex-wrap
        "
      >
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <h1
            className="
            text-xl
            font-semibold
            text-white
            "
          >
            Visualizer
          </h1>

          {/* /TODO api-integration */}
          <div
            className="
            hidden
            sm:flex
            items-center
            gap-3
            text-sm
            "
          >
            <span
              className="
              px-3
              py-1
              rounded-lg
              bg-white/5
              text-zinc-300
              "
            >
              Project-Title
            </span>

            <span
              className="
              px-3
              py-1
              rounded-lg
              bg-green-500/10
              text-green-400
              border
              border-green-500/20
              "
            >
              Project-Status
            </span>
          </div>
          {/* /TODO api-integration */}
        </div>

        {/* Right Section */}
        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          {/* History Controls */}
          <div className="hidden sm:flex gap-2">
            <Button
              className=" bg-purple-600/30 border border-purple-500/30 px-4 py-2
            text-purple-300 hover:bg-purple-600/50 cursor-pointer"
            >
              <ArrowBigLeftDash size={18} />
            </Button>
            <Button
              className="    bg-purple-600/30 border border-purple-500/30 px-4 py-2
            text-purple-300 hover:bg-purple-600/50 cursor-pointer"
            >
              <ArrowBigRightDash size={18} />
            </Button>
          </div>

          {/* Share Actions */}
          <div className="flex gap-2">
            <Button
              className="    bg-purple-600/30 border border-purple-500/30 px-4 py-2
            text-purple-300 hover:bg-purple-600/50 cursor-pointer"
            >
              <Share size={18} />
              <span className="hidden lg:block">Share</span>
            </Button>

            <Button
              className="    bg-purple-600/30 border border-purple-500/30 px-4 py-2
            text-purple-300 hover:bg-purple-600/50 cursor-pointer"
            >
              <Share2Icon size={18} />
              <span className="hidden lg:block">Collaborate</span>
            </Button>
          </div>

          {/* TODO user setting needs to be done with user route */}
          <div
            className="
            hidden
            md:flex
            items-center
            gap-2
            px-3
            py-2
            rounded-xl
            bg-white/5
            text-sm
            text-zinc-300
            "
          >
            <div
              className="
              h-8
              w-8
              rounded-full
              bg-gradient-to-r
              from-purple-400
              to-blue-400
              "
            />
            User title
          </div>
          {/* TODO user setting needs to be done with user route */}

          {/* Mobile Menu */}
          <Button
            className="    bg-purple-600/30 border border-purple-500/30 px-4 py-2
            text-purple-300 hover:bg-purple-600/50 cursor-pointer"
          >
            <MoreVertical size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
