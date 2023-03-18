import './App.css';
import AuthPage from "./pages/AuthPage";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from './theme';

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <AuthPage/>
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
