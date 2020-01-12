import axios from 'axios';

import { IWindow } from '../interfaces/IWindow';

const customWindow = {
    config:{
        baseUrl: 'http://localhost:9000'
    }
};

if (!customWindow || !customWindow.config || !customWindow.config.baseUrl) {
    throw new Error('Configured base url required to create an axios connection');
}

export const axiosInstance = axios.create({
    baseURL: customWindow.config.baseUrl,
});
