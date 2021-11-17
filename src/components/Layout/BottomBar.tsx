import IconZap from "@/assets/icons/zap.svg";
import { IconBook, IconCalendarEvent, IconHome } from "@tabler/icons";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";

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
          "flex flex-1 justify-center items-center py-3 transition-colors",
          isActive ? "text-primary-text" : "text-opacity-25 text-primary-text"
        )}
        aria-label={title}
      >
        {icon}
      </a>
    </Link>
  );
};

const BottomBar: FC = () => {
  return (
    <div className="flex fixed bottom-0 w-full h-12 bg-primary-dark md:hidden">
      <Tab icon={<IconHome />} href="/" title="Home" />
      <Tab icon={<IconZap />} href="/feed" title="Feed" />
      <Tab icon={<IconCalendarEvent />} href="/events" title="Events" />
      <Tab icon={<IconBook />} href="/my-library" title="Library" />
    </div>
  );
};

export default BottomBar;

export const BottomBarPlaceholder: FC = () => {
  return <div className="w-full h-12 md:hidden" />;
};
