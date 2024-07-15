import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const PaymentsTable = () => {
    return (
        <TableContainer>
            <Table variant='simple'>                
                <Thead>
                    <Tr>
                        <Th>Data da Consulta</Th>
                        <Th isNumeric>Valor</Th>
                        <Th>Data de Pagamento</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>10/05/2024</Td>
                        <Td isNumeric>R$ 80</Td>
                        <Td>15/05/2024</Td>
                        <Td >25.4</Td>
                    </Tr>
                    <Tr bg="green.600">
                        <Td>24/05/2024</Td>
                        <Td isNumeric>R$ 80</Td>
                        <Td>Pago</Td>
                        <Td >25.4</Td>
                    </Tr>
                </Tbody>                
            </Table>
        </TableContainer>
    )
}

export default PaymentsTable;