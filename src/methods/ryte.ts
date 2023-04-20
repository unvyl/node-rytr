import {getInstance} from "../init";
import {RytrRyteInput, RytrRyteOutput} from "../types/Common";

export async function ryte(payload: RytrRyteInput): Promise<RytrRyteOutput[]> {
    const instance = getInstance();
    const rytten = await instance.post('/ryte', payload);

    if(!rytten.data.success) {
        throw new Error('Unable to ryte \n' + JSON.stringify(rytten.data));
    }

    return rytten.data.data
}