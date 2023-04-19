import type { FC } from "react";

interface AvatarProps {
  username: string;
  src: string | null | undefined;
  size: number;
}

const Avatar: FC<AvatarProps> = ({ username, src, size }) => {
  return (
    <span
      className="flex select-none items-center justify-center overflow-hidden rounded-full bg-surface"
      style={{
        width: size * 4,
        height: size * 4,
        fontSize: size / 10 + "rem",
      }}
    >
      {src ? (
        <img className="h-full w-full" src={src} alt={username} />
      ) : (
        <span>{username[0]}</span>
      )}
    </span>
  );
};

export default Avatar;
