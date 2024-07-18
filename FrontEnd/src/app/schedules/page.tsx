'use client'

import ModalCreateScheduling from "@/components/Scheduling/ModalCreate";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Text, Card, CardBody, CardFooter, Container, Flex, Heading, Stack, Box, Spacer } from "@chakra-ui/react";
import React from "react";

export default function Schedules() {
    return (
        <>
            <Flex p={5}>
                <Heading>Agendamentos</Heading>
                <Spacer />
                <ModalCreateScheduling />
            </Flex>

            <Card variant='outline'>
                <Stack>
                    <CardBody>
                        <Heading size='md'>Agendamento com Sabrina</Heading>
                    </CardBody>

                    <CardFooter>
                        <Text fontSize='lg'> 15/07/2024</Text>
                        <Spacer />
                        <ButtonGroup>
                            <Button colorScheme='red' size='lg'>Cancelar</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
}
