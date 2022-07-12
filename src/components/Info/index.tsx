import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface InfoProps {
  label: string;
  value?: number;
  isWideVersion?: boolean;
  tooltip?: string;
}

const Info: React.FC<InfoProps> = ({
  value,
  label,
  isWideVersion,
  tooltip,
}) => {
  return (
    <Flex
      flexDirection="column"
      align={isWideVersion ? "center" : "flex-start"}
      w="100%"
    >
      <Text
        fontWeight="600"
        fontSize={isWideVersion ? "48px" : "24px"}
        color="highlight.500"
        fontStyle="normal"
      >
        {value}
      </Text>
      <Flex flexDirection="row" align={tooltip ? "center" : "inherit"}>
        <Text
          fontWeight={isWideVersion ? "600" : "400"}
          fontSize={isWideVersion ? "24px" : "18px"}
          color="gray.600"
          fontStyle="normal"
        >
          {label}
        </Text>
        {!!tooltip && (
          <Tooltip label={tooltip} bg="gray.600" color="gray.50">
            <div>
              <Icon
                as={FiInfo}
                fontSize={isWideVersion ? "16px" : "10px"}
                opacity="0.5"
                ml="6px"
              />
            </div>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};

export default Info;
