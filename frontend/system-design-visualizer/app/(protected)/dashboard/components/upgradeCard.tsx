"use client";

import { Check, Crown, Zap } from "lucide-react";

export default function UpgradeCard() {
  const features = [
    "Unlimited AI generations",
    "Advanced system templates",
    "Export architecture diagrams",
    "Priority AI processing",
  ];

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-yellow-400/20
      bg-gradient-to-br
      from-yellow-400/10
      via-zinc-900
      to-orange-500/10
      p-8
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-20
        -right-20
        w-64
        h-64
        bg-yellow-400/20
        blur-3xl
        rounded-full
        "
      />

      <div className="relative z-10">
        <div
          className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          bg-gradient-to-r
          from-yellow-400
          to-orange-500
          mb-6
          "
        >
          <Crown className="text-black" size={28} />
        </div>

        <h2
          className="
        text-3xl
        font-bold
        "
        >
          Upgrade to Pro
        </h2>

        <p
          className="
        text-zinc-400
        mt-3
        "
        >
          Unlock powerful AI features and build production-ready system
          architectures faster.
        </p>

        <div
          className="
        mt-6
        space-y-3
        "
        >
          {features.map((item) => (
            <div
              key={item}
              className="
            flex
            items-center
            gap-3
            text-sm
            text-zinc-300
            "
            >
              <div
                className="
              w-5
              h-5
              rounded-full
              bg-yellow-400/20
              flex
              items-center
              justify-center
              "
              >
                <Check size={13} className="text-yellow-400" />
              </div>

              {item}
            </div>
          ))}
        </div>

        <button
          className="
        mt-8
        w-full
        py-3
        rounded-xl
        font-semibold
        text-black
        bg-gradient-to-r
        from-yellow-400
        to-orange-500
        hover:opacity-90
        transition
        flex
        items-center
        justify-center
        gap-2
        "
        >
          <Zap size={18} />
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
