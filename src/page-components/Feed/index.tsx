import { Button } from "@/components/Button";
import { useModal } from "@/components/Modal";
import { PostFeed } from "@/components/PostFeed";
import { PageTitle } from "@/components/Typography";
import type { FC } from "react";
import PostWriter from "./PostWriter";

const FeedPage: FC = () => {
  const [visible, present, dismiss] = useModal();
  return (
    <div className="container">
      <PageTitle>My Feed</PageTitle>
      <Button onClick={present} variant="tonal" className="mx-auto">
        Add a post
      </Button>
      <PostWriter visible={visible} onDismiss={dismiss} />
      <PostFeed />
    </div>
  );
};

export default FeedPage;
