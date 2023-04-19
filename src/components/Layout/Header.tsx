import IconZap from "@/assets/icons/zap.svg";
import logo from "@/assets/logo-text.png";
import CONFIG from "@/config";
import { PARAM_AUTH_SIGNOUT } from "@/graphql/authHook";
import { useMeQuery } from "@/graphql/gql.gen";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import {
  IconBook,
  IconCalendarEvent,
  IconCoin,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useCallback } from "react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { useCheckoutContext } from "../Checkout";

const Tab: FC<{ href: string; title: string; icon: ReactNode }> = ({
  href,
  title,
  icon,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "flex rounded-full px-4 py-2 font-medium transition-colors focus:bg-surface-2",
        isActive
          ? "bg-surface-2 text-on-secondary-container"
          : "text-on-surface-variant"
      )}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </Link>
  );
};

const Tabs: FC = () => {
  return (
    <div className="hidden items-center space-x-4 md:flex">
      <Tab icon={<IconSearch />} href="/" title="Browse" />
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

  const { bookCopies } = useCheckoutContext();

  if (data?.me) {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex h-10 items-center rounded-full bg-surface-variant px-4 text-secondary">
          <IconCoin />
          <span className="ml-1 font-bold">{data.me.credit}</span>
        </div>
        <button
          onClick={() => router.push("/checkout")}
          className="flex h-10 items-center rounded-full bg-surface-variant px-4 text-secondary"
        >
          <IconShoppingCart />
          <span className="ml-1 font-bold">{bookCopies.length}</span>
        </button>
        <Menu>
          <MenuButton>
            <Avatar
              size={10}
              src={data.me.profilePicture}
              username={data.me.name}
            />
          </MenuButton>
          <MenuList>
            <MenuItem onSelect={() => router.push(`/user/${data.me!.id}`)}>
              Profile
            </MenuItem>
            <MenuItem onSelect={() => router.push("/my-invoices")}>
              Invoices
            </MenuItem>
            <MenuItem onSelect={() => router.push("/my-tradeins")}>
              Tradeins
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
      <div className="fixed top-0 z-20 flex h-16 w-full items-center justify-between space-x-2 bg-surface px-4 md:px-8">
        <Link href="/" className="w-36 flex-none lg:w-48">
          <Image src={logo} alt="Logo" />
        </Link>
        <Tabs />
        <div className="flex w-48 items-center justify-end">
          <Auth />
        </div>
      </div>
      <div className="h-16" />
    </>
  );
};

export default Header;
