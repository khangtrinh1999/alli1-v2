import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
interface SideBarMenuItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  active?: boolean;
  open?: boolean;
}
function SideBarMenuItem({ icon,value, label, active, open }: SideBarMenuItemProps) {
  return (
    <Link href={value} className="w-full" prefetch>
     <div
      className={cn(
        "flex flex-row items-center gap-4 h-[40px] ml-1 px-2 rounded-md cursor-pointer text-neutral-600 hover:text-neutral-900 font-regular text-base",
        "hover:bg-neutral-100 hover:font-medium",
        active
          ? "bg-neutral-100 text-neutral-900 font-medium"
          : "text-neutral-600",
        open ? "w-[230px]" : "w-fit"
      )}
    >
      {icon}
      {open && <span>{label}</span>}
    </div></Link>
   
  );
}

export default SideBarMenuItem;
