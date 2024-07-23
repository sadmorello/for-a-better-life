import { useState } from 'react';
import { Button, Input, FormControl, FormLabel, useToast, Spinner } from '@chakra-ui/react';
import { createSchedule } from '@/app/api/Schedule/Create';
import useSchedules from '@/hook/useSchedule';

interface ScheduleFormProps {
    onClose: () => void;
    fetchSchedules: () => void;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({ onClose, fetchSchedules }) => {

    const { schedules, loading, error } = useSchedules();
    const [client, setClient] = useState('Murilo');
    const [supplier, setSupplier] = useState('');
    const [date, setDate] = useState('');

    const toast = useToast();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const schedule = { client, supplier, date };

        const schedulePromise = createSchedule(schedule).then(() => {
            fetchSchedules();
            onClose();
        }).catch((error) => {
            console.error('Erro ao criar agendamento:', error);
        })

        toast.promise(schedulePromise,
            {
                success: { title: ' Sucesso', description: 'Agendamento criado com sucesso' },
                error: { title: 'Erro no Agendamento', description: 'Não foi possível criar o Agendamento' },
                loading: { title: 'Processando Agendamento', description: 'Aguarde...' },
            }
        )
    };

    if (loading) {
        return <Spinner size="xl" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl id="supplier" isRequired>
                <FormLabel>Psicologo(a)</FormLabel>
                <Input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} />
            </FormControl>
            <FormControl id="date" isRequired>
                <FormLabel>Data</FormLabel>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormControl>
            <Button type="submit" isLoading={loading} colorScheme="teal" mt={4}>
                Criar Agendamento
            </Button>
        </form>
    );
};

export default ScheduleForm;
