import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white text-ink">
      <div className="content-wrap section-pad">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium text-ink">
              Business account
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
              The online business account for fast-growing businesses
            </h1>
            <p className="max-w-lg text-lg text-grey-1">
              $0 monthly fees, $0 initial deposit, $0 minimum balance. 100%
              online application. Open your free business account today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#get-started"
                className="w-full rounded-aspire bg-ink px-6 py-3 text-center font-medium text-mint transition-colors hover:bg-dark-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto"
              >
                Get started
              </a>
              <a
                href="#talk-to-sales"
                className="w-full rounded-aspire border border-grey-3 px-6 py-3 text-center font-medium text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto"
              >
                Talk to sales
              </a>
            </div>
            <p className="text-sm text-grey-1">
              Funds safeguarded at DBS and other Tier-1 banks
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-aspire-lg">
              <Image
                src="https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69dcc3e6818bbb0054cc57db_2f033246e605f006b93e972b0ea62943_Frame%201707481051.webp"
                alt="Aspire business account product preview"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 448px, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
