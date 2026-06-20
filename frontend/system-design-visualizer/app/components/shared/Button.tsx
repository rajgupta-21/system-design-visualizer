import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;

  variant?: "primary" | "secondary" | "ghost";

  href?: string;

  onClick?: () => void;

  disabled?: boolean;

  loading?: boolean;
  className?: string;

  type?: "button" | "submit";
};

const variantStyles = {
  primary: `
    bg-primary
    hover:bg-primary-hover
    text-white
    shadow-lg
    shadow-purple-500/20
    `,

  secondary: `
    bg-card
    border
    border-border
    text-text-primary
    hover:bg-surface
    `,

  ghost: `
    text-white-70
    border-[0.2px]
    border-white/20
    bg-white/5
    hover:text-white
    hover:bg-white/10
    `,
};

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
}: ButtonProps) {
  const classes = `

inline-flex
items-center
justify-center

px-5
py-2.5

rounded-lg

font-medium

transition-all
duration-200

${variantStyles[variant]}

${disabled && "opacity-50 cursor-not-allowed"}

`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {loading ? "Loading..." : children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(classes, className)}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
