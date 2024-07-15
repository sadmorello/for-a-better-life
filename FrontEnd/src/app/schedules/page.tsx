import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Center, Container, Flex, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export default function Schedules() {
    return (
        <Container>
            <Flex justify='center' p={5}>
                <ButtonGroup>
                    <Button colorScheme='green'>Incluir</Button>
                    <Button colorScheme='blue'>Visualizar</Button>
                    <Button colorScheme='red'>Cancelar</Button>
                </ButtonGroup>
            </Flex>

            <TableContainer>
                <Table variant='simple'>                    
                    <Thead>
                        <Tr>
                            <Th>Numero</Th>
                            <Th>Piscologo(a)</Th>
                            <Th>Data</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Sabrina</Td>
                            <Td>15/07/2024</Td>
                        </Tr>                        
                    </Tbody>                    
                </Table>
            </TableContainer>
        </Container>
    );
}
