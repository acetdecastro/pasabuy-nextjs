import LandingPageContent from "@/_components/landing_page/lp_content";
import { api, HydrateClient } from "@/trpc/server";
import {
  getUser,
  getSignInUrl,
  getSignUpUrl,
} from "@workos-inc/authkit-nextjs";

export default async function LandingPage() {
  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();

  return (
    <HydrateClient>
      <LandingPageContent signInUrl={signInUrl} signUpUrl={signUpUrl} />
    </HydrateClient>
  );
}
