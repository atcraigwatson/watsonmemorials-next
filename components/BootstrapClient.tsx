"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    //@ts-expect-error module is not where TS would expect it
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
}
