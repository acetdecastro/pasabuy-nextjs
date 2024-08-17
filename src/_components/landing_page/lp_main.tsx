import Link from "next/link";
import LPFeatures from "./lp_features";
import LPHowItWorks from "./lp_how_it_works";

interface LPMainProps {
  signUpUrl: string;
}

export default function LPMain({ signUpUrl }: LPMainProps) {
  return (
    <main className="md:pt-34 flex w-full flex-col px-4 pb-10 pt-[6.5rem] sm:pt-[10rem]">
      <div className="flex flex-col items-center justify-center px-6">
        <div className="mb-5 mt-14">
          <h1 className="select-none text-center font-extrabold">
            <div className="relative space-y-2 leading-loose tracking-tight">
              <span className="xl:text-10xl absolute -left-[8rem] -top-[1.3rem] mb-1 block text-5xl text-primary/10 sm:-left-[16rem] sm:-top-[3.5rem] sm:text-8xl md:-left-[16rem] md:text-8xl">
                Simplified
              </span>
              <span className="xl:text-10xl sm:top-30 md:top-18 absolute left-1/2 top-10 z-30 mb-10 h-[6rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-5xl tracking-tighter text-transparent sm:left-1/2 sm:h-[8rem] sm:w-[26rem] sm:text-8xl md:left-1/2 md:h-[8rem] md:w-[26rem] md:text-8xl">
                Pasabuy
              </span>
              <span className="xl:text-10xl absolute -left-[8.6rem] top-4 -mb-10 block text-5xl text-primary/10 sm:-left-[17.2rem] sm:top-5 sm:text-8xl md:-left-[17.2rem] md:top-[1.5rem] md:text-8xl">
                Experience
              </span>
            </div>
          </h1>
        </div>

        <h3 className="mb-8 mt-24 w-[15rem] text-center text-sm/relaxed text-muted-foreground sm:mt-[10rem] sm:w-[20rem] sm:text-lg/relaxed md:mt-[11rem] md:w-[25rem] lg:mt-[10rem] lg:w-[30rem] lg:text-xl/relaxed">
          Set up your trip, share the link, and keep track of Pasabuy
          requests—all effortlessly managed with Pasabuy.
        </h3>
      </div>

      <div className="mt-5 flex items-center justify-center pb-10">
        <Link
          href={signUpUrl}
          className="relative block select-none rounded-2xl bg-primary px-12 py-2 text-center text-sm font-semibold tracking-tighter text-primary-foreground shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 sm:py-2.5 md:px-12 md:py-2.5 md:text-xl lg:px-14 lg:py-3.5 lg:text-2xl"
        >
          Sign Up
          <div className="absolute right-0 top-0 -mr-2 -mt-2 rounded-full border border-teal-300/60 bg-teal-400/70 px-2 py-0.5 text-xs font-semibold tracking-tight text-primary-foreground md:-mr-1 md:-mt-2.5 md:text-sm lg:-mr-6 lg:-mt-2.5 lg:px-4 lg:text-lg/relaxed">
            Free!
          </div>
        </Link>
      </div>

      <LPFeatures />
      <LPHowItWorks signUpUrl={signUpUrl} />

      <section id="ready" className="w-full pb-6 pt-10 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3 lg:w-[55rem]">
            <h2 className="px-2 text-3xl font-bold tracking-tighter sm:px-10 md:text-5xl/tight lg:text-6xl/tight">
              Start now and join the Pasabuy community <span>🚀</span>
            </h2>
            {/* <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join the Pasabuy community today.
            </p> */}
          </div>
          <div className="mx-auto max-w-sm">
            <Link
              href={signUpUrl}
              className="relative mt-3 block animate-gradient-waving select-none rounded-2xl bg-brand-gradient px-5 py-3 text-center font-semibold tracking-tighter text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gradient-to-br hover:from-indigo-500 hover:via-sky-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-primary/50 md:text-lg lg:px-7 lg:py-4 lg:text-2xl"
            >
              Sign Up For Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
