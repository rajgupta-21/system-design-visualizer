"use client";

import {
  setStatus,
  setTitle,
} from "@/app/redux/slice/project-title-status.slice";
import { AiResponse, DataResponse } from "@/app/type/page";
import { ArrowUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import VisualizerCanvas from "./VisualizerCanvas";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [hidePrompt, setHidePrompt] = useState<boolean>(false);
  const [architecture, setArchitecture] = useState<AiResponse>();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    try {
      dispatch(setStatus("Generating"));
      const response = await fetch("http://localhost:4000/ai/generate", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      setHidePrompt(true);

      const data: DataResponse = await response.json();
      setArchitecture(data.Response);
      dispatch(setTitle(data.Response.title));
      dispatch(setStatus("Active"));

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate design");
      }

      console.log(data);
    } catch (error) {
      dispatch(setStatus("Failed"));
      console.error(error);
    }
  };
  return (
    <>
      {!hidePrompt && (
        <div
          className="
      flex
      py-32
      items-center
      justify-center
      px-6
      relative
      overflow-hidden
      "
        >
          {/* Background glow */}
          <div
            className="
        absolute
        w-125
        h-125
        bg-purple-600/30
        blur-[140px]
        rounded-full
        -top-37.5
        "
          />

          <div
            className="
        w-full
        max-w-3xl
        relative
        "
          >
            {/* Heading */}

            <div className="text-center mb-8">
              <div
                className="
            flex
            justify-center
            items-center
            gap-2
            text-purple-400
            mb-4
            "
              >
                <Sparkles size={20} />
                AI System Designer
              </div>

              <h1
                className="
            text-4xl
            md:text-5xl
            font-bold
            "
              >
                Describe what you want to build
              </h1>

              <p
                className="
            text-zinc-400
            mt-4
            "
              >
                Generate system architectures, components and designs using AI.
              </p>
            </div>

            {/* Prompt Input */}

            <div
              className="
          relative
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          "
            >
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="
            Example: Design a scalable ecommerce system like Amazon
            "
                className="
            field-sizing-content
            w-full
            min-h-25
            resize-none
            bg-transparent
            outline-none
            p-6
            text-white
            placeholder:text-zinc-500
            "
              />

              <button
                onClick={handleSubmit}
                className="
            absolute
            bottom-4
            right-4
            h-11
            w-11
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-blue-500
            flex
            items-center
            justify-center
            hover:scale-105
            transition
            "
              >
                <ArrowUp size={20} />
              </button>
            </div>

            {/* Suggestions */}

            <div
              className="
          mt-5
          flex
          flex-wrap
          gap-3
          justify-center
          "
            >
              {["Netflix architecture", "Uber backend", "ChatGPT clone"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setPrompt(item)}
                    className="
              px-4
              py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              text-sm
              text-zinc-300
              hover:bg-white/10
              "
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      )}
      {hidePrompt && architecture && (
        <div className="flex">
          <VisualizerCanvas
            nodes={architecture.nodes}
            edges={architecture.edges}
          />
        </div>
      )}
    </>
  );
};

export default Prompt;
