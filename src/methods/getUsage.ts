import {getInstance} from "../init";
import {RytrLanguage, RytrTones, RytrUsage, RytrUseCase} from "../types/Common";

export async function getUsage(): Promise<RytrUsage[]> {
    const instance = getInstance();
    const usage = await instance.get('/usage');

    if(!usage.data.success) {
        throw new Error('Unable to fetch usage \n' + JSON.stringify(usage.data));
    }

    return usage.data.data
}