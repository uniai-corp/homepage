import { Metadata } from "next";

import PageAboutContainer from "@/components/_pages/a1_about/Container";

export const metadata: Metadata = {
  title: "회사소개",
};

export default function PageAboutKo() {
  return <PageAboutContainer locale="ko" />;
}
