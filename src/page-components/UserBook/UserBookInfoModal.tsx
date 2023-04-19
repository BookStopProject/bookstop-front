import { Modal } from "@/components/Modal";
import type { UserBook } from "@/graphql/gql.gen";
import type { FC } from "react";
import QRCode from "react-qr-code";

interface UserBookInfoModalProps {
  userBook: UserBook;
  visible: boolean;
  onDismiss(): void;
}

const UserBookInfoModal: FC<UserBookInfoModalProps> = ({
  userBook,
  visible,
  onDismiss,
}) => {
  return (
    <Modal
      title={`${userBook.user.name}'s ${userBook.book.title}`}
      visible={visible}
      onDismiss={onDismiss}
    >
      <QRCode
        className="mx-auto"
        width="100%"
        height="100%"
        size={48 * 4}
        value={userBook.id}
      />
      <p className="mt-8 text-center text-sm leading-tight">
        Present this QR Code to our representative to trade in your book
      </p>
    </Modal>
  );
};

export default UserBookInfoModal;
