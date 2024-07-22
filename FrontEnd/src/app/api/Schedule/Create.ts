import api from "@/services/api";

interface Schedule {
    client: string
    supplier: string
    date: string
}

export const createSchedule = async (scheduling: Schedule) => {
    try {
        const response = await api.post('/schedule', scheduling);
        return response.data;
    } catch (error) {
        throw error;
    }
};
