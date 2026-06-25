import Navbar from "./components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 flex flex-col">
      <Navbar />
      <div className="mt-4">{children}</div>
    </div>
  );
}
