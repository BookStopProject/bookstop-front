import IconZap from "@/assets/icons/zap.svg";
import logo from "@/assets/logo-text.png";
import CONFIG from "@/config";
import { useMeQuery } from "@/graphql/gql.gen";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import { IconBook, IconCalendarEvent, IconHome } from "@tabler/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";

const Tab: FC<{ href: string; title: string; icon: ReactNode }> = ({
  href,
  title,
  icon,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <a
        className={clsx(
          "flex py-3 px-6 border-b-4 transition-colors",
          isActive ? "border-primary" : "border-transparent"
        )}
      >
        {icon}
        <span className="ml-2">{title}</span>
      </a>
    </Link>
  );
};

const Tabs: FC = () => {
  return (
    <div className="hidden items-center space-x-2 md:flex">
      <Tab icon={<IconHome />} href="/" title="Home" />
      <Tab icon={<IconZap />} href="/feed" title="Feed" />
      <Tab icon={<IconCalendarEvent />} href="/events" title="Events" />
      <Tab icon={<IconBook />} href="/my-library" title="Library" />
    </div>
  );
};

const Auth: FC = () => {
  const [{ data }] = useMeQuery();

  const signIn = () => {
    window.location.href = `${CONFIG.API_URI}/auth?redirect_url=${window.location.pathname}`;
  };
  const router = useRouter();
  const signOut = () => {
    router.replace(router.pathname + "?auth_signout=1", undefined, {
      shallow: true,
    });
  };

  if (data?.me) {
    return (
      <Menu>
        <MenuButton>
          <Avatar
            size={10}
            src={data.me.profileImageUrl}
            username={data.me.name}
          />
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => router.push(`/user/${data.me!.id}`)}>
            Profile
          </MenuItem>
          <MenuItem onSelect={() => router.push("/settings")}>
            Settings
          </MenuItem>
          <MenuItem onSelect={signOut}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
    <div>
      <Button onClick={signIn} circled variant="ghost">
        Sign in
      </Button>
    </div>
  );
};

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 space-x-2 md:py-6 md:px-8">
      <Link href="/">
        <a className="flex-none w-36 lg:w-48">
          <Image src={logo} alt="Logo" />
        </a>
      </Link>
      <Tabs />
      <div className="flex justify-end items-center w-48">
        <Auth />
      </div>
    </div>
  );
};

export default Header;
