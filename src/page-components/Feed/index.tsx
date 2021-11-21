import { Button } from "@/components/Button";
import { ThoughtFeed } from "@/components/ThoughtFeed";
import { PageTitle } from "@/components/Typography";
import type { FC } from "react";
import { useState } from "react";
import ThoughtWriter from "./ThoughtWriter";

const FeedPage: FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="container">
      <PageTitle>My Feed</PageTitle>
      <Button
        onClick={() => setVisible(true)}
        variant="ghost"
        className="mx-auto"
      >
        Add a thought
      </Button>
      <ThoughtWriter visible={visible} onDismiss={() => setVisible(false)} />
      <ThoughtFeed />
    </div>
  );
};

export default FeedPage;
