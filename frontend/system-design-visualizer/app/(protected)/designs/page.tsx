"use client";

import { ExternalLink, FolderOpen, Plus, Sparkles, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Design {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  previewImage: string;
}

export default function DesignsPage() {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await fetch("http://localhost:4000/user/designs", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed loading designs");
        }

        const data = await res.json();

        setDesigns(data.designs ?? []);
      } catch (err) {
        setError("Unable to load your designs");
      } finally {
        setLoading(false);
      }
    };

    fetchDesigns();
  }, []);

  if (loading) {
    return (
      <div
        className="
      min-h-screen
      flex
      items-center
      justify-center
      text-zinc-400
      "
      >
        <div className="flex gap-3 items-center">
          <Sparkles className="animate-spin" />
          Loading your architectures...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      gap-4
      "
      >
        <p className="text-red-400">{error}</p>

        <button
          onClick={() => location.reload()}
          className="
        px-5
        py-2
        rounded-xl
        bg-white/10
        hover:bg-white/20
        "
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="
min-h-screen
p-8
text-white
"
    >
      {/* Header */}

      <div
        className="
flex
items-center
justify-between
mb-10
"
      >
        <div>
          <h1
            className="
text-4xl
font-bold
"
          >
            My Designs
          </h1>

          <p
            className="
text-zinc-400
mt-2
"
          >
            Your AI generated system architectures
          </p>
        </div>

        <Link
          href="/visualizer"
          className="
flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-gradient-to-r
from-purple-500
to-blue-500
hover:scale-105
transition
"
        >
          <Plus size={18} />
          Create Design
        </Link>
      </div>

      {/* Empty State */}

      {designs.length === 0 && (
        <div
          className="
border
border-white/10
rounded-3xl
p-20
flex
flex-col
items-center
text-center
bg-white/5
"
        >
          <FolderOpen size={50} className="text-zinc-500" />

          <h2
            className="
text-xl
font-semibold
mt-5
"
          >
            No designs yet
          </h2>

          <p
            className="
text-zinc-400
mt-2
"
          >
            Generate your first AI architecture
          </p>
        </div>
      )}

      {/* Cards */}

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-8
"
      >
        {designs.map((design) => (
          <div
            key={design.id}
            className="
group
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
backdrop-blur-xl
hover:border-purple-500/40
transition
"
          >
            {/* Image */}

            <div
              className="
h-56
bg-black
relative
overflow-hidden
"
            >
              {design.previewImage ? (
                <Image
                  src={design.previewImage}
                  alt={design.title}
                  width={10}
                  height={10}
                  className="
w-full
h-full
object-cover
group-hover:scale-105
transition
"
                />
              ) : (
                <div
                  className="
h-full
flex
items-center
justify-center
text-zinc-500
"
                >
                  No Preview
                </div>
              )}
            </div>

            <div
              className="
p-5
"
            >
              <h2
                className="
font-semibold
text-xl
truncate
"
              >
                {design.title || "Untitled Design"}
              </h2>

              <p
                className="
text-zinc-400
mt-2
line-clamp-3
text-sm
"
              >
                {design.description || "No description provided"}
              </p>

              <div
                className="
flex
justify-between
items-center
mt-5
"
              >
                <Link
                  href={`/designs/${design.id}`}
                  className="
flex
items-center
gap-2
text-purple-400
hover:text-purple-300
"
                >
                  Open
                  <ExternalLink size={16} />
                </Link>

                <button
                  className="
p-2
rounded-lg
hover:bg-red-500/20
text-red-400
"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
