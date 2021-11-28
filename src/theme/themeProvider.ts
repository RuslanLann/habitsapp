import theme from './theme';

interface State {
  isDarkTheme: boolean;
}

interface Store {
  getState: () => State;
}

const createStore: Store = {
  getState: () => ({
    isDarkTheme: true,
  }),
};

const provideTheme = (store: Store) => {
  const state = store.getState();

  return state.isDarkTheme ? theme.darkTheme : theme.lightTheme;
};

const themeProvider = provideTheme(createStore);

export default themeProvider;
