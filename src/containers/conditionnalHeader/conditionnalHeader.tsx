"use client";

import Header from "@/containers/header/header";
import { usePathname } from "next/navigation";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  if (isLanding) return null;

  return <Header />;
};