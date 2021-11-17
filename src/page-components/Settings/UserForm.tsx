import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import type { User } from "@/graphql/gql.gen";
import { useMeUpdateMutation } from "@/graphql/gql.gen";
import type { FC, FormEventHandler } from "react";
import { useCallback, useEffect, useRef } from "react";
import toast from "react-hot-toast";

const UserForm: FC<{ user: User }> = ({ user }) => {
  const [{ fetching }, meUpdate] = useMeUpdateMutation();

  const nameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!nameRef.current || !bioRef.current) return;
    nameRef.current.value = user.name;
    bioRef.current.value = user.description || "";
  }, [user]);

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      if (!nameRef.current || !bioRef.current) return;
      const name = nameRef.current.value.trim();
      const description = bioRef.current.value.trim();
      const result = await meUpdate({
        name,
        description,
      });
      if (!result.error) {
        toast.success("Update profile successfully");
      }
    },
    [meUpdate]
  );

  return (
    <>
      <h2 className="mb-2 text-lg font-bold">My Profile</h2>
      <form onSubmit={onSubmit}>
        <Input ref={nameRef} label="Name" />
        <div className="mb-2" />
        <Input ref={bioRef} label="Bio" />
        <div className="mb-4" />
        <Button fetching={fetching} variant="filled" className="w-full">
          Save
        </Button>
      </form>
    </>
  );
};

export default UserForm;
