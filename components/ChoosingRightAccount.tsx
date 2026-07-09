import CardSlider from "./CardSlider";
import type { SliderCard } from "./CardSlider";

const criteria: SliderCard[] = [
  {
    title: "Account opening process",
    description:
      "Look for a straightforward, fully online application with minimal documentation for faster account setup.",
    image:
      "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69d4bf1544dac924e444b88d_business-account-07.webp",
    alt: "Woman completing an online business account application on her laptop",
  },
  {
    title: "Transaction charges",
    description:
      "Check for transparent and reasonable transaction fees that align with your business needs.",
    image:
      "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69d4bf1596907ba7b271e24a_business-account-08.webp",
    alt: "Transfer summary showing recipient amount, transfer fee, and total paid",
  },
  {
    title: "Fees and costs",
    description:
      "Consider accounts with low or no monthly fees, no initial deposit, and no minimum balance requirements to reduce unnecessary expenses.",
    image:
      "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69d4bf15b369e0bbbe37aac0_business-account-09.webp",
    alt: "Man reviewing his phone",
  },
  {
    title: "Additional services",
    description:
      "Look for useful features like multi-currency support, expense management, and accounting software integration to streamline operations.",
    image:
      "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8f40f9971c89854c342a2_corp-card-08.webp",
    alt: "Collage of team member avatars with country flags",
  },
];

export default function ChoosingRightAccount() {
  return (
    <section className="overflow-x-hidden bg-ink py-20">
      <div className="content-wrap px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-white sm:text-4xl">
            Choosing the right business account
          </h2>
          <p className="mt-3 text-sm text-grey-2">
            Choosing the right business account can be a daunting task,
            especially for new businesses. With so many options available,
            it&apos;s essential to consider your business needs and goals
            before making a decision. Here are some factors to consider when
            choosing a business account:
          </p>
        </div>
      </div>

      <div className="content-wrap mt-12 px-6 sm:px-10 lg:px-16">
        <CardSlider cards={criteria} />
      </div>
    </section>
  );
}
