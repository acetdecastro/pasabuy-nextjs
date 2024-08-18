import { getUser } from "@workos-inc/authkit-nextjs";
import { api, HydrateClient } from "@/trpc/server";
import { CreateUser } from "@/_components/user";
import { UserCreateInput } from "@/types";

export default async function DashboardPage() {
  const { user: workOsUser } = await getUser({ ensureSignedIn: true });

  // Get user from the database, returns null if not found
  const user = await api.user.getById({ id: workOsUser.id });

  // void api.post.getLatest.prefetch();

  // TODO
  // 1. Add a workflow to check if the user exists in DB
  // - If exists, just return, else
  // 2. Create user in db using the data work WorkOS User object

  if (!user) {
    const input: UserCreateInput = {
      id: workOsUser.id,
      email: workOsUser.email,
      emailVerified: workOsUser.emailVerified,
      firstName: workOsUser.firstName ?? "",
      lastName: workOsUser.lastName ?? "",
      profilePictureUrl: workOsUser.profilePictureUrl ?? "",
      username: undefined,
    };
    return <CreateUser input={input} />;
  }

  return (
    <HydrateClient>
      <div>
        <h1>Dashboard</h1>
        {user?.firstName && <h2>Hello, {user?.firstName}!</h2>}
      </div>
    </HydrateClient>
  );
}
