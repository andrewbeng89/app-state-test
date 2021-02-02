import useState from './useState';
import useActions from './useActions';

export default ({ state, actions }) => {
  const initialState = useState(state);

  return useActions({ actions, initialState });
};
