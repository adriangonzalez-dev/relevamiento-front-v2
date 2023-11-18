import { api } from "../config/axios";
import { Incident } from "../interfaces/incident.interface";

export const getDataIncidents = async():Promise<Incident[] | null> => {
    try {
        const {data} = await api.get('/data');
        if(!data) return null;
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}