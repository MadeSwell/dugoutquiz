import React, { useEffect } from "react";
// import Unsplash from "unsplash-js";
import { Text } from "@chakra-ui/core";
import { Card } from "../components/Card/Card";
import { Layout } from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import secondBase from "../img/second-base.jpg";

export default function Home() {
  // const unsplash = new Unsplash({
  //   accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  //   secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY,
  //   callbackUrl: "dugoutquiz.com"
  // });

  useEffect(() => {
    // unsplash.search.photos("dogs", 1, 10, { orientation: "portrait" }).then(json => {
    //   console.log(json);
    // });
  });

  return (
    <Layout>
      <Text fontSize="2xl" style={{ marginBottom: 30 }}>
        Choose a quiz!
      </Text>
      <Link to="/quiz/1/second-basemen-scenarios">
        <Card imageUrl={secondBase} title="Second Basemen Scenarios" />
      </Link>
    </Layout>
  );
}
