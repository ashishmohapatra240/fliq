"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./button";
import { SearchBar } from "./search-bar";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Markets");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      label: "Markets",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
    },
    {
      label: "LP Rewards",
      href: "/lp-rewards",
    },
  ];

  return (
    <nav className="w-full bg-neutral-950 border-b border-white/10">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-14 py-5">
        <div className="flex justify-between items-center gap-4 lg:gap-14">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={87}
                height={36}
                priority
                className="w-16 sm:w-20 h-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-between items-center gap-10">
            <div className="flex justify-start items-center gap-6 xl:gap-10">
              {navItems.map((item) => {
                const isActive = activeNav === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveNav(item.label)}
                    className={cn(
                      "py-3 flex justify-center items-center gap-2.5 transition-colors font-medium",
                      isActive
                        ? "border-b border-white text-white"
                        : "text-zinc-500 hover:text-white"
                    )}
                  >
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-start items-start gap-5 max-w-xl w-full">
              <SearchBar />
              <div className="flex justify-start items-center gap-2.5">
                <Button variant="default">Create Market</Button>
                <Button variant="outline">Sign In</Button>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <div className="hidden sm:block flex-1 max-w-xs">
              <SearchBar />
            </div>
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <div className="sm:hidden">
                <SearchBar />
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeNav === item.label;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setActiveNav(item.label);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "py-3 px-2 rounded-lg flex items-center gap-2.5 transition-colors",
                        isActive
                          ? "bg-zinc-900 text-white"
                          : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
                      )}
                    >
                      <span className="text-sm font-medium leading-5">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col gap-2.5 pt-2">
                <Button variant="default" className="w-full">
                  Create Market
                </Button>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
