import { Dialog } from "@reach/dialog";
import { IconX } from "@tabler/icons";
import type { FC } from "react";

interface ModalProps {
  onDismiss?(): void;
  visible: boolean;
  title: string;
}
const Modal: FC<ModalProps> = ({ onDismiss, visible, title, children }) => {
  return (
    <Dialog
      aria-label={title || "Dialog"}
      isOpen={visible}
      onDismiss={onDismiss}
    >
      <div className="flex items-center">
        <p className="flex-1 text-lg">{title}</p>
        {onDismiss && (
          <button
            className="p-2 hover:opacity-75 focus:opacity-75"
            onClick={onDismiss}
            aria-label="Close modal"
          >
            <IconX />
          </button>
        )}
      </div>
      <div className="pt-4">{children}</div>
    </Dialog>
  );
};

export default Modal;
