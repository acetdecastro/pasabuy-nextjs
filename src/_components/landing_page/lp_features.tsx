import { Card } from "@/_components/ui/card";
import { type IconProps } from "@/interface";
import { Bell } from "lucide-react";
import Link from "next/link";

export default function LPFeatures() {
  return (
    <section
      id="features"
      className="container mx-auto select-none px-6 pb-12 pt-20 sm:w-[37rem] sm:pt-20 md:w-[45rem] md:pt-24 lg:w-[50rem] lg:pt-24"
    >
      <div className="flex items-center justify-center px-4 pb-4">
        <Link
          href="#features"
          className="rounded-lg bg-muted px-2 py-0.5 text-xs font-medium leading-relaxed text-muted-foreground md:px-3 md:py-1.5 md:text-base"
        >
          Features
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-2 space-y-2 sm:grid-cols-2 md:grid-cols-6 md:space-y-0 lg:grid-cols-8">
        {/* Feature 1: Create Trips */}
        <Card className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/50 sm:col-span-2 md:col-span-3 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-md bg-secondary p-3">
              <PlaneIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold leading-normal tracking-tight md:text-lg lg:text-xl">
              Create Trips
            </h3>
          </div>
          <p className="mt-4 justify-start text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
            Setup trips and add guidelines for Pasabuy requests.
          </p>
        </Card>

        {/* Feature 2: Unique Shareable Links */}
        <Card className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/50 sm:col-span-2 md:col-span-3 lg:col-span-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-md bg-secondary p-3">
              <LinkIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold leading-normal tracking-tight md:text-lg lg:text-xl">
              Unique Shareable Links
            </h3>
          </div>
          <p className="mt-4 justify-start text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
            Share your trips&apos; link to gather Pasabuy requests.
          </p>
        </Card>

        {/* Feature 3: Manage Pasabuys */}
        <Card className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/50 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-md bg-secondary p-3">
              <LayoutDashboardIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold leading-normal tracking-tight md:text-lg lg:text-xl">
              Manage Pasabuys
            </h3>
          </div>
          <p className="mt-4 justify-start text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
            Easily track and handle all your Pasabuy requests in one place.
          </p>
        </Card>

        {/* Feature 4: Privacy Control */}
        <Card className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/50 sm:col-span-2 md:col-span-4 lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-md bg-secondary p-3">
              <LockIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold leading-normal tracking-tight md:text-lg lg:text-xl">
              Privacy Control
            </h3>
          </div>
          <p className="mt-4 justify-start text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
            Private trips don&apos;t show in{" "}
            <em>Trips Open for Pasabuy Listing</em>.
          </p>
        </Card>

        {/* Feature 5: Real-Time Notifications */}
        <Card className="w-full rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/50 sm:col-span-2 md:col-span-4 lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-md bg-secondary p-3">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-base font-bold leading-normal tracking-tight md:text-lg lg:text-xl">
              Real-Time Notifications
            </h3>
          </div>
          <p className="mt-4 justify-start text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
            Stay updated with instant alerts.
          </p>
        </Card>
      </div>
    </section>
  );
}

function LayoutDashboardIcon({ className }: IconProps) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function LinkIcon({ className }: IconProps) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function LockIcon({ className }: IconProps) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PlaneIcon({ className }: IconProps) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
