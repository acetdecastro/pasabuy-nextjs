import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { type IconProps } from "@/interface";

interface LPHowItWorksProps {
  signUpUrl: string;
}

export default function LPHowItWorks({ signUpUrl }: LPHowItWorksProps) {
  return (
    <section id="how-it-works" className="px-6 pb-5 pt-16">
      <div className="mx-auto w-full max-w-4xl p-6 md:p-10">
        <div className="grid gap-12 lg:gap-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-4 text-3xl font-bold leading-none tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
              How It Works
            </h1>
            <p className="text-center text-sm leading-relaxed tracking-wide text-muted-foreground md:text-lg lg:text-xl">
              Follow these steps to get the most out of Pasabuy.
            </p>
          </div>
          <div className="grid gap-12 lg:gap-16 lg:px-14 xl:px-16">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:px-2 md:text-2xl lg:text-3xl">
                1.{" "}
                <Link
                  href={signUpUrl}
                  className="underline underline-offset-4 hover:text-muted-foreground"
                >
                  Sign Up
                </Link>{" "}
                and Set Up Your Account
              </h2>
              <div className="mt-5 flex flex-col space-y-3 px-3 md:px-6 lg:px-10 xl:px-12">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; Sign up through Google or by email.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:px-2 md:text-2xl lg:text-3xl">
                2. Create a Trip
              </h2>
              <div className="mt-5 flex flex-col space-y-3 px-3 md:px-6 lg:px-10 xl:px-12">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; In the <em>Create a Trip</em> section, add your trip
                  details like destination and date.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; Add your guidelines for Pasabuy requests like price
                  range, estimated turn around time, etc.
                </p>
                {/* <p className="text-muted-foreground text-sm leading-relaxed md:text-lg lg:text-xl">
                  &ndash; Share with your friends and family.
                </p> */}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:px-2 md:text-2xl lg:text-3xl">
                3. Share Your Trip Link
              </h2>
              <div className="mt-5 flex flex-col space-y-3 px-3 md:px-6 lg:px-10 xl:px-12">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; To gather Pasabuy requests, share the trip&apos;s
                  generated link through messaging apps, email, or social media.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:px-2 md:text-2xl lg:text-3xl">
                4. Friends Sign Up and Submit Pasabuy Requests
              </h2>
              <div className="mt-5 flex flex-col space-y-3 px-3 md:px-6 lg:px-10 xl:px-12">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; The link will first ask them to sign up.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; After signing up, they can fill out the form with
                  their Pasabuy request details like item names, variations, and
                  budget, etc.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:px-2 md:text-2xl lg:text-3xl">
                5. Manage Pasabuy Requests
              </h2>
              <div className="mt-5 flex flex-col space-y-3 px-3 md:px-6 lg:px-10 xl:px-12">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; You&apos;ll get notifications for new requests, and
                  see them all in your trip&apos;s dashboard.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; Pasabuy requests start as <em>Pending</em> by default.
                  Update the status to <em>In-Progress</em>, <em>Complete</em>,
                  or <em>Reject</em> as you handle each request.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; Keep everyone in the loop with updates and
                  communications through the platform.
                </p>
                <div className="mx-auto w-full max-w-xl">
                  <Alert className="mt-3 flex flex-col items-start gap-1 space-y-2 rounded-md bg-muted px-5 py-4">
                    <div className="flex space-x-2">
                      <InfoIcon className="h-5 w-5 text-primary md:h-6 md:w-6 lg:h-7 lg:w-7" />
                      <AlertTitle className="text-sm font-medium text-primary md:text-base lg:text-lg">
                        Tip!
                      </AlertTitle>
                    </div>
                    <div className="flex-1 space-y-1">
                      <AlertDescription className="text-xs leading-relaxed tracking-wide text-primary md:text-sm lg:text-base">
                        You can always negotiate with the requestor using the
                        app.
                      </AlertDescription>
                    </div>
                  </Alert>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:px-2 md:text-2xl lg:text-3xl">
                6. Wrap Up Your Trip
              </h2>
              <div className="mt-5 flex flex-col space-y-3 px-3 md:px-6 lg:px-10 xl:px-12">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                  &ndash; Once everything is taken care of and your trip is
                  over, close it out and mark any remaining Pasabuy requests as{" "}
                  <em>Complete</em> or <em>Reject</em> as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
