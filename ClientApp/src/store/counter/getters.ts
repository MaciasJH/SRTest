import { GetterTree } from 'vuex';
import { CounterState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<CounterState, RootState> = {
    currentCount(state): number {
        return state.counter;
    },
    currentMsg(state): string {
        console.log(state);
        return state.msg;
    },
};
