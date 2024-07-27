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
import CreateTag from "./CreateTag";

export default function CardComponent({ title, subtitle, text, buttonText }) {
  return (
    <>
      <Card align="center">
        <CardHeader>
          <Heading as="h1" size="md">
            {title}
          </Heading>
          {subtitle && (
            <Heading as="h2" size="md">
              {<CreateTag value={subtitle} />}
            </Heading>
          )}
        </CardHeader>
        <CardBody>
          <Text>{<CreateTag value={text} />}</Text>
        </CardBody>
        {buttonText && (
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              {buttonText}
            </Button>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
