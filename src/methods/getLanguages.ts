import {getInstance} from "../init";
import {RytrLanguage} from "../types/Common";

export async function getLanguages(): Promise<RytrLanguage[]> {
    const instance = getInstance();
    const languages = await instance.get('/languages');

    if(!languages.data.success) {
        throw new Error('Unable to fetch languages \n' + languages.data);
    }

    return languages.data.data
}