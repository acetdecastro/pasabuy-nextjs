"use client";

import { getUser } from "@workos-inc/authkit-nextjs";
import { useState } from "react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { UserCreateInput } from "@/types";

interface CreateUserProps {
  input: UserCreateInput;
}

export function CreateUser({ input }: CreateUserProps) {
  // const [latestPost] = api.user.getLatest.useSuspenseQuery();
  const router = useRouter();

  const utils = api.useUtils();
  const createUser = api.user.create.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
      router.push("/dashboard");
      // setName("");
    },
    onError: async () => {
      router.push("/app/dashboard");
      // setName("");
    },
  });

  createUser.mutate(input);

  return (
    <div className="w-full max-w-xs">
      <h1>Create User</h1>
      {/* {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createUser.isPending}
        >
          {createUser.isPending ? "Submitting..." : "Submit"}
        </button>
      </form> */}
    </div>
  );
}
