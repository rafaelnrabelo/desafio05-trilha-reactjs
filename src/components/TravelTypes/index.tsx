import { Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import TypeCard from "./TypeCard";

const TravelTypes: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center" justify="center">
      <Flex
        maxW={1160}
        py={isWideVersion ? "80px" : "36px"}
        mx="16px"
        w="100%"
        justify={isWideVersion ? "space-between" : "center"}
        align="center"
        flexWrap={isWideVersion ? "nowrap" : "wrap"}
      >
        <TypeCard
          text="vida noturna"
          imageSrc="/images/cocktail.png"
          mobilePosition="start"
        />
        <TypeCard
          text="praia"
          imageSrc="/images/surf.png"
          mobilePosition="end"
        />
        <TypeCard
          text="moderno"
          imageSrc="/images/building.png"
          mobilePosition="start"
        />
        <TypeCard
          text="clássico"
          imageSrc="/images/museum.png"
          mobilePosition="end"
        />
        <TypeCard
          text="e mais..."
          imageSrc="/images/earth.png"
          mobilePosition="center"
        />
      </Flex>
    </Flex>
  );
};

export default TravelTypes;
