import {getInstance} from "../init";
import {RytrLanguage, RytrTones} from "../types/Common";

export async function getTones(): Promise<RytrTones[]> {
    const instance = getInstance();
    const tones = await instance.get('/tones');

    if(!tones.data.success) {
        throw new Error('Unable to fetch tones \n' + tones.data);
    }

    return tones.data.data
}