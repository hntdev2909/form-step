import SignInPage from './containers/SignInPage';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './App.styles';

function App() {
	return (
		<AppContainer>
			<GlobalStyle />
			<SignInPage />
		</AppContainer>
	);
}

export default App;
