"use client";
import { cn } from "@/lib/utils";
import {
  DollarSignIcon,
  HomeIcon,
  PackageIcon,
  PanelLeftIcon,
  PlusIcon,
  ReceiptTextIcon,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SideBarMenuItem from "./sidebar-menu-item";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SideBarSeparator from "./side-bar-separator";
function SideBar() {
  const pathname = usePathname();
  const [mode, setMode] = useState("auto");
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch support
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mode != "auto") return;
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
      icon: <HomeIcon className="w-4 h-4"></HomeIcon>,
    },
  ];
  const sidebarOrderItems = [
    {
      value: "/create-order",
      label: "Create Order",
      icon: <PlusIcon className="w-4 h-4"></PlusIcon>,
    },
    {
      value: "/orders",
      label: "Orders",
      icon: <ShoppingBagIcon className="w-4 h-4"></ShoppingBagIcon>,
    },
  ];
  const sidebarFinanceItems = [
    {
      value: "/quotes",
      label: "Quotes",
      icon: <ReceiptTextIcon className="w-4 h-4"></ReceiptTextIcon>,
    },
    {
      value: "/invoices",
      label: "Invoices",
      icon: <DollarSignIcon className="w-4 h-4"></DollarSignIcon>,
    },
  ];
  const sidebarSettingItems = [
    {
      value: "/products",
      label: "Products",
      icon: <PackageIcon className="w-4 h-4"></PackageIcon>,
    },
    {
      value: "/users",
      label: "Users",
      icon: <UserIcon className="w-4 h-4"></UserIcon>,
    },
  ];

  const modeChanges = (value: string) => {
    setMode(value);
    if (value == "open") {
      setIsOpen(true);
    } else if (value == "close") {
      setIsOpen(false);
    } else if (value == "auto") {
      setIsOpen(false);
    }
  };
  return (
    <div
      ref={sidebarRef}
      className={cn(
        "h-[calc(100vh-53px)] flex flex-col border-t-0 border-r border-b border-neutral-300 border-solid absolute transition-all duration-100 ease-in bg-white px-1 py-4 overflow-hidden ",
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

      <SideBarSeparator></SideBarSeparator>

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
      <SideBarSeparator></SideBarSeparator>

      <div className="flex flex-col gap-2">
        {sidebarFinanceItems.map((item, index: number) => (
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

      <SideBarSeparator></SideBarSeparator>

      <div className="flex flex-col gap-2">
        {sidebarSettingItems.map((item, index: number) => (
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-1 mt-auto mb-4 hidden">
          <Button variant="ghost" size={"icon"}>
            <PanelLeftIcon className="w-4 h-4 text-neutral-600"></PanelLeftIcon>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="text-xs font-regular text-neutral-600">
            Sidebar Control
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={mode} onValueChange={modeChanges}>
            <DropdownMenuRadioItem
              value="open"
              className="text-xs font-regular text-neutral-600"
            >
              Expanded
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="close"
              className="text-xs font-regular text-neutral-600"
            >
              Collapsed
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="auto"
              className="text-xs font-regular text-neutral-600"
            >
              Expand on hover
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SideBar;
