import theme from './theme';

interface IState {
  isDarkTheme: boolean;
}

interface IStore {
  getState: () => IState;
}

const createStore: IStore = {
  getState: () => ({
    isDarkTheme: false,
  }),
};

const provideTheme = (store: IStore) => {
  const state = store.getState();

  return state.isDarkTheme ? theme.darkTheme : theme.lightTheme;
};

const themeProvider = provideTheme(createStore);

export default themeProvider;
