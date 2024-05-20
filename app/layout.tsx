import { ReactNode } from "react";

// SEO를 위한 메타데이터
export {
  nextjs_metadata as metadata,
  nextjs_viewport as viewport,
} from "@/data/metadata";

// styles
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/style.scss";

// components
import JotaiProvider from "@/components/roots/JotaiProvider";
import PageHeader from "@/components/pageFrame/pageHeader/Container";
import PageFooter from "@/components/pageFrame/pageFooter/Container";
import ViewportDeviceChecker from "@/components/roots/ViewportDeviceChecker";
import PageContainer from "@/components/pageFrame/PageContainer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" viewport-device="desktop" is-apple="false">
      <body>
        <JotaiProvider>
          <ViewportDeviceChecker />
          <PageContainer>
            <PageHeader />
            {children}
            <PageFooter />
          </PageContainer>
        </JotaiProvider>
      </body>
    </html>
  );
}
