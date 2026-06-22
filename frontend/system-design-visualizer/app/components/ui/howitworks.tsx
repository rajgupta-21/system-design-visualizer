import {
  ArrowDown,
  ArrowRight,
  Command,
  Network,
  Share2,
  Sparkles,
} from "lucide-react";

import FeatureCard from "../shared/Card";

const Howitworks = () => {
  const steps = [
    {
      title: "Describe Your System",
      description: "Write your requirements in natural language.",
      icon: <Command size={35} />,
    },
    {
      title: "AI Generates Architecture",
      description: "Our AI analyzes and creates a detailed system design.",
      icon: <Sparkles size={35} />,
    },
    {
      title: "Visualize & Explore",
      description: "Interact with the diagram and understand every component.",
      icon: <Network size={35} />,
    },
    {
      title: "Share & Export",
      description: "Share with your team or export as PNG for documentation.",
      icon: <Share2 size={35} />,
    },
  ];

  return (
    <section className="py-10 px-6">
      {/* Heading */}
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold text-black">How it works</h2>
      </div>

      {/* Steps */}
      <div
        className="
          mt-16
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          max-w-7xl
          mx-auto
        "
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              flex
              flex-col
              lg:flex-row
              items-center
            "
          >
            {/* Step */}
            <div
              className="
                flex
                flex-col
                items-center
                text-center
                w-full
                lg:w-60
              "
            >
              {/* Number */}
              <div
                className="
                  h-10
                  w-10
                  rounded-full
                  bg-gray-300/50
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <span className="font-bold text-black">{index + 1}</span>
              </div>

              <FeatureCard
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>

            {/* Connector */}
            {index !== steps.length - 1 && (
              <div
                className="
                  flex
                  items-center
                  justify-center
                  lg:w-28
                  lg:mx-4
                  my-8
                  lg:my-0
                "
              >
                {/* Desktop */}
                <div
                  className="
                    hidden
                    lg:block
                    w-full
                    border-t-2
                    border-dashed
                    border-gray-300
                  "
                />

                <ArrowRight
                  size={18}
                  className="
                    hidden
                    lg:block
                    text-gray-400
                    ml-2
                  "
                />

                {/* Mobile */}
                <div
                  className="
                    lg:hidden
                    h-12
                    border-l-2
                    border-dashed
                    border-gray-300
                  "
                />

                <ArrowDown
                  size={18}
                  className="
                    lg:hidden
                    text-gray-400
                    mt-2
                  "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Howitworks;
