'use client'
import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'

function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Detect touch support
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <div
      ref={sidebarRef}
      className={cn(
        'border-t-0 border-r border-b border-neutral-300 border-solid h-full absolute transition-all duration-200 ease-in bg-white',
        isOpen ? 'w-[200px]' : 'w-[50px]'
      )}
      onMouseEnter={!isTouch ? handleOpen : undefined}
      onMouseLeave={!isTouch ? handleClose : undefined}
      onTouchStart={isTouch ? handleOpen : undefined}
    ></div>
  )
}

export default SideBar
