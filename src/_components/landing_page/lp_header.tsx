import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/_components/ui/sheet";
import { Button } from "@/_components/ui/button";
import { ModeToggle } from "../ui/mode_toggle";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { type IconProps } from "@/interface";

interface LPHeaderProps {
  signInUrl: string;
  signUpUrl: string;
}

export default function LPHeader({ signUpUrl, signInUrl }: LPHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const closeSheet = () => setIsOpen(false);

  const headerClasses = cn(
    "fixed left-1/2 top-4 z-50 mx-auto h-[3.2rem] md:h-16 w-[83%] max-w-[60rem] -translate-x-1/2 transform select-none rounded-2xl border border-primary/20 shadow-md shadow-primary/15",
    isScrolled ? "bg-blur backdrop-blur-md" : "bg-transparent",
    isVisible ? "opacity-100 duration-300 ease-in-out" : "opacity-0",
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-12 items-center justify-between px-4 md:h-16 md:px-6">
        <Link href="/" className="flex items-center gap-1" prefetch={false}>
          <span className="w-[4.8rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-lg font-semibold tracking-tighter text-transparent md:w-[6.3rem] md:text-2xl">
            Pasabuy
          </span>
        </Link>
        {isVisible && (
          <nav className="hidden items-center gap-4 text-sm font-medium sm:flex md:gap-5">
            <Link
              href="#features"
              className="hover:underline hover:underline-offset-4 md:text-base"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:underline hover:underline-offset-4 md:text-base"
              prefetch={false}
            >
              How it works
            </Link>
            <Link
              href={signInUrl}
              className="hover:underline hover:underline-offset-4 md:text-base"
              prefetch={false}
            >
              Sign In
            </Link>
            <Link
              href={signUpUrl}
              className="select-none rounded-lg border border-primary/50 px-2 py-1 shadow-md transition-all hover:bg-accent md:text-base lg:px-4"
              prefetch={false}
            >
              Sign Up
            </Link>
            <ModeToggle />
          </nav>
        )}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="sm:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-background p-6"
          >
            <SheetTitle aria-describedby="sheet-title">
              <VisuallyHidden>Menu</VisuallyHidden>
            </SheetTitle>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-1"
                prefetch={false}
              >
                <span className="w-[5.2rem] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-xl font-semibold tracking-tighter text-transparent">
                  Pasabuy
                </span>
              </Link>
            </div>
            <nav className="mt-6 grid gap-4">
              <Link
                href="#features"
                className="flex items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4"
                prefetch={false}
                onClick={closeSheet}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4"
                prefetch={false}
                onClick={closeSheet}
              >
                How it works
              </Link>
              <Link
                href={signInUrl}
                className="flex items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4"
                prefetch={false}
                onClick={closeSheet}
              >
                Sign In
              </Link>
              <Link
                href={signUpUrl}
                className="relative block animate-gradient-waving select-none rounded-lg bg-brand-gradient px-5 py-1.5 text-center text-sm font-semibold text-white shadow-lg transition-all hover:shadow-lg hover:shadow-primary/50"
                onClick={closeSheet}
              >
                Sign Up For Free
              </Link>
              <ModeToggle />
            </nav>
          </SheetContent>
          <SheetDescription className="hidden" />
        </Sheet>
      </div>
    </header>
  );
}

function ContactIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ServerIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
