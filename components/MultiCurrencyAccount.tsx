import Image from "next/image";
import type { ReactNode } from "react";

function Feature({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-grey-1">
      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-grey-2" />
      <span>{children}</span>
    </li>
  );
}

export default function MultiCurrencyAccount() {
  return (
    <section className="bg-white">
      <div className="content-wrap section-pad grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-aspire-lg">
            <Image
              src="https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69f98a8952b35b482cc50754_Account.webp"
              alt="Multi-currency account balances shown across SGD, USD and EUR"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 448px, 90vw"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <h2 className="text-3xl leading-snug sm:text-4xl">
            A multi-currency business account built for global business
          </h2>
          <ul className="flex flex-col gap-3">
            <Feature>
              Get your own local and international account numbers to
              receive money in multiple currencies, just like bank business
              accounts
            </Feature>
            <Feature>
              All your funds are safeguarded with DBS Bank and other Tier-1
              banks
            </Feature>
            <Feature>
              Your funds will always be available to you. Aspire never uses
              any of your funds
            </Feature>
          </ul>
        </div>
      </div>
    </section>
  );
}
