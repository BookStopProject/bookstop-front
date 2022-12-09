import { Modal } from "@/components/Modal";
import { PageTitle } from "@/components/Typography";
import type { Invoice } from "@/graphql/gql.gen";
import { useMeInvoicesQuery } from "@/graphql/gql.gen";
import { IconCoin, IconShoppingCart } from "@tabler/icons";
import type { FC } from "react";
import { useState } from "react";

const MyInvoiceModal: FC<{
  invoice: null | Invoice;
  onDismiss(): void;
}> = ({ invoice, onDismiss }) => {
  return (
    <Modal
      visible={!!invoice}
      title={`Invoice No ${invoice?.id}`}
      onDismiss={onDismiss}
    >
      {invoice &&
        invoice.entries.map((entry) => (
          <div
            key={invoice.id}
            className="flex overflow-hidden relative p-4 py-6 px-8 text-on-surface-variant bg-surface-variant rounded-lg"
          >
            <div className="flex flex-1">
              <img
                src={entry.bookCopy.book.imageUrl || "/images/book-default.svg"}
                alt={`Title: ${entry.bookCopy.book.title}, Author: ${entry.bookCopy.book.author?.name}`}
                className="object-cover mr-4 h-24 rounded-lg"
              />
              <div>
                <p className="font-medium leading-tight text-on-surface line-clamp-2">
                  {entry.bookCopy.book.title}
                </p>
                <p className="mt-1 mb-2 text-sm leading-tight text-on-surface-variant truncate">
                  {entry.bookCopy.book.author?.name}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-on-surface-variant">
                {entry.bookCopy.condition}
              </p>
              <p className="text-lg font-bold" style={{ color: "#009688" }}>
                {entry.credit}
              </p>
            </div>
          </div>
        ))}
      <div className="mt-4 font-bold">
        Total credits:{" "}
        {invoice?.entries.reduce((prev, curr) => prev + curr.credit, 0)}
      </div>
    </Modal>
  );
};

const MyInvoicesPage = () => {
  const [{ data }] = useMeInvoicesQuery();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  return (
    <>
      <div className="container">
        <PageTitle>My invoices</PageTitle>
        <div className="flex flex-col space-y-4">
          {data?.meInvoices.map((invoice) => (
            <button
              className="flex justify-between items-center p-4 space-x-4 bg-surface-variant rounded-lg"
              key={invoice.id}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              /* @ts-ignore */
              onClick={() => setInvoice(invoice)}
            >
              <div className="flex flex-col space-y-2 w-full">
                <div className="flex items-center space-x-4 w-full">
                  <div className="text-lg font-semibold text-on-surface">
                    Invoice No {invoice.id}
                  </div>
                  <div className="py-1 px-2 text-xs">
                    {invoice.creationTime.toLocaleString()}
                  </div>
                  <div className="flex-1" />
                  <div className="flex items-center space-x-2">
                    <IconShoppingCart />
                    <span>{invoice.entries.length}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IconCoin />
                    <span>
                      {invoice.entries.reduce(
                        (prev, curr) => prev + curr.credit,
                        0
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <MyInvoiceModal
        invoice={invoice}
        onDismiss={() => {
          setInvoice(null);
        }}
      />
    </>
  );
};

export default MyInvoicesPage;
