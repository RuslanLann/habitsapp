import { darkTheme, lightTheme } from './theme';

interface State {
  isDarkTheme: boolean;
}

interface Store {
  getState: () => State;
}

// TODO: move to global store
const createStore: Store = {
  getState: () => ({
    isDarkTheme: true,
  }),
};

const provideTheme = (store: Store) => {
  const state = store.getState();

  return state.isDarkTheme ? darkTheme : lightTheme;
};

export const themeProvider = provideTheme(createStore);
