import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

const Banner: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      backgroundImage="url(/images/banner.png)"
      backgroundSize="cover"
      h={isWideVersion ? 335 : 163}
      align="center"
      justify="center"
    >
      <Flex maxW={1160} py="80px" mx="16px" w="100%" justify="space-between">
        <Flex direction="column" justify="center">
          <Heading
            color="light.500"
            fontWeight={500}
            fontSize={isWideVersion ? "36px" : "20px"}
            lineHeight={isWideVersion ? "54px" : "30px"}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            mt={isWideVersion ? "20px" : "8px"}
            color="light.700"
            fontWeight={400}
            fontSize={isWideVersion ? "20px" : "14px"}
            lineHeight={isWideVersion ? "30px" : "21px"}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWideVersion && (
          <Flex top="60px" transform="rotate(3deg)" position="relative">
            <Image
              src="/images/airplane.png"
              width={417}
              height={270}
              objectFit="contain"
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Banner;
