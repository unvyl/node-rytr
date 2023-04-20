import {getInstance} from "../init";
import {RytrLanguage, RytrTones, RytrUseCase} from "../types/Common";

export async function getUseCases(): Promise<RytrUseCase[]> {
    const instance = getInstance();
    const useCases = await instance.get('/use-cases');

    if(!useCases.data.success) {
        throw new Error('Unable to fetch use-cases \n' + useCases.data);
    }

    return useCases.data.data
}