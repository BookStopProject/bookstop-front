// The attribution is this footer is required per the license (GPL-3.0)
// I spend hundred of hours into the creation of this application,
// so it would be a wonderful gesture to keep it.

// You are free to replace every other aspects such as name,
// branding, social media links, etc., however.
import CONFIG from "@/config";
import {
  IconBook,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex h-20 items-center justify-center border-t-1 border-outline border-opacity-25 px-8">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center sm:flex-row">
        <div className="flex flex-1 items-center">
          <p className="mr-4 text-sm text-on-surface-variant">
            © {CONFIG.name} 2022
          </p>
          <div className="flex items-center space-x-2">
            <a
              className="text-on-secondary-container opacity-75 hover:opacity-90"
              href={CONFIG.facebookURL || "#"}
            >
              <IconBrandFacebook />
            </a>
            <a
              className="text-on-secondary-container opacity-75 hover:opacity-90"
              href={CONFIG.twitterURL || "#"}
            >
              <IconBrandTwitter />
            </a>
            <a
              className="text-on-secondary-container opacity-75 hover:opacity-90"
              href={CONFIG.youtubeURL || "#"}
            >
              <IconBrandYoutube />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-on-surface-variant">
          <IconBook size={21} />
          <p className="font-mono text-sm">
            Powered by{" "}
            <a
              className="text-primary underline"
              href="https://github.com/BookStopProject"
            >
              BookStop
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
