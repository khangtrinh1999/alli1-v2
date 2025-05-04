"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Selections } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SimpleSelectProps {
  label?: string;
  data: Selections[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function ImageSelect({
  label,
  data,
  value,
  onChange,
  disabled,
  className,
}: SimpleSelectProps) {
  const selectedItem = React.useMemo(
    () => data.find((item) => item.value === value),
    [data, value]
  );

  return (
    <div className={cn(className)}>
      {label && <span className="text-sm font-semibold">{label}</span>}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="w-full flex items-center justify-between
          "
            disabled={disabled}
          >
            <span>{selectedItem?.name}</span>
            <ChevronDown className="text-neutral-400"></ChevronDown>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex flex-row p-4"
          align="start"
          side="bottom"
        >
          {data.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onSelect={() => onChange(item.value)}
              className="focus:bg-white"
            >
              <div
                className={cn(
                  "flex flex-col justify-center items-center gap-2 p-1 rounded-md cursor-pointer transition-all border-2 border-transparent hover:border-blue-500",
                  item.value === value ? "border-blue-500" : ""
                )}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    width={220}
                    height={220}
                    alt={item.name}
                    className="rounded-md"
                  />
                )}
                {item.color && (
                  <div
                    className={cn(
                      "w-[50px] h-[50px] rounded-full border border-neutral-200 border-solid"
                    )}
                    style={{ backgroundColor: item.color }}
                  ></div>
                )}
                <span className="text-xs font-medium">{item.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
