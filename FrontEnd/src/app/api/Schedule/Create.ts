import api from "@/services/api";

interface Schedule {
    client: string
    supplier: string
    date: string
}

export const createSchedule = (scheduling: Schedule) => {
    return api.post('/schedule', scheduling).then(response => {
        return response.data;
    }).catch(error => {
        throw error;
    })
};
