import { UserProfile } from "@/components/ui/user-profile";
import { ProfileSidebar } from "@/components/ui/profile-sidebar";
import { MarketsSection } from "@/components/ui/markets-section";
import { TABS, MARKET_DATA } from "@/data/mock-markets";

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-background pb-10">
      <div className="w-full space-y-5">
        <UserProfile />

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <ProfileSidebar />
              <MarketsSection tabs={TABS} markets={MARKET_DATA} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
