"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

export default function AdminNavbar() {

  const navItems = [
    {
      label: "Website",
      path: "/",
    },
    {
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      label: "Posts",
      path: "/admin/posts",
    },
    {
      label: "Banners",
      path: "/admin/banners",
    },
  ];

  return (
    <header
      className="flex items-center justify-between 
    drop-shadow-md w-full h-20 p-5
    bg-slate-300 dark:bg-slate-800
    text-black dark:text-slate-300"
    >
      {/* LOGO */}
      <Link
        href={`/admin/dashboard`}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
      text-yellow-600 dark:text-green-600
      font-extrabold"
      >
        Helping Knowledge World
      </Link>

      {/* MENU BUTTON FOR SMALLER SCREENS */}
      <div className="sm:hidden flex space-x-3">
        <ThemeSwitcher />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-5 me-3 bg-slate-300 dark:bg-slate-700">
            {navItems.map((item, i) => (
              <DropdownMenuItem key={i}>
                <Link href={item.path} className="p-2 text-lg">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <button type="button" className="p-2 text-lg">Logout</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* HEADER ITEMS */}
      <div className="hidden sm:flex items-center space-x-4">
        <ThemeSwitcher />
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className="text-lg hover:text-yellow-600 dark:hover:text-green-600"
          >
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          className="text-lg hover:text-yellow-600 dark:hover:text-green-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
