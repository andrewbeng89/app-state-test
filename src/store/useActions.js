import { readonly } from 'vue';

export default ({ actions, initialState }) => {
  const state = readonly(initialState);
  
  const dispatch = (actionName, actionPayload) => {
    actions[actionName]?.(initialState, actionPayload);
  }

  return { state, dispatch }
};
