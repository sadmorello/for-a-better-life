import api from "@/services/api";

interface Scheduling {
    client: string
    supplier: string
    date: string
}

export const createScheduling = async (scheduling: Scheduling) => {
    try {
        console.log(scheduling)
        const response = await api.post('/scheduling', scheduling);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};
