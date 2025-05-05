"use client";
import { DeleteIcon, EqualIcon, MinusIcon, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export default function SmartNumberInput({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}) {
  const holdTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showNumpad, setShowNumpad] = useState(false);
  const numpadRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      positionRef.current = {
        x: window.innerWidth - 300,
        y: window.innerHeight - 400,
      };
    }
  }, []);
  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        numpadRef.current &&
        !numpadRef.current.contains(event.target as Node)
      ) {
        setShowNumpad(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  //
  const handleNumpadClick = (digit: string) => {
    if (digit === "←") {
      onChange(value.slice(0, -1));
    } else if (digit === "C") {
      onChange("");
    } else if (digit === "=") {
      // Clean up any trailing +, -, or whitespace
      let cleaned = value.trim().replace(/[+\-\s]+$/, "");

      // Remove leading zeros from all numbers
      cleaned = cleaned.replace(/\b0+(\d+)/g, (_, digits) =>
        String(Number(digits))
      );

      try {
        const result = cleaned ? eval(cleaned).toString() : "";
        onChange(result);
      } catch {
        console.error("Invalid expression:", cleaned);
      }
    } else if (digit === "+" || digit === "-") {
      const lastChar = value.slice(-1);
      if (lastChar === "+" || lastChar === "-") return;
      onChange(value + digit);
    } else {
      onChange(value + digit);
    }
  };

  const startDrag = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    dragOffset.current = {
      x: clientX - positionRef.current.x,
      y: clientY - positionRef.current.y,
    };

    const moveHandler = (moveEvent: TouchEvent | MouseEvent) => {
      const x =
        "touches" in moveEvent
          ? moveEvent.touches[0].clientX
          : (moveEvent as MouseEvent).clientX;
      const y =
        "touches" in moveEvent
          ? moveEvent.touches[0].clientY
          : (moveEvent as MouseEvent).clientY;

      positionRef.current = {
        x: x - dragOffset.current.x,
        y: y - dragOffset.current.y,
      };

      if (numpadRef.current) {
        numpadRef.current.style.left = positionRef.current.x + "px";
        numpadRef.current.style.top = positionRef.current.y + "px";
      }
    };

    const endHandler = () => {
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", endHandler);
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", endHandler);
    };

    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("touchend", endHandler);
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", endHandler);
  };

  if (!isTouchDevice) {
    return (
      <Input
       
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      />
    );
  }

  return (
    <div className={className}>
      <Input
        type="text"
        value={value}
        onFocus={() => setShowNumpad(true)}
        readOnly
      />

      {showNumpad && (
        <div
          ref={numpadRef}
          style={{
            position: "fixed",
            top: positionRef.current.y,
            left: positionRef.current.x,
            zIndex: 9999,
            touchAction: "none",
          }}
          className={cn(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-2 shadow"
          )}
          data-state={showNumpad ? "open" : "closed"}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          {/* Numpad Buttons */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("1")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              1
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("2")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              2
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("3")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              3
            </Button>
            <Button
              onTouchStart={() => {
                holdTimeout.current = setTimeout(() => {
                  handleNumpadClick("C"); // long press triggers "C"
                  holdTimeout.current = null; // clear ref to block tap
                }, 500); // adjust hold duration as needed
              }}
              onTouchEnd={() => {
                if (holdTimeout.current) {
                  clearTimeout(holdTimeout.current);
                  handleNumpadClick("←"); // short tap triggers "←"
                }
              }}
              onTouchCancel={() => {
                if (holdTimeout.current) {
                  clearTimeout(holdTimeout.current);
                }
              }}
              className="w-16 h-16 p-4 active:bg-neutral-600 hover:bg-neutral-600"
              style={{ userSelect: "none" }}
              type="button"
            >
              <DeleteIcon className="w-6 h-6" />
            </Button>

            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("4")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              4
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("5")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              5
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("6")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              6
            </Button>
            <Button
              onClick={() => handleNumpadClick("+")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-600 hover:bg-neutral-600"
              style={{ userSelect: "none" }}
              type="button"
            >
              <Plus className="w-6 h-6" />
            </Button>

            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("7")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              7
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("8")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              8
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("9")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              9
            </Button>

            <Button
              onClick={() => handleNumpadClick("-")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-600 hover:bg-neutral-600"
              style={{ userSelect: "none" }}
              type="button"
            >
              <MinusIcon className="w-6 h-6" />
            </Button>
            <div></div>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("0")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              0
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick(".")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
              type="button"
            >
              .
            </Button>
            <Button
              onClick={() => handleNumpadClick("=")}
              className="w-16 h-16 p-4 text-xl active:bg-neutral-600 hover:bg-neutral-600"
              style={{ userSelect: "none" }}
              type="button"
            >
              <EqualIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
