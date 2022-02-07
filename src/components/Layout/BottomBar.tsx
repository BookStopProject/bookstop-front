import IconZap from "@/assets/icons/zap.svg";
import { IconBook, IconCalendarEvent, IconSearch } from "@tabler/icons";
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
          "flex-1 text-center",
          isActive ? "text-on-secondary-container" : "text-on-surface-variant"
        )}
      >
        <span
          className={clsx(
            "flex justify-center items-center mx-auto w-16 h-8 rounded-full transition-colors",
            isActive && "bg-secondary-container"
          )}
        >
          {icon}
        </span>
        <p className="mt-1 text-sm font-medium">{title}</p>
      </a>
    </Link>
  );
};

const BottomBar: FC = () => {
  return (
    <div className="flex md:hidden fixed bottom-0 z-20 items-center w-full h-20 bg-surface">
      <Tab icon={<IconSearch size={21} />} href="/" title="Browse" />
      <Tab icon={<IconZap size={21} />} href="/feed" title="Feed" />
      <Tab
        icon={<IconCalendarEvent size={21} />}
        href="/events"
        title="Events"
      />
      <Tab icon={<IconBook size={21} />} href="/my-library" title="Library" />
    </div>
  );
};

export default BottomBar;

export const BottomBarPlaceholder: FC = () => {
  return <div className="md:hidden w-full h-20" />;
};
