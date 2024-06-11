import axios from 'axios';
import { FormData } from './interFaces';

const fetchGss = async (sheetName: string): Promise<FormData> => {
    const path = `https://script.google.com/macros/s/AKfycbxyY9yE0I6E11wlf52nmglUmwJxRuuUvFFZm36EODvvhkXKCQSfJQtpGi4N8tOqMqzj/exec?sheetName=${sheetName}`;
    const response = await axios.get(path);
    return response.data;
};

export default fetchGss;
