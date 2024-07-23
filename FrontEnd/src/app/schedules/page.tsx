'use client'

import ModalCreateSchedule from "@/components/Schedule/ModalCreate";
import useSchedule from "@/hook/useSchedule";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Text, Card, CardBody, CardFooter, Flex, Heading, Stack, Spacer, Spinner, Box, List, ListItem, Divider } from "@chakra-ui/react";
import React from "react";

export default function Schedules() {
    const { schedules, loading, error, fetchSchedules } = useSchedule();    

    if (loading) {
        return <Spinner size="xl" />;
    }

    if (error) {
        return <Text color="red.500">{error}</Text>;
    }

    return (
        <>
            <Flex p={5}>
                <Heading>Agendamentos</Heading>
                <Spacer />
                <ModalCreateSchedule fetchSchedules={fetchSchedules} />
            </Flex>
            <Divider />
            <Box p={4}>
                {schedules.map(schedule => (
                    <Card variant='outline' key={schedule.id} m={4} bg='blue.600' color='white'>
                        <Stack>
                            <CardBody>
                                <Heading size='md'>{schedule.supplier}</Heading>

                                <Box marginTop={3}>
                                    <List>
                                        <ListItem>
                                            <Text fontSize='lg'> <b>Data:</b> {schedule.date}</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text fontSize='lg'><b>Hora:</b> {schedule.date}</Text>
                                        </ListItem>
                                    </List>
                                </Box>
                            </CardBody>

                        </Stack>
                    </Card>
                ))}
            </Box>
        </>
    );
}
