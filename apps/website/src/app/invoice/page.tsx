import { CtaLink } from "@/components/cta-link";
import type { Metadata } from "next";
import Image from "next/image";
import Clients from "public/product-clients.png";
import Invoice from "public/product-invoice.jpg";
import Pdf from "public/product-pdf.png";

export const metadata: Metadata = {
  title: "Invoice",
  description:
    "Create web-based invoices in seconds. Have an easy overview of all your invoices and see your outstanding balance.",
};

export default function Page() {
  return (
    <div className="container mb-52">
      <div className="mb-40">
        <div className="mt-24 text-center">
          <h1 className="mt-24 font-medium text-center text-[75px] md:text-[170px] mb-2 leading-none text-stroke">
            Seamless
          </h1>
        </div>

        <h3 className="font-medium text-center text-[75px] md:text-[170px] mb-2 leading-none">
          Invoice
        </h3>

        <div className="flex items-center flex-col text-center relative">
          <p className="text-lg mt-4 max-w-[600px]">
            Create web-based invoices in seconds. Have an easy overview of all
            your invoices and see your outstanding balance.
          </p>

          <CtaLink
            text="Send your first invoice in seconds"
            className="mt-12 opacity-100 text-center"
          />
        </div>
      </div>

      <Image src={Invoice} quality={90} alt="Invoice" />

      <div className="flex items-center flex-col text-center relative mt-28">
        <div className="max-w-[600px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            Fast and easy
          </h4>
          <p className="text-[#878787] text-sm">
            Create web-based invoices quickly, save client information, and make
            it even faster the next time. Create tailored invoices with payment
            terms, tax rules, and discounts. Simply paste in how you want to be
            paid and send it.
          </p>
        </div>

        <Image
          src={Clients}
          quality={90}
          alt="Clients"
          className="mt-10 max-w-[934px] w-full"
        />

        <div className="mt-32 max-w-[600px]">
          <h4 className="font-medium text-xl md:text-2xl mb-4">
            Web invoice & PDF
          </h4>
          <p className="text-[#878787] text-sm mb-10">
            Easily change your invoices on the fly instead of sending an
            uneditable PDF. Share the link with your client and get paid.
          </p>
        </div>

        <Image
          src={Pdf}
          quality={90}
          alt="Pdf"
          className="mt-10 max-w-[536px] w-full"
        />
      </div>
    </div>
  );
}
