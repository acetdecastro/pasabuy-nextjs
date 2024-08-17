import Logout from "@/_components/logout";
import { endSession } from "@/actions/auth";
import { HydrateClient } from "@/trpc/server";
// import { getUser } from "@workos-inc/authkit-nextjs";

export default async function DashboardPage() {
  // const { user } = await getUser({ ensureSignedIn: true });

  // console.log(user);

  return (
    <div>
      <h1>Dashboard</h1>
      <Logout action={endSession} />
    </div>
  );
}
