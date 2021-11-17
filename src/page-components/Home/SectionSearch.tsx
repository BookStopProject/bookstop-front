import { Input } from "@/components/Input";
import { IconSearch } from "@tabler/icons";
import { useRouter } from "next/router";
import type { FC, FormEventHandler } from "react";
import { useCallback, useRef } from "react";

const SectionSearch: FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      const query = (ref.current?.value || "").trim();
      router.push(`/search?q=${query}`);
    },
    [router]
  );
  return (
    <form className="container mb-2" onSubmit={onSubmit}>
      <Input
        ref={ref}
        placeholder="Titles, authors, or readers"
        rounded
        left={<IconSearch className="text-opacity-75 text-foreground" />}
      />
    </form>
  );
};

export default SectionSearch;
