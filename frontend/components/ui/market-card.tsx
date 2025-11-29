import { cn } from "@/lib/utils";
import Image from "next/image";
import { MarketCardProps } from "@/types/market";
import { IconButton } from "@/components/ui/icon-button";
import { HiOutlineShare } from "react-icons/hi";

export function MarketCard({
  title,
  image,
  volume,
  endsIn,
  createdBy,
  createdTime,
  type,
  positions,
  className,
}: MarketCardProps) {
  return (
    <div
      className={cn(
        "w-full p-4 bg-zinc-900 rounded-4xl corner-squircle border border-zinc-800 flex flex-col gap-4 overflow-hidden",
        className
      )}
    >
      <div className="self-stretch inline-flex justify-start items-center gap-3">
        <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden corner-squircle">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-neutral-100 text-base font-semibold font-sans leading-snug line-clamp-2">
            {title}
          </h3>
        </div>
      </div>

      {type === "list" && positions ? (
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="self-stretch h-6 inline-flex justify-start items-center gap-2"
            >
              <div className="flex-1 flex justify-center items-center gap-2">
                <div className="flex-1 justify-start text-neutral-400 text-sm font-normal font-sans leading-5 line-clamp-1">
                  {pos.name}
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="justify-center text-neutral-400 text-xs font-medium font-sans leading-5 line-clamp-1">
                  {pos.value}
                </div>
                <div className="flex justify-start items-center gap-1">
                  <div className="h-6 px-2.5 bg-primary-green rounded-full corner-squircle flex justify-center items-center gap-2">
                    <div className="justify-center text-white text-xs font-bold font-mono leading-3 line-clamp-1 cursor-pointer">
                      YES
                    </div>
                  </div>
                  <div className="h-6 px-2.5 bg-primary-blue rounded-full corner-squircle flex justify-center items-center gap-2">
                    <div className="justify-center text-white text-xs font-bold font-mono leading-3 line-clamp-1 cursor-pointer">
                      NO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : type === "binary" ? (
        <div className="self-stretch flex-1 py-1 inline-flex justify-center items-center gap-2">
          <div className="flex-1 h-9 px-2.5 bg-primary-green rounded-full corner-squircle flex justify-center items-center gap-2 cursor-pointer hover:bg-primary-green/80 transition-colors">
            <div className="justify-center text-white text-xs font-bold font-mono leading-5 line-clamp-1 cursor-pointer">
              YES
            </div>
          </div>
          <div className="flex-1 h-9 px-2.5 bg-primary-blue rounded-full corner-squircle flex justify-center items-center gap-2 cursor-pointer hover:bg-primary-blue/80 transition-colors">
            <div className="justify-center text-white text-xs font-bold font-mono leading-5 line-clamp-1 cursor-pointer">
              NO
            </div>
          </div>
        </div>
      ) : null}

      <div className="w-full pt-3 border-t border-zinc-800 flex justify-between items-end mt-auto">
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <div className="text-zinc-500 text-xs font-medium">
              {volume} Vol.
            </div>
            <div className="text-zinc-600 text-xs">•</div>
            <div className="flex gap-1 text-xs">
              <span className="text-zinc-500 font-medium">Ends in</span>
              <span className="text-zinc-400 font-medium">{endsIn}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="text-zinc-500 text-xs font-medium">
              by {createdBy}
            </div>
            <div className="text-zinc-600 text-xs">•</div>
            <div className="text-zinc-500 text-xs">{createdTime}</div>
            <div className="flex items-center ml-1 gap-1">
              <Image
                src="/icons/water-drop.svg"
                alt="BERRY"
                height={16}
                width={16}
                className="object-cover"
                unoptimized
              />
              <Image
                src="/icons/star.svg"
                alt="BERRY"
                height={16}
                width={16}
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconButton size="sm" variant="default">
            <HiOutlineShare className="w-4 h-4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
