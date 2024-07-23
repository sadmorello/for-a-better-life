import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
import React from "react"
import ScheduleForm from "./FormCreate"

interface ModalCreateScheduleProps {
    fetchSchedules: () => void;
}

const ModalCreateSchedule: React.FC<ModalCreateScheduleProps> = ({ fetchSchedules }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

    return (
        <>
            <Button colorScheme='green' size='lg' onClick={onOpen}>Novo Agendamento</Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Criar Agendamento</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <ScheduleForm onClose={onClose} fetchSchedules={fetchSchedules} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalCreateSchedule;