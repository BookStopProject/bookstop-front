import IconZap from "@/assets/icons/zap.svg";
import { IconBook, IconCalendarEvent, IconSearch } from "@tabler/icons-react";
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
    <Link
      href={href}
      className={clsx(
        "flex-1 text-center",
        isActive ? "text-on-secondary-container" : "text-on-surface-variant"
      )}
    >
      <span
        className={clsx(
          "mx-auto flex h-8 w-16 items-center justify-center rounded-full transition-colors",
          isActive && "bg-secondary-container"
        )}
      >
        {icon}
      </span>
      <p className="mt-1 text-sm font-medium">{title}</p>
    </Link>
  );
};

const BottomBar: FC = () => {
  return (
    <div className="fixed bottom-0 z-20 flex h-20 w-full items-center bg-surface md:hidden">
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
  return <div className="h-20 w-full md:hidden" />;
};
