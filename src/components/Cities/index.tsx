import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import CityCard from "./CityCard";

interface City {
  city: string;
  country: string;
  initials: string;
  image: string;
}

interface InfoProps {
  cities?: City[];
}

const Cities: React.FC<InfoProps> = ({ cities = [] }) => {
  return (
    <Flex w="100%" flexDir="column">
      <Heading fontSize="36px" fontWeight={500} color="dark.700" mb="40px">
        Cidades +100
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} justifyItems="center">
        {cities.map((city) => (
          <CityCard key={city.initials} city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Cities;
