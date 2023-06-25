import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="x1"
    >
      <Image src={imageSrc} alt={title} borderRadius="x1" />

      <VStack spacing="4" alignItems="flex-start" p="5">
        <Heading>{title}</Heading>
        <Text color="#647848b" fontSize="lg">{description}</Text>
        <HStack >
          <p>See more </p> 
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
