import AdminNavbar from "@/components/admin/AdminNavbar";

export default function layout({ children }) {
  return (
    <div
      className="bg-white dark:bg-slate-900 
    text-black dark:text-slate-300 h-screen overflow-auto
    space-y-5"
    >
      <AdminNavbar />
      <main className="p-5">{children}</main>
    </div>
  );
}
