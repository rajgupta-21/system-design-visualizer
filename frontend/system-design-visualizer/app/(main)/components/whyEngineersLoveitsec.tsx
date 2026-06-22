import FeatureCard from "@/app/components/shared/Card";
import Howitworks from "@/app/components/ui/howitworks";

import { BookOpen, Brain, History, Network, Share2 } from "lucide-react";

const WhyEngineersLoveitsec = () => {
  const features = [
    {
      icon: <Brain size={32} />,
      iconBg: "purple",
      title: "AI-Powered",
      description:
        "Leverage GPT-4o to generate production-ready architectures in seconds.",
    },
    {
      icon: <Network size={32} />,
      iconBg: "blue",
      title: "Interactive Diagrams",
      description:
        "Explore, drag, zoom, and understand every component in detail.",
    },
    {
      icon: <BookOpen size={32} />,
      iconBg: "green",
      title: "Learn as You Build",
      description:
        "Get explanations, alternatives, and trade-offs for every component.",
    },
    {
      icon: <History size={32} />,
      iconBg: "orange",
      title: "Version History",
      description:
        "Track every change and compare different design iterations.",
    },
    {
      icon: <Share2 size={32} />,
      iconBg: "purple",
      title: "Share & Export",
      description:
        "Share via link or export your diagrams as PNG with one click.",
    },
  ];

  return (
    <section className="bg-white/90 pt-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-black">
          Why architects & engineers love it
        </h2>

        <p className="mt-4 max-w-xl text-gray-500">
          Build, visualize, and document complex systems faster with AI-powered
          architecture design.
        </p>
      </div>

      {/* Feature cards */}
      <div
        className="
          mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-10
          px-10
          max-w-7xl
          mx-auto
        "
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            iconBg={feature.iconBg}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* How it works */}
      <div
        className="
          mt-10
          bg-gray-50
          rounded-t-[40px]
          py-5
          px-10
        "
      >
        <Howitworks />
      </div>
    </section>
  );
};

export default WhyEngineersLoveitsec;
