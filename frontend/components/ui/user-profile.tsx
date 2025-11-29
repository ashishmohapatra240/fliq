"use client";

import Image from "next/image";
import { IconButton } from "./icon-button";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoChatboxOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface UserProfileProps {
  className?: string;
  profileImage?: string;
  username?: string;
  bio?: string;
  joinedDate?: string;
  marketsCreated?: number;
  volume?: string;
}

export function UserProfile({
  className,
  profileImage = "/images/creators/berry.png",
  username = "ᴮᴱᴿᴿᵞ🍀",
  bio = "Don't be afraid to start over again. This time, you're not starting from scratch, you're starting from experience.",
  joinedDate = "2 years ago",
  marketsCreated = 84,
  volume = "$124k",
}: UserProfileProps) {
  const router = useRouter();
  return (
    <section
      className={cn(
        "w-full py-4 mt-4",
        className
      )}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="block sm:hidden space-y-4">
          <div className="flex items-start gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
              <Image
                src={profileImage}
                alt={`${username}'s profile picture`}
                height={64}
                width={64}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl font-bold text-zinc-100 tracking-wider break-words mt-2">
                    {username}
                  </h1>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <IconButton
                    variant="default"
                    size="default"
                    aria-label="Send message"
                    onClick={() => {
                      router.push("/chat");
                    }}
                  >
                    <IoChatboxOutline className="h-4 w-4" />
                  </IconButton>
                  <IconButton
                    variant="default"
                    size="default"
                    aria-label="Share profile"
                  >
                    <IoShareSocialOutline className="h-4 w-4" />
                  </IconButton>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mt-2 break-words">
                {bio}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
            <span>Joined {joinedDate}</span>
            <span className="text-zinc-600">•</span>
            <span>{marketsCreated} Markets created</span>
            <span className="text-zinc-600">•</span>
            <span>{volume} Vol.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

   
        <div className="hidden sm:block">
          <div className="space-y-4">
         
            <div className="flex justify-between items-start gap-4">
        
              <div className="flex gap-4 lg:gap-6 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full overflow-hidden">
                    <Image
                      src={profileImage}
                      alt={`${username}'s profile picture`}
                      height={128}
                      width={128}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 max-w-3xl">
                  <h1 className="text-2xl font-bold text-zinc-100 tracking-wider break-words">
                    {username}
                  </h1>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2 break-words">
                    {bio}
                  </p>
                </div>
              </div>
             
              <div className="flex items-center gap-2 flex-shrink-0">
                <IconButton
                  variant="default"
                  size="default"
                  aria-label="Send message"
                  onClick={() => {
                    router.push("/chat");
                  }}
                >
                  <IoChatboxOutline className="h-5 w-5" />
                </IconButton>
                <IconButton
                  variant="default"
                  size="default"
                  aria-label="Share profile"
                >
                  <IoShareSocialOutline className="h-5 w-5" />
                </IconButton>
              </div>
            </div>


            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
                <span>Joined {joinedDate}</span>
                <span className="text-zinc-600">•</span>
                <span>{marketsCreated} Markets created</span>
                <span className="text-zinc-600">•</span>
                <span>{volume} Vol.</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-zinc-400 rounded"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-zinc-400 rounded"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-zinc-400 rounded"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
