import { useCallback, useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const present = useCallback(() => setVisible(true), []);
  const dismiss = useCallback(() => setVisible(false), []);
  return [visible, present, dismiss] as const;
};

export default useModal;
