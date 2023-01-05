import { Heading, HStack, Image, Text, VStack, Card as Gad, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Gad backgroundColor="white">
        <Image
          src={imageSrc}
          alt={title}
          borderRadius='lg'
        />
        <CardBody>
        <Text size='md' color='black' fontWeight="bold" py="3px">{title}</Text>
        <Text color='blackAlpha.700'>
          {description}
        </Text>
        <HStack mt='1' spacing='3' color="black">
          <Text fontSize='sm'>
            see more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
        </CardBody>
    </Gad>
  );
};

export default Card;
