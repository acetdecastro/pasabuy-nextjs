import { getUser } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const { user } = await getUser({ ensureSignedIn: true });

  redirect("/app/dashboard");
  return <></>;
}
