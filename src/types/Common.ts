export type APIKey = string;

export type RytrLanguage = {
    _id: string;
    isDefault: boolean;
    name: string;
    slug: string;
    createdAt: string;
    isNew: boolean
}

export type RytrTones = {
    _id: string;
    name: string;
    slug: string;
    createdAt: string;
    isNew: boolean
}

export type RytrUseCase = {
    _id: string;
    name: string;
    slug: string;
    description: string;
    contextInputs: {
        _id: string;
        label: string;
        placeholder: string;
        keyLabel: string;
        inputType: string;
        inputMaximumCharacters: number;
        isRequired: boolean;
    }[];
    image: string;
    info: string;
    createdAt: string;
    caption: string;
    variants: number;
    key: string;
    isCustom: boolean;
    isNew: boolean
}

export type RytrRyteInput = {
    languageId: RytrLanguage['_id'],
    toneId: RytrTones['_id'],
    useCaseId: RytrUseCase['_id'],
    inputContexts: Record<RytrUseCase['contextInputs'][0]['keyLabel'], string>,
    variations: 1 | 2 | 3;
    userId: string;
    format: 'html' | 'text';
    creativityLevel: 'default' | 'none' | 'low' | 'medium' | 'high' | 'max';
}

export type RytrRyteOutput = {
    text: string;
    isUnsafe: boolean;
}

export type RytrUsage = {
    _id: string;
    units: number;
    payload: (RytrRyteInput & {
        outputs: RytrRyteOutput[]
    }),
    createdAt: string;
}

export type RytrCreateCustomUseCaseInput = {
    name: string;
    inputName: string;
    inputPlaceholder: string;
    outputExample: string
}

export type RytrCreateCustomUseCaseOutput = {
    success: boolean;
    message: string
}