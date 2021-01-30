import { reactive } from 'vue';

export const useAction = ({ action, initialState }) => {
  const state = reactive(initialState);

  const dispatch = (actionPayload) => {
    action(state, actionPayload);
  }

  return { state, dispatch }
};

const initialState = reactive({
  counter: 0
});

export const action = (state, { type }) => {
  switch (type) {
    case 'INCREMENT':
      state.counter += 1;
      break;
  }
}

export const useStore = () => {
  return useAction({ action, initialState });
}
