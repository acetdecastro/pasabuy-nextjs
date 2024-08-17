"use server";

import { signOut } from "@workos-inc/authkit-nextjs";

export const endSession = async () => await signOut();
