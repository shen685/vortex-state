import { Store } from './proxy';
export const createStore = <T extends object>(initialState: T) => new Store(initialState);
