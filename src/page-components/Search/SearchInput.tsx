import { Input } from "@/components/Input";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import type { FC, FormEventHandler } from "react";
import { useCallback, useEffect, useRef } from "react";

const SearchInput: FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (ref.current) {
      ref.current.value = router.query.q as string;
    }
  }, [router.query]);
  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      const query = (ref.current?.value || "").trim();
      router.replace(`/search?q=${query}`, undefined, {
        shallow: true,
      });
    },
    [router]
  );
  return (
    <form className="container pb-8 pt-4" onSubmit={onSubmit}>
      <Input
        ref={ref}
        placeholder="Titles, authors, or readers"
        left={<IconSearch className="text-on-surface-variant" />}
      />
    </form>
  );
};

export default SearchInput;
