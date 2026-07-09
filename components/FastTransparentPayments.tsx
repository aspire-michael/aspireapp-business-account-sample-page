import Image from "next/image";

const points = [
  {
    title: "Versatility",
    description:
      "Send and receive funds in 30+ currencies with low, transparent fees",
  },
  {
    title: "Transparency",
    description:
      "Avoid hidden charges with all costs and FX rates shown upfront",
  },
];

export default function FastTransparentPayments() {
  return (
    <section className="bg-white">
      <div className="content-wrap section-pad grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl leading-snug sm:text-4xl">
            Fast and transparent international payments
          </h2>

          <div className="flex flex-col gap-5">
            {points.map((point) => (
              <div key={point.title}>
                <h3 className="mb-1 text-base font-semibold">
                  {point.title}
                </h3>
                <p className="text-sm text-grey-1">{point.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#get-started"
            className="w-full rounded-aspire bg-ink px-6 py-3 text-center font-medium text-mint transition-colors hover:bg-dark-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-fit"
          >
            Start with Premium for best FX Rates
          </a>
        </div>

        <div className="relative aspect-[4/3.1] w-full overflow-hidden rounded-aspire-lg">
          <Image
            src="https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69d46134cbf7912a18c1b16f_905300090756923dec9ca7839f7b7d4d_business-account-03.webp"
            alt="Aspire international transfer summary"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
