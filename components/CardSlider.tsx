"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export type SliderCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export default function CardSlider({ cards }: { cards: SliderCard[] }) {
  return (
    <div className="card-slider">
      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        spaceBetween={24}
        grabCursor
        pagination={{ clickable: true }}
        className="!overflow-visible"
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.title}
            className="!w-[78vw] flex-shrink-0 sm:!w-[340px] md:!w-[415px]"
          >
            <div className="relative aspect-[415/650] overflow-hidden rounded-aspire-lg bg-dark-green">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="415px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(18,18,18,0.92) 0%, rgba(18,18,18,0.5) 22%, rgba(18,18,18,0) 45%)",
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="text-white" style={{ fontSize: "30px" }}>{card.title}</h3>
                <p className="mt-2 text-sm text-grey-2">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .card-slider .swiper-pagination {
          position: static;
          margin-top: 2rem;
        }
        .card-slider .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.3;
          width: 6px;
          height: 6px;
        }
        .card-slider .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
