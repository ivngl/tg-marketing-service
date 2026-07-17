import React from "react";
import { Container } from "@mantine/core";
import FormRegistration from "../ui/FormRegistration";

const Auth: React.FC = () => {
  return (
    <Container py={40} px="md">
      <FormRegistration />
    </Container>
  );
};

export default Auth;
