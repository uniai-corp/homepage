import { Metadata } from "next";

import PageSolutionContainer from "@/components/_pages/a2_solution/Container";

export const metadata: Metadata = {
  title: "솔루션",
};

export default function PageSolutionKo() {
  return <PageSolutionContainer locale="ko" />;
}
