import Button from "@/app/components/shared/Button";

const Readytodesing = () => {
  return (
    <section
      className="
        relative
        mx-auto
       mt-10
    
        bg-background
        flex
        flex-col
        items-center
        text-center
      
      "
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <h2
          className="
            text-2xl
            md:text-5xl
            font-bold
            text-white
          "
        >
          Ready to design better systems?
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-2xl
            text-sm
            md:text-lg
            text-white/60
          "
        >
          Join thousands of developers and architects building scalable systems
          faster with AI.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Button
            className="
              px-8
              py-3
              rounded-xl
              cursor-pointer
              text-black
              font-semibold
            "
          >
            Get started for free
          </Button>
        </div>

        {/* Note */}
        <p
          className="
            mt-5
            text-sm
            text-white/40
          "
        >
          No credit card required
        </p>
      </div>
    </section>
  );
};

export default Readytodesing;
