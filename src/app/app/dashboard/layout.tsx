import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
