import { Button } from "@/components/Button";
import { useModal } from "@/components/Modal";
import { ThoughtFeed } from "@/components/ThoughtFeed";
import { PageTitle } from "@/components/Typography";
import type { FC } from "react";
import ThoughtWriter from "./ThoughtWriter";

const FeedPage: FC = () => {
  const [visible, present, dismiss] = useModal();
  return (
    <div className="container">
      <PageTitle>My Feed</PageTitle>
      <Button onClick={present} variant="ghost" className="mx-auto">
        Add a thought
      </Button>
      <ThoughtWriter visible={visible} onDismiss={dismiss} />
      <ThoughtFeed />
    </div>
  );
};

export default FeedPage;
