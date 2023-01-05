import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="white">
        <Image
          src={imageSrc}
          alt={title}
          borderRadius='lg'
        />
        <Text size='md' color='black'>{title}</Text>
        <Text color='blackAlpha.500'>
          {description}
        </Text>
        <HStack mt='1' spacing='3' color="black">
          <Text fontSize='sm'>
            see more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
    </VStack>
  );
};

export default Card;
