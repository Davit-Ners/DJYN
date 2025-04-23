"use client";

import Image from 'next/image';
import style from './gallerySection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GallerySection() {
  return (
    <>
      <h2 className={style.sectionTitle}>📷 Behind the Scenes</h2>
      <div className={style.galleryContainer}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <Image src="/images/img1.png" alt="Rehearsal" width={300} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/img2.jpg" alt="Studio Work" width={300} height={300} />
          </SwiperSlide>
        </Swiper>
        <p className={style.swipeHint}>Swipe →</p>
      </div>
    </>
  );
};