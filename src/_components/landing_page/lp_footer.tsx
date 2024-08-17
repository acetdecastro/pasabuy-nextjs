import Link from "next/link";

export default function LPFooter() {
  return (
    <footer
      id="footer"
      className="bg-background pb-6 pt-12 text-muted-foreground"
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row lg:w-[55rem]">
        <p className="text-xs md:text-sm">
          &copy; 2024 Pasabuy. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-xs hover:underline hover:underline-offset-4 md:text-sm"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline hover:underline-offset-4 md:text-sm"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline hover:underline-offset-4 md:text-sm"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
