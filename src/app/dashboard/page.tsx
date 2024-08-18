import { getUser } from "@workos-inc/authkit-nextjs";

export default async function DashboardPage() {
  const { user } = await getUser({ ensureSignedIn: true });

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
