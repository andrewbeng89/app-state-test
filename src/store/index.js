import { reactive, readonly } from 'vue';

/* State and actions declaration */

const state = {
  counter: 0
};

const actions = {
  increment: state => {
    state.counter += 1;
  }
};

/* Utilities to wire global store reactivity */

const useState = state => 
  reactive(state);

export const useActions = ({ actions, initialState }) => {
  const state = readonly(initialState);
  
  const dispatch = (actionName, actionPayload) => {
    actions[actionName]?.(initialState, actionPayload);
  }

  return { state, dispatch }
};

export const useStore = ({ state, actions }) => {
  const initialState = useState(state);

  return useActions({ actions, initialState });
};

/* Export global store instance */

export default useStore({ state, actions });
