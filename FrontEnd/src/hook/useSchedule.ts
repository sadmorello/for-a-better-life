import api from "@/services/api";
import { useCallback, useEffect, useState } from "react"

interface Schedule {
    id: number,
    client: string,
    supplier: string,
    date: string
}

const useSchedule = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSchedules = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.get('/schedule');
            setSchedules(response.data);
        } catch (error) {
            setError('Erro ao buscar agendamentos.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSchedules();
    }, [fetchSchedules]);

    return { schedules, loading, error, fetchSchedules };

}

export default useSchedule;