import { Modal } from "@/components/Modal";
import { PageTitle } from "@/components/Typography";
import type { Invoice } from "@/graphql/gql.gen";
import { useMeInvoicesQuery } from "@/graphql/gql.gen";
import { IconCoin, IconShoppingCart } from "@tabler/icons-react";
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
            className="relative flex overflow-hidden rounded-lg bg-surface-variant p-4 px-8 py-6 text-on-surface-variant"
          >
            <div className="flex flex-1">
              <img
                src={entry.bookCopy.book.imageUrl || "/images/book-default.svg"}
                alt={`Title: ${entry.bookCopy.book.title}, Author: ${entry.bookCopy.book.author?.name}`}
                className="mr-4 h-24 rounded-lg object-cover"
              />
              <div>
                <p className="line-clamp-2 font-medium leading-tight text-on-surface">
                  {entry.bookCopy.book.title}
                </p>
                <p className="mb-2 mt-1 truncate text-sm leading-tight text-on-surface-variant">
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
              className="flex items-center justify-between space-x-4 rounded-lg bg-surface-variant p-4"
              key={invoice.id}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              /* @ts-ignore */
              onClick={() => setInvoice(invoice)}
            >
              <div className="flex w-full flex-col space-y-2">
                <div className="flex w-full items-center space-x-4">
                  <div className="text-lg font-semibold text-on-surface">
                    Invoice No {invoice.id}
                  </div>
                  <div className="px-2 py-1 text-xs">
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
