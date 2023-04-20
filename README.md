# RYTR API Client

## Intro

This is an inofficial API Client which abstracts the rytr API.

It supports following features:

- createCustomUseCase
- getLanguages
- getTones
- getUsage
- getUsecaseDetail
- getUsecases
- ryte


## Installation
```sh
yarn add @unvyl/rytr
# or
npm i @unvyl/rytr
```

## Initialize the client
First, you need to import the module:
```typescript
import * as rytr from '@unvyl/rytr';
```

Then you can initialize the client by calling `rytr.init()`.
Either pass a key as argument or provide the key via an env var called `RYTR_API_KEY`.

### `createCustomUseCase`

More info about this endpoint can be found here: https://rytr.me/resources#custom-use-cases

```typescript
rytr.init();
await rytr.createCustomUseCase({
    name: 'use case name',
    inputName: 'input name',
    outputExample: 'output example',
    inputPlaceholder: 'input placeholder',
});
```

### `getLanguages`
```typescript
rytr.init();
await rytr.getLanguages();
```

### `getTones`
```typescript
rytr.init();
await rytr.getTones();
```

### `getUsage`
```typescript
rytr.init();
await rytr.getUsage();
```

### `getUsecaseDetail`
```typescript
rytr.init();
await rytr.getUsecaseDetail('useCaseId');
```

### `getUsecases`
```typescript
rytr.init();
await rytr.getUsecaseDetail('useCaseId');
```

### `ryte`
```typescript
rytr.init();
await rytr.ryte({
    languageId: 'languageId',
    toneId: 'toneId',
    useCaseId: 'useCaseId',
    inputContexts: {
        contextKeyLabel: 'value'
    },
    variations: 2,
    format: 'text',
    creativityLevel: 'low'
});
```