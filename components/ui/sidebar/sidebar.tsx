"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, LayoutDashboardIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
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
    },
  ];
  const sidebarOrderItems = [
    {
      value: "/create-order",
      label: "Create Order",
      icon: <PlusIcon className="w-5 h-5"></PlusIcon>,
    },
    {
      value: "/orders",
      label: "Orders",
      icon: <ShoppingCartIcon className="w-5 h-5"></ShoppingCartIcon>,
    },
  ];
  return (
    <div
      ref={sidebarRef}
      className={cn(
        "border-t-0 border-r border-b border-neutral-300 border-solid h-full absolute transition-all duration-200 ease-in bg-white px-1 py-4 overflow-hidden",
        isOpen ? "w-[250px]" : "w-[53px]"
      )}
      onMouseEnter={!isTouch ? handleOpen : undefined}
      onMouseLeave={!isTouch ? handleClose : undefined}
      onTouchStart={isTouch ? handleOpen : undefined}
    >
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item, index: number) => (
          <SideBarMenuItem
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
            active={pathname == item.value}
            open={isOpen}
          ></SideBarMenuItem>
        ))}
      </div>

      <hr
        className={cn(
          "border-b-0.2 border-neutral-200 border-solid my-4 ml-1",
          isOpen ? "w-[232px]" : "w-[38px]"
        )}
      ></hr>

      <div className="flex flex-col gap-2">
        {sidebarOrderItems.map((item, index: number) => (
          <SideBarMenuItem
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
            active={pathname == item.value}
            open={isOpen}
          ></SideBarMenuItem>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
