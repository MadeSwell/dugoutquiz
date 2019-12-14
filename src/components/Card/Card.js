import React from "react";
import { Box, Image, Badge } from "@chakra-ui/core";

export const Card = ({ imageUrl, imageAlt, outs, runners, title, tryCount }) => {
  const property = {
    imageUrl: imageUrl || "https://bit.ly/2Z4KKcF",
    imageAlt: imageAlt || "Baseball",
    outs: outs || 2,
    runners: runners || 2,
    title: title || "Baseball Quiz",
    tryCount: tryCount || 34
  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" minW="sm" mr="4" mb="4">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.outs} outs &bull; {property.runners} runners
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {property.title}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.tryCount} tries
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
