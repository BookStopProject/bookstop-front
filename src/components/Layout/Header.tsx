import IconZap from "@/assets/icons/zap.svg";
import logo from "@/assets/logo-text.png";
import CONFIG from "@/config";
import { PARAM_AUTH_SIGNOUT } from "@/graphql/authHook";
import { useMeQuery } from "@/graphql/gql.gen";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import { IconBook, IconCalendarEvent, IconCoin, IconHome } from "@tabler/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useCallback } from "react";
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
          "flex py-2 px-4 font-medium focus:bg-surface-2 rounded-full transition-colors",
          isActive
            ? "text-on-secondary-container bg-surface-2"
            : "text-on-surface-variant"
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
    <div className="hidden md:flex items-center space-x-4">
      <Tab icon={<IconHome />} href="/" title="Home" />
      <Tab icon={<IconZap />} href="/feed" title="Feed" />
      <Tab icon={<IconCalendarEvent />} href="/events" title="Events" />
      <Tab icon={<IconBook />} href="/my-library" title="Library" />
    </div>
  );
};

const Auth: FC = () => {
  const [{ data }] = useMeQuery();

  const signIn = useCallback(() => {
    window.location.href = `${CONFIG.API_URI}/auth?redirect_url=${window.location.pathname}`;
  }, []);
  const router = useRouter();
  const signOut = useCallback(() => {
    const tempUrl = new URL(window.location.href);
    tempUrl.searchParams.set(PARAM_AUTH_SIGNOUT, "1");
    window.location.replace(tempUrl);
  }, []);

  if (data?.me) {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center px-4 h-10 text-secondary bg-surface-variant rounded-full">
          <IconCoin />
          <span className="ml-1 font-bold">{data.me.credit}</span>
        </div>
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
            <MenuItem onSelect={() => router.push("/my-exchange")}>
              Exchanges
            </MenuItem>
            <MenuItem onSelect={() => router.push("/settings")}>
              Settings
            </MenuItem>
            <MenuItem onSelect={signOut}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  }

  return (
    <div>
      <Button onClick={signIn} variant="tonal">
        Sign in
      </Button>
    </div>
  );
};

const Header: FC = () => {
  return (
    <>
      <div className="flex fixed top-0 z-20 justify-between items-center px-4 md:px-8 space-x-2 w-full h-16 bg-surface">
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
      <div className="h-16" />
    </>
  );
};

export default Header;
