import { Button } from "@/components/Button";
import { PageTitle } from "@/components/Typography";
import type { FC } from "react";

const FeedPage: FC = () => {
  return (
    <div className="container">
      <PageTitle>My Feed</PageTitle>
      <Button variant="ghost" className="mx-auto">
        Add a thought
      </Button>
      <p className="p-8 text-center">Cannot find any posts</p>
    </div>
  );
};

export default FeedPage;
