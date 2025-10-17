import { memo } from "react";
import { PageWrapper } from "../components/PageWrapper";
import Timeline from "../components/Timeline";

const Archives = memo(() => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center">
        <Timeline />
      </div>
    </PageWrapper>
  );
});

Archives.displayName = 'Archives';

export default Archives;
  