import { ThoughtFeed } from "@/components/ThoughtFeed";
import type { User } from "@/graphql/gql.gen";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@reach/tabs";
import type { FC } from "react";
import UserBookList from "./UserBooksList";
import UserInfo from "./UserInfo";

const UserPage: FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <UserInfo user={user} />
      <Tabs className="container">
        <TabList>
          <Tab className="flex-1">Thoughts</Tab>
          <Tab className="flex-1">Library</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ThoughtFeed userId={user.id} />
          </TabPanel>
          <TabPanel className="py-4">
            <UserBookList userId={user.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default UserPage;
