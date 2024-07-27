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

export default function CardComponent({ title, subtitle, text, buttonText }) {
  return (
    <>
      <Card className="card">
        <CardHeader>
          <Heading as="h1" className="card-title">
            {title}
          </Heading>
          {subtitle && (
            <Heading as="h2" className="card-subtitle">
              {<CreateTag value={subtitle} />}
            </Heading>
          )}
        </CardHeader>
        <CardBody>
          <Text className="card-text">{<CreateTag value={text} />}</Text>
        </CardBody>
        {buttonText && (
          <CardFooter>
            <Button className="card-button">{buttonText}</Button>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
