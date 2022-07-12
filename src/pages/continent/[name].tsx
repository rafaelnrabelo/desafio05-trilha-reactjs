import { Text, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Data from "../../../data.json";
import Cities from "../../components/Cities";
import Info from "../../components/Info";

const Continent: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const continent = Data.continents.find((c) => c.slug === name);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <div>
      <Head>
        <title>{continent?.name} | WorldTrip</title>
      </Head>

      <main style={{ paddingBottom: 40 }}>
        <Flex
          backgroundImage={`url(${continent?.banner})`}
          backgroundSize="cover"
          backgroundPosition="center"
          w="100%"
          h={isWideVersion ? "500px" : "150px"}
          align={isWideVersion ? "flex-end" : "center"}
          justify={isWideVersion ? "inherit" : "center"}
          px={isWideVersion ? "140px" : "0"}
          py={isWideVersion ? "60px" : "0"}
        >
          <Heading color="light.500" fontSize={isWideVersion ? "48px" : "28px"}>
            {continent?.name}
          </Heading>
        </Flex>

        <Flex align="center" justify="center">
          <Flex maxW={1160} w="100%" mx="16px" flexDir="column">
            <Flex
              my={isWideVersion ? "80px" : "30px"}
              w="100%"
              justify="space-between"
              flexDir={isWideVersion ? "row" : "column"}
            >
              <Text
                width={isWideVersion ? "50%" : "100%"}
                fontSize={isWideVersion ? "20px" : "14px"}
                lineHeight={isWideVersion ? "36px" : "21px"}
                textAlign="justify"
              >
                {continent?.description}
              </Text>
              <Flex
                width={isWideVersion ? "50%" : "100%"}
                alignItems="center"
                pl={isWideVersion ? "0" : "6px"}
                pr={isWideVersion ? "0" : "6px"}
                mt={isWideVersion ? "0" : "20px"}
              >
                <Info
                  value={continent?.numberOfCountries}
                  label="países"
                  isWideVersion={isWideVersion}
                />
                <Info
                  value={continent?.numberOfLanguages}
                  label="línguas"
                  isWideVersion={isWideVersion}
                />
                <Info
                  value={continent?.mostVisitedQuantity}
                  label="cidades+100"
                  isWideVersion={isWideVersion}
                  tooltip="Fazem parte das 100 cidades mais visitadas do mundo"
                />
              </Flex>
            </Flex>
            <Cities cities={continent?.mostPopularCities} />
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default Continent;
