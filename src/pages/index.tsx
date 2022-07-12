import { Divider, Heading, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import Banner from "../components/Banner";
import ContinentSlider from "../components/ContinentSlider";
import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <div>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <main style={{ paddingBottom: 40 }}>
        <Banner />
        <TravelTypes />
        <Divider
          w={isWideVersion ? "90px" : "60px"}
          mx="auto"
          borderColor="dark.700"
          borderBottomWidth={2}
        />
        <Heading
          fontWeight={500}
          fontSize={isWideVersion ? "36px" : "20px"}
          lineHeight={isWideVersion ? "54px" : "30px"}
          textAlign="center"
          mt={isWideVersion ? "52px" : "24px"}
          mb={isWideVersion ? "52px" : "20px"}
          color="dark.700"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
        <ContinentSlider />
      </main>
    </div>
  );
};

export default Home;
