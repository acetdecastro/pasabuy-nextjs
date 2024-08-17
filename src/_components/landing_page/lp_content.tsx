"use client";

import LPHeader from "./lp_header";
import LPMain from "./lp_main";
import LPFooter from "./lp_footer";

interface LandingPageProps {
  signInUrl: string;
  signUpUrl: string;
}

export default function LandingPageContent({
  signInUrl,
  signUpUrl,
}: LandingPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <LPHeader signInUrl={signInUrl} signUpUrl={signUpUrl} />
      <LPMain signUpUrl={signUpUrl} />
      <LPFooter />
    </div>
  );
}
