import ProfileCard from "@/components/profile-card";
import Header from "@/components/ui/header";

export default function FavoriteProfiles() {
  return (
    <div className="flex flex-col gap-2 h-(--screen-wo-navbar)">
      <Header title="Favorite profiles"></Header>

      <div className="inline-grid grid-cols-12 gap-5 pb-5 w-full overflow-y-auto">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}
