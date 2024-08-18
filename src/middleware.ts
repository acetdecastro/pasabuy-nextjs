import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/"],
  },
  debug: true,
});

// Match against pages that require auth
// Leave this out if you want auth on every resource (including images, css etc.)
// export const config = { matcher: ["/", "/dashboard", "/dashboard/:path*"] };
export const config = { matcher: ["/", "/app", "/app/:path*"] };
