import { MutationTree } from 'vuex';
import { CounterState } from './types';

export const mutations: MutationTree<CounterState> = {
  incrementCounter(state) {
    state.counter++;
    state.msg = state.msg + " +1 ";
  },
  resetCounter(state) {
    state.counter = 0;
    state.msg = "";
  },
};
