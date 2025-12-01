import { Chip } from "@/components/ui/chip";

export function ProfileSidebar() {
  return (
    <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 p-5 bg-zinc-900 rounded-4xl  border border-zinc-800 flex flex-col gap-4 h-fit">
      <div className="pb-4 border-b border-zinc-800 flex flex-col gap-3">
        <h3 className="text-zinc-100 text-md font-bold leading-none">
          Description
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Don't be afraid to start over again. This time, you're not
          starting from scratch, you're starting from experience.
        </p>
      </div>

      <div className="pb-4 border-b border-zinc-800 flex flex-col gap-3">
        <h3 className="text-zinc-100 text-md font-bold leading-none">
          Data Overview
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-sm">
              Markets Created
            </span>
            <span className="text-zinc-200 text-sm font-medium">
              241
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-sm">
              Total Volume
            </span>
            <span className="text-zinc-200 text-sm font-medium">
              $124k
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-sm">
              Last Campaign
            </span>
            <span className="text-zinc-200 text-sm font-medium">
              04 Nov, 2025
            </span>
          </div>
        </div>
      </div>

      {/* Languages Preferred */}
      <div className="pb-4 border-b border-zinc-800 flex flex-col gap-3">
        <h3 className="text-zinc-100 text-md font-bold leading-none">
          Languages Preferred
        </h3>
        <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
          <span>English</span>
          <span className="text-zinc-600">•</span>
          <span>Spanish</span>
          <span className="text-zinc-600">•</span>
          <span>German</span>
        </div>
      </div>

      {/* Topics */}
      <div className="flex flex-col gap-3">
        <h3 className="text-zinc-100 text-md font-bold leading-none">
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          <Chip>Football</Chip>
          <Chip>Hollywood</Chip>
          <Chip>Politics</Chip>
          <Chip>Crypto</Chip>
        </div>
      </div>
    </div>
  );
}

