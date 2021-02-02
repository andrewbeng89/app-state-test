import state from './state';
import actions from './actions';
import useStore from './useStore';

export const foo = useStore({
  state: {
    bar: "hello world"
  },
  actions: {
    setBar: (state, bar) => {
      state.bar = bar;
    }
  }
});

export default {
  ...useStore({ state, actions }),
  foo
};
