import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="h-[53px] w-full bg-white border-b border-neutral-300 border-solid flex items-center justify-between px-1 pr-4">
      <Link href={"/dashboard"} prefetch>
        <div className="ml-2 bg-white flex items-center justify-between rounded-md cursor-pointer">
          <Image
            width={30}
            height={30}
            src={"/black-logo.png"}
            alt="logo"
          ></Image>
        </div>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" side="bottom">
          <div className="flex flex-col px-2 gap-0 py-2">
            <span className="text-sm">Tam Tran</span>
            <span className="text-xs text-neutral-600">example@gmail.com</span>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem
              value="close"
              className="px-2 text-neutral-600 text-xs"
            >
              <SettingsIcon className="w-4 h-4"></SettingsIcon>Account Settings
            </DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioItem
              value="auto"
              className="px-2 text-neutral-600 text-xs"
            >
              <LogOutIcon className="w-4 h-4"></LogOutIcon>Logout
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
