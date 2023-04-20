import {getInstance} from "../init";
import {
    RytrCreateCustomUseCaseInput,
    RytrCreateCustomUseCaseOutput,
    RytrLanguage,
    RytrTones,
    RytrUseCase
} from "../types/Common";

export async function createCustomUseCase(payload: RytrCreateCustomUseCaseInput): Promise<RytrCreateCustomUseCaseOutput> {
    const instance = getInstance();
    const customUseCase = await instance.post('/custom-use-cases/create', payload);

    if(!customUseCase.data.success) {
        throw new Error('Unable to create custom use-case \n' + customUseCase.data);
    }

    return customUseCase.data
}