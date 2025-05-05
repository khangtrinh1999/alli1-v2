"use client";
import { DeleteIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export default function SmartNumberInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
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

  const handleNumpadClick = (digit: string) => {
    if (digit === "←") {
      onChange(value.slice(0, -1));
    } else if (digit === "C") {
      onChange("");
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
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded w-full"
      />
    );
  }

  return (
    <div>
      <Input
        type="text"
        value={value}
        onFocus={() => setShowNumpad(true)}
        readOnly
        className="border w-full bg-white cursor-pointer"
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
          className="border border-solid border-neutral-200 bg-white shadow rounded-lg p-2 w-56"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          {/* Numpad Buttons */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("1")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              1
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("2")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              2
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("3")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              3
            </Button>

            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("4")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              4
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("5")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              5
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("6")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              6
            </Button>

            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("7")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              7
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("8")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              8
            </Button>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("9")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              9
            </Button>

            <div></div>
            <Button
              variant={"outline"}
              onClick={() => handleNumpadClick("0")}
              className="w-full h-full p-4 text-xl active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              0
            </Button>
            <Button
              variant={"outline"}
              onMouseDown={(e) => {
                const timeout = setTimeout(() => {
                  handleNumpadClick("C"); // Trigger "C" on long press
                }, 500); // Adjust the duration for a long press (500ms)

                e.currentTarget.onmouseup = () => {
                  clearTimeout(timeout); // Clear timeout if the button is released
                  handleNumpadClick("←"); // Trigger "←" on normal click
                };

                e.currentTarget.onmouseleave = () => {
                  clearTimeout(timeout); // Clear timeout if the cursor leaves the button
                };
              }}
              className="w-full h-full p-4 active:bg-neutral-200 hover:bg-neutral-200"
              style={{ userSelect: "none" }}
            >
              <DeleteIcon className="w-6 h-6"></DeleteIcon>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
