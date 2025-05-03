"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, LayoutDashboardIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SideBarMenuItem from "./sidebar-menu-item";
import { usePathname } from "next/navigation";
import { isContext } from "vm";

function SideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch support
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const sidebarItems = [
    {
      value: "/dashboard",
      label: "Dashboard",
      icon: <HomeIcon className="w-5 h-5"></HomeIcon>,
    }
  ]
  return (
    <div
      ref={sidebarRef}
      className={cn(
        "border-t-0 border-r border-b border-neutral-300 border-solid h-full absolute transition-all duration-200 ease-in bg-white px-1 py-2 overflow-hidden",
        isOpen ? "w-[250px]" : "w-[50px]"
      )}
      onMouseEnter={!isTouch ? handleOpen : undefined}
      onMouseLeave={!isTouch ? handleClose : undefined}
      onTouchStart={isTouch ? handleOpen : undefined}
    >
      {sidebarItems.map((item, index:number) => (
        <SideBarMenuItem
        key={index}
        icon={item.icon}
        value={item.value}
        label={item.label}
        active={pathname == "/dashboard"}
        open={isOpen}
      ></SideBarMenuItem>
      ))}
      
    </div>
  );
}

export default SideBar;
