import React from "react";
import PaymentsTable from "../../components/PaymentsTable";
import { Flex } from "@chakra-ui/react";


export default function Payments() {
  return (
    <Flex justifyContent="center">
      <PaymentsTable />
    </Flex>
  );
}
