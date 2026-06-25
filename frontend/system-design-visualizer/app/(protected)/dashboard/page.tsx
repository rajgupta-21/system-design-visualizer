import CreateDesignCard from "./components/createDesign";
import DesignsList from "./components/designList";
import Overview from "./components/overview";
import RecentActivity from "./components/recentActivity";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import WelcomeCard from "./components/WelcomeCard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main
          className="
p-6
grid
xl:grid-cols-[1fr_350px]
gap-6
"
        >
          <div className="space-y-6">
            <WelcomeCard />

            <CreateDesignCard />

            <DesignsList />
          </div>

          <div className="space-y-6">
            <Overview />

            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}
