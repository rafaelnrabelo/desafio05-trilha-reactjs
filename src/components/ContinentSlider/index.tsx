import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper";
import ContinentItem from "./ContinentItem";

const ContinentSlider: React.FC = () => {
  return (
    <Flex align="center" justify="center">
      <Flex maxW={1240} mx="16px" w="100%" justify="center" align="center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Keyboard]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel
          keyboard
          loop
        >
          <SwiperSlide>
            <ContinentItem
              title="Europa"
              description="O continente mais antigo."
              imageSrc="/images/europe.png"
              href="/continent/europe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentItem
              title="América do Norte"
              description="O berço da inovação."
              imageSrc="/images/north-america.jpg"
              href="/continent/north-america"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentItem
              title="África"
              description="O berço do mundo."
              imageSrc="/images/africa.jpg"
              href="/continent/africa"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentItem
              title="Ásia"
              description="O maior continente."
              imageSrc="/images/asia.jpg"
              href="/continent/asia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentItem
              title="América do Sul"
              description="Lar das belezas"
              imageSrc="/images/south-america.jpg"
              href="/continent/south-america"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentItem
              title="Oceania"
              description="O continente das ilhas."
              imageSrc="/images/oceania.jpg"
              href="/continent/oceania"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default ContinentSlider;
