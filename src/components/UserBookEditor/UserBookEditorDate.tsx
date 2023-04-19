import type { Dispatch, FC, SetStateAction } from "react";
import { useMemo } from "react";
import { Input } from "../Input";

interface UserBookEditorDateProps {
  start: string | undefined;
  setStart: Dispatch<SetStateAction<string | undefined>>;
  end: string | undefined;
  setEnd: Dispatch<SetStateAction<string | undefined>>;
  bookName: string;
}

const UserBookEditorDate: FC<UserBookEditorDateProps> = ({
  start,
  setStart,
  end,
  setEnd,
  bookName,
}) => {
  const todayDate = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const readState = useMemo(() => {
    if (!start || todayDate < start) {
      return -1; // would like to read
    }
    if (!end || todayDate < end) {
      return 0; // reading
    }
    return 1;
  }, [start, end, todayDate]);

  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <Input
          value={start || ""}
          onChange={(e) => setStart(e.target.value)}
          htmlType="date"
          label="Start reading"
          max={end}
          className="flex-1"
        />
        <button className="mt-4 p-2" onClick={() => setStart("")}>
          Clear <span className="sr-only">start date</span>
        </button>
      </div>
      <div className="flex items-center">
        <Input
          value={end || ""}
          onChange={(e) => setEnd(e.target.value)}
          min={start}
          htmlType="date"
          label="Finish reading"
          className="flex-1"
        />
        <button className="mt-4 p-2" onClick={() => setEnd("")}>
          Clear <span className="sr-only">end date</span>
        </button>
      </div>
      <small>
        You {readState === -1 && "intend to read"}
        {readState === 0 && "are currently reading"}
        {readState === 1 && "have read"}{" "}
        <i className="text-primary">{bookName}</i>
      </small>
    </div>
  );
};

export default UserBookEditorDate;
