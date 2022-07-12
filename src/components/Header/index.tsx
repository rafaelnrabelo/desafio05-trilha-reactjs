import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
// import Image from "next/image";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { asPath, back } = useRouter();
  const isNotHome = asPath !== "/";

  return (
    <Flex
      as="header"
      w="100%"
      h={isWideVersion ? "100px" : "50px"}
      align="center"
      justify="center"
    >
      {isNotHome && (
        <button
          onClick={back}
          style={{
            marginRight: "auto",
            position: "absolute",
            left: isWideVersion ? "140px" : "16px",
          }}
        >
          <Image
            src="/images/chevron-left.svg"
            alt="Voltar"
            width={isWideVersion ? "32px" : "16px"}
            height={isWideVersion ? "32px" : "16px"}
          />
        </button>
      )}
      <Image
        src="/images/logo.png"
        alt="ig.news"
        width="100%"
        height={isWideVersion ? 46 : 21}
        objectFit="contain"
      />
    </Flex>
  );
};

export default Header;
