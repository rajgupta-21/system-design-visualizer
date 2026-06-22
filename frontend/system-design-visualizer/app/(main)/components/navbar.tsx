"use client";

import Button from "@/app/components/shared/Button";
import { navItems } from "@/app/constants/page";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      sticky
      z-50
      bg-background/80
      backdrop-blur-xl
      "
    >
      <nav
        className="
        flex
        items-center
        justify-between

        px-6
        md:px-20
        py-2

        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-3
          "
        >
          <div
            className="
            rounded-xl
            bg-primary/20
            p-2
            "
          >
            <Image
              alt="Website logo"
              src="/websiteLogo2.svg"
              width={34}
              height={34}
            />
          </div>

          <span
            className="
            hidden
            sm:block

            font-semibold
            tracking-tight
            text-white
            "
          >
            AI System Design Visualizer
          </span>
        </Link>

        {/* Desktop Navigation */}

        <div
          className="
          hidden
          lg:flex

          items-center
          gap-10
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className="
                text-sm
                text-text-secondary

                transition

                hover:text-accent
                "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}

        <div
          className="
          hidden
          md:flex

          items-center
          gap-3
          "
        >
          <Button variant="ghost" href="/login">
            Sign in
          </Button>

          <Button href="/signup">Sign up</Button>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          lg:hidden

          rounded-lg

          p-2

          text-white

          hover:bg-white/10
          "
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          lg:hidden

          border-t

          border-border

          px-6

          py-6

          space-y-5

          bg-background
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              onClick={() => setOpen(false)}
              className="
                block

                text-text-secondary

                hover:text-accent
                "
            >
              {item.name}
            </Link>
          ))}

          <div
            className="
            flex
            gap-3
            pt-4
            lg:hidden
            "
          >
            <Button variant="ghost" href="/login">
              Sign in
            </Button>

            <Button href="/signup">Sign up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
