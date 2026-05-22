"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SiDiscord, SiRoblox, SiGmail, SiGithub } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const games = [
    {
      name: "Grimoria",
      role: "Conceptor",
      status: "Current",
      visits: "N/A",
      group: "N/A",
      image: "/grim.webp",
      discordLink: "https://discord.gg/zVcfp4de4Z",
      type: "Open World RPG",
      tags: ["Open World", "RPG"],
      groupLink: "#",
    },
    {
      name: "Latom",
      role: "Conceptor",
      status: "Current",
      visits: "N/A",
      group: "N/A",
      image: "/latom.webp",
      discordLink: "https://discord.gg/npxN9xqdKb",
      type: "Open World RPG",
      tags: ["Open World", "RPG"],
      groupLink: "#",
    },
    {
      name: "Latom",
      role: "Conceptor",
      status: "Current",
      visits: "N/A",
      group: "N/A",
      image: "/grim.webp",
      discordLink: "https://discord.gg/reawaken",
      type: "Open World RPG",
      tags: ["Open World", "RPG"],
      groupLink: "#",
    },
    {
      name: "RACING:ZERO",
      role: "QA Tester",
      status: "Active",
      type: "Racing Game",
      tags: ["Racing", "Multiplayer", "Competitive"],
      visits: "N/A",
      image: "/racing_zero.webp",
      discordLink: "https://discord.gg/ZnwR64fc6Y",
      groupLink: "https://www.roblox.com/share/g/316224588",
    },
    {
      name: "SCP: Site 74",
      role: "QA Tester",
      status: "Active",
      type: "Open World RPG",
      tags: ["SCP", "Horror", "Science Fiction"],
      visits: "N/A",
      image: "/scp_site_74.webp",
      discordLink: " https://discord.gg/6WjfvXDSvb",
      groupLink: "https://www.roblox.com/share/g/34840867",
    },
    {
      name: "Slime Incremental: Revived",
      role: "QA Tester",
      status: "Active",
      type: "Sci-Fi FPS",
      tags: ["FPS", "Sci-Fi", "Competitive"],
      visits: "N/A",
      image: "/slime_incremental_revived.webp",
      discordLink: "https://discord.gg/dzmCghYHaR",
      groupLink: " https://www.roblox.com/share/g/70487591",
    },
    {
      name: "Kaizre",
      role: "QA Tester",
      status: "Completed",
      type: "Multi-anime Open World RPG",
      tags: ["Anime", "1v1", "Ranked"],
      visits: "N/A",
      image: "/kaizre.webp",
      discordLink: "https://discord.gg/ZnwR64fc6Y",
      groupLink: "https://www.roblox.com/share/g/35791911",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {loading && (
        <div
          className={`fixed inset-0 bg-[#161a25] flex items-center justify-center z-50 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-white/60 text-sm">Loading Sai's Portfolio...</p>
          </div>
        </div>
      )}
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/20 -z-10" />

      {/* Main Card */}
      <Card className="w-full max-w-2xl bg-primary/10 backdrop-blur-md border-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image
              src="/avatar.webp"
              alt="Sai"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-white font-light text-3xl mb-2 tracking-wide">
                sai
              </h2>
              <p className="text-muted/80 text-sm">
                {" "}
                Sai | Game Concept & QA Specialist
              </p>
            </div>
          </div>
          {/* Games Tested */}
          <div className="mb-6">
            <h2 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
              Games Tested
            </h2>
            <div className="space-y-3">
              {games.map((game, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#161a25]/30 border border-white/30 hover:border-primary/20 transition-all"
                >
                  <div className="w-full flex gap-4">
                    <Link
                      href={game.groupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={game.image}
                        alt={game.name}
                        width={56}
                        height={56}
                        className="rounded-md object-cover"
                      />
                    </Link>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-white font-medium text-sm">
                          {game.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary text-xs relative"
                        >
                          <span className="relative z-10">{game.status}</span>
                          {/* Shine effect on badge */}
                          <div className="absolute inset-0 rounded-full bg-primary blur-sm opacity-50 animate-pulse" />
                        </Badge>
                      </div>
                      <p className="text-white/70 text-xs mt-1">
                        {game.role} • {game.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* {game.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-1.5 py-0.5 rounded text-white/90"
                      >
                        {tag}
                      </span>
                    ))} */}
                    <Link
                      href={game.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <SiDiscord size={24} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Project Highlight - Enhanced Shine */}
          <div className="mb-6 p-3 rounded-lg bg-gradient-to-r border-primary from-primary/10 to-transparent border-l-3  relative overflow-hidden">
            {/* Animated shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full animate-[shimmer_10s_alternate-reverse_infinite]" />

            <p className="text-white/40 text-xs uppercase tracking-wide mb-1">
              Currently Testing
            </p>
            <p className="text-white font-semibold text-sm">Kaizre | IN-DEV</p>
            <p className="text-white/50 text-xs mt-1">
              Multi-anime open world RPG
            </p>
            <Link
              href="https://discord.gg/ZnwR64fc6Y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-primary text-xs hover:underline relative group"
            >
              Join Discord →{/* Glow effect on hover */}
              <span className="absolute inset-0 text-primary blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                Join Discord →
              </span>
            </Link>
          </div>

          {/* Social Links - Enhanced Shine Effect */}
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="https://discord.com/users/785560169575612459"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161a25] text-white/70 hover:text-white hover:bg-primary transition-all text-sm relative group overflow-hidden"
            >
              {/* Shine background on hover */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <SiDiscord size={16} className="relative z-10" />
              <span className="relative z-10">Discord</span>
            </Link>
            <Link
              href="https://www.roblox.com/users/1546123916/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161a25] text-white/70 hover:text-white hover:bg-primary transition-all text-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <SiRoblox size={16} className="relative z-10" />
              <span className="relative z-10">Roblox</span>
            </Link>
            <Link
              href="mailto:ahlatsiteffo@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161a25] text-white/70 hover:text-white hover:bg-primary transition-all text-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <SiGmail size={16} className="relative z-10" />
              <span className="relative z-10">Email</span>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 pt-4 border-t border-white/5 flex justify-between">
            <p className="text-white/30 text-xs">Available for collaboration</p>
            <Link
              href="https://github.com/s1ddiq"
              className="text-xs text-primary underline relative group"
            >
              Made by s1ddiq
              {/* Subtle glow on hover */}
              <span className="absolute inset-0 text-primary blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                Made by s1ddiq
              </span>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.4;
            filter: blur(8px);
          }
          50% {
            opacity: 0.8;
            filter: blur(12px);
          }
        }

        /* Add glowing border effect */
          box-shadow: 0 0 10px dodgerblue;
        }

        /* Pulse animation for primary elements */
        .animate-glow-pulse {
          animation: glow-pulse 5s ease-in-out alternate-reverse infinite;
        }
      `}</style>
    </div>
  );
}
