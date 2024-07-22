import { useState } from 'react';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { createSchedule } from '@/app/api/Schedule/Create';


const ScheduleForm = ({ onClose }: { onClose: () => void }) => {

    const [client, setClient] = useState('Murilo');
    const [supplier, setSupplier] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const schedule = { client, supplier, date };
            await createSchedule(schedule);
            alert('Agendamento criado com sucesso!');
            onClose();
        } catch (error) {
            setError('Erro ao criar agendamento.');
        } finally {
            setLoading(false);
        }
    };

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
            {error && <p>{error}</p>}
        </form>
    );
};

export default ScheduleForm;
