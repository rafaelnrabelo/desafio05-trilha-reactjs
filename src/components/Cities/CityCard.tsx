import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface City {
  city: string;
  country: string;
  initials: string;
  image: string;
}

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <Flex w="256px" h="280px" flexDir="column">
      <Image
        w="100%"
        height="174px"
        src={city.image}
        borderTopLeftRadius="4px"
        borderTopRightRadius="4px"
      />
      <Flex
        borderColor="highlight.500"
        borderBottomWidth="1px"
        borderLeftWidth="1px"
        borderRightWidth="1px"
        h="100%"
        borderBottomLeftRadius="4px"
        borderBottomRightRadius="4px"
        align="center"
        justify="space-between"
        px="20px"
      >
        <Flex flexDir="column" align="center">
          <Heading fontWeight={600} color="dark.700" fontSize="20px">
            {city.city}
          </Heading>
          <Text fontSize="16px" fontWeight={500} mt="10px" color="dark.500">
            {city.country}
          </Text>
        </Flex>
        <ReactCountryFlag
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          aria-label={city.country}
          countryCode={city.initials}
          svg
        />
      </Flex>
    </Flex>
  );
};

export default CityCard;
