import { Flex, HStack, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface TypeCardProps {
  text: string;
  imageSrc: string;
  mobilePosition: "center" | "start" | "end";
}

const TypeCard: React.FC<TypeCardProps> = ({
  imageSrc,
  text,
  mobilePosition,
}) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      align="center"
      justify={isWideVersion ? "center" : mobilePosition}
      flexDir={isWideVersion ? "column" : "row"}
      width={["45%", "35%", "auto"]}
      h={isWideVersion ? "auto" : "50px"}
      px={isWideVersion ? "0" : "2px"}
    >
      {isWideVersion && <Image src={imageSrc} width={85} height={85} />}
      {!isWideVersion && (
        <Icon viewBox="0 0 200 200" color="highlight.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      )}
      <Text
        color="dark.700"
        fontWeight={600}
        fontSize={isWideVersion ? "24px" : "18px"}
        lineHeight="36px"
        mt={isWideVersion ? "24px" : 0}
        ml={isWideVersion ? 0 : "1rem"}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default TypeCard;
