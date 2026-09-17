import { createFileRoute, redirect } from "@tanstack/react-router";

// The uploaded Style Trend landing page is a static multi-file HTML page.
// It is served from /site/index.html; redirect the root route to it.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      window.location.replace("/site/index.html");
      return;
    }
    throw redirect({ href: "/site/index.html" });
  },
  component: () => null,
});
