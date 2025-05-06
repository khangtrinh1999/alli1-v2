"use client";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import VerticalBlind from "./items/vertical-blind/vertical-blind";

function OrderItem() {
  return (
    <div className=" border border-neutral-300 border-solid rounded-md shadow-xs w-11/12 mx-auto">
      <div className="h-14 border-b border-neutral-300 border-solid flex flex-row items-center px-4 justify-between">
        <div className="flex flex-row items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size={"icon"}>
                  <PlusIcon></PlusIcon>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size={"icon"}>
                  <MinusIcon></MinusIcon>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <span className="font-semibold ml-2 text-lg">1. Vertical Blinds</span>
        </div>

        <span className="font-semibold text-lg">$ 3,000.00</span>
      </div>
      <div className="min-h-16 p-4">
        <VerticalBlind></VerticalBlind>
      </div>
    </div>
  );
}

export default OrderItem;
