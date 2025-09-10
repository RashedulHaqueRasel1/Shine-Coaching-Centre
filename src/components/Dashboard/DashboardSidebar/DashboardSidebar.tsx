"use client";

import type * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Settings,
  FileText,
  CreditCard,
  LogOut,
  Lightbulb,
  MessageSquare,
  Grid3X3,
  Users,
  Database,
  Menu,
  X,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Services", url: "/dashboard/services", icon: Grid3X3 },
  { title: "Strategy", url: "/dashboard/strategy", icon: MessageSquare },
  { title: "Blogs", url: "/dashboard/blogs", icon: FileText },
  { title: "Solutions", url: "/dashboard/solutions", icon: Lightbulb },
  { title: "Payments", url: "/dashboard/payments", icon: CreditCard },
  { title: "Data Sets", url: "/dashboard/data-sets", icon: Database },
  { title: "Staffing Need", url: "/dashboard/staffing-need", icon: Users },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <div>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 shadow-md">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </Link>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <Menu className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {/* Sidebar for large screens */}
      <Sidebar
        className="hidden lg:flex border-r-0 w-[108px]"
        collapsible="none"
        {...props}
      >
        <SidebarContent className="p-4 bg-gradient-to-b from-[#131313] to-[#1f1f1f] shadow-xl">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="mx-auto h-[80px] w-[80px] object-contain mb-6"
            />
          </Link>
          <SidebarMenu className="space-y-3">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={isActive(item.url)}
                  className={`group py-6 flex justify-center rounded-xl transition-all duration-300 ${
                    isActive(item.url)
                      ? "bg-white shadow-md"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Link href={item.url} className="flex flex-col items-center">
                    <item.icon
                      className={`h-6 w-6 transition-colors duration-200 ${
                        isActive(item.url)
                          ? "text-[#212121]"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    />
                    <span
                      className={`mt-2 text-[12px] font-medium transition-colors duration-200 ${
                        isActive(item.url)
                          ? "text-[#212121]"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        {/* Logout Section */}
        <div className="mt-auto p-4 bg-[#212121] border-t border-gray-700">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setIsLogoutDialogOpen(true)}
                className="group py-6 flex justify-center rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col items-center">
                  <LogOut className="h-6 w-6 text-gray-300 group-hover:text-red-500 transition-colors" />
                  <span className="text-[12px] font-medium text-gray-300 group-hover:text-red-500">
                    Logout
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </Sidebar>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileOpen(false)}
          />
          {/* Drawer Content */}
          <div className="relative w-64 bg-gradient-to-b from-[#131313] to-[#1f1f1f] h-full p-6 shadow-lg animate-slideIn">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="h-[60px] w-[60px] object-contain mb-8"
              />
            </Link>
            <SidebarMenu className="space-y-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActive(item.url)}
                    className={`group py-3 flex items-center gap-3 rounded-lg transition-all ${
                      isActive(item.url)
                        ? "bg-white shadow-md"
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-colors ${
                        isActive(item.url)
                          ? "text-[#212121]"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        isActive(item.url)
                          ? "text-[#212121]"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            {/* Logout on Mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setIsLogoutDialogOpen(true)}
                    className="group py-3 flex items-center gap-3 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <LogOut className="h-5 w-5 text-gray-300 group-hover:text-red-500" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-red-500">
                      Logout
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirm Modal */}
      {isLogoutDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Confirm Logout
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsLogoutDialogOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsLogoutDialogOpen(false);
                  alert("Logged out (dummy)!");
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation for mobile drawer */}
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
