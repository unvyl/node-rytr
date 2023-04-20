import {getInstance} from "../init";
import {RytrLanguage, RytrTones, RytrUseCase} from "../types/Common";

export async function getUseCaseDetail(id: string): Promise<RytrUseCase> {
    const instance = getInstance();
    const details = await instance.get('/use-cases/' + id);

    if(!details.data.success) {
        throw new Error('Unable to fetch use-case details for '+id+' \n' + details.data);
    }

    return details.data.data
}