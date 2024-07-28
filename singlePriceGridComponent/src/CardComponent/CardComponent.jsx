/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import {
  Card,
  Heading,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import CreateTag from "../CreateTag/CreateApp";
import "./cardComponent.css";

const stylesCardComponent = {
  borderRadius: 0,
  display: "flex",
  flexBasis: ["100%", null, "50%", null],
  flexFlow: "column wrap",
  p: ["1.5625rem", null, "2.55rem"],
  _first: { bg: "white", flexBasis: ["100%"] },
  _last: { bg: "cyan.300" },
};

const stylesHeading_h1 = {
  color: "white",
  fontSize: "1.15rem",
  fontWeight: "100",
  letterSpacing: "0.06rem",
};

const stylesHeading_h2 = {
  mt: ["1.875rem", null, "1.25rem"],
  fontSize: "0.9rem",
  color: "gray.300",
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
};

const styleText = {
  fontSize: "0.875rem",
  lineHeight: "1.5625rem",
  color: "gray.100",
  mt: ["1.875rem", null, "1.25rem"],
};

const stylesButton = {
  borderRadius: "0.3125rem",
  boxShadow: "lg",
  bg: "yellow.200",
  color: "white",
  p: ["1rem", 0],
  fontSize: "1rem",
  mt: ["1.875rem", null, "1.25rem"],
  _hover: { bg: "yellow.100" },
  width: "100%",
};

export default function CardComponent({ title, subtitle, text, buttonText }) {
  return (
    <>
      <Card {...stylesCardComponent} className="card">
        <CardHeader p="0">
          <Heading as="h1" {...stylesHeading_h1} className="card-title">
            {title}
          </Heading>
          {subtitle && (
            <Heading as="h2" {...stylesHeading_h2} className="card-subtitle">
              {<CreateTag value={subtitle} />}
            </Heading>
          )}
        </CardHeader>
        <CardBody p="0">
          <Text {...styleText} className="card-text">
            {<CreateTag value={text} />}
          </Text>
        </CardBody>
        {buttonText && (
          <CardFooter p="0">
            <Button {...stylesButton} className="card-button">
              {buttonText}
            </Button>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
