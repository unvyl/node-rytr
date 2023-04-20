import axios, {AxiosInstance} from 'axios';
import {APIKey} from "./types/Common";

let instance;
const baseURL = 'https://api.rytr.me/v1'

export function init(key?: APIKey) {
    let apiKey = key || process.env.RYTR_API_KEY;

    if(!apiKey) {
        throw new Error('No API Key provided. Pass the API Key to the init function or set it via RYTR_API_KEY Environment Variable.')
    }

    instance = axios.create({
        baseURL,
        headers: {
            Authentication: 'Bearer ' + apiKey
        }
    });
}

export function getInstance(): AxiosInstance {
    if(!instance) {
        throw new Error('instance does not exist. Forgot to init?')
    }
    return instance;
}