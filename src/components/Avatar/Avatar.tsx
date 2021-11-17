import type { FC } from "react";

interface AvatarProps {
  username: string;
  src: string | null | undefined;
  size: number;
}

const Avatar: FC<AvatarProps> = ({ username, src, size }) => {
  src = undefined;
  return (
    <span
      className="flex items-center justify-center rounded-full select-none bg-background-secondary"
      style={{
        width: size * 4,
        height: size * 4,
        fontSize: size / 10 + "rem",
      }}
    >
      {src ? <img src={src} alt={username} /> : <span>{username[0]}</span>}
    </span>
  );
};

export default Avatar;