import React, { useEffect } from "react";
// import Unsplash from "unsplash-js";
import { Text, Flex } from "@chakra-ui/core";
import { Card } from "../components/Card/Card";
import { Layout } from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import secondBase from "../img/second-base.jpg";

export default function Home() {
  return (
    <Layout>
      <Text fontSize="2xl" style={{ marginBottom: 30 }}>
        Choose a quiz!
      </Text>
      <Flex wrap="wrap">
        <Link to="/quiz/1/second-basemen-scenarios">
          <Card imageUrl={secondBase} title="Second Basemen Scenarios" />
        </Link>
        <Link to="/quiz/2/shortstop-scenarios">
          <Card imageUrl={secondBase} title="Second Basemen Scenarios" />
        </Link>
      </Flex>
    </Layout>
  );
}
