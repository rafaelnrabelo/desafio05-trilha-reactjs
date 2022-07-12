import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

interface ContinentSliderProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const ContinentItem: React.FC<ContinentSliderProps> = ({
  title,
  description,
  imageSrc,
  href,
}) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Link href={href}>
      <Flex
        backgroundImage={`url(${imageSrc})`}
        backgroundSize="cover"
        backgroundPosition="center"
        align="center"
        justify="center"
        flexDir="column"
        height={isWideVersion ? "450px" : "250px"}
        w="100%"
        maxW="1240px"
        cursor="pointer"
        transition="all 0.2s"
        _hover={{ filter: "brightness(0.8)" }}
      >
        <Heading
          fontSize={isWideVersion ? "48px" : "24px"}
          lineHeight={isWideVersion ? "72px" : "36px"}
          fontWeight={700}
          color="light.500"
        >
          {title}
        </Heading>
        <Text
          fontSize={isWideVersion ? "24px" : "14px"}
          lineHeight={isWideVersion ? "36px" : "21px"}
          fontWeight={700}
          color="light.700"
          mt="16px"
        >
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default ContinentItem;
