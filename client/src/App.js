import './App.css';
import AuthPage from "./pages/AuthPage";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from './theme';
import NavbarLayout from "./layouts/navbar";
import HomePage from "./pages/HomePage";
import {useSelector} from "react-redux";

function App() {
    const currentUser = useSelector(state => state.reduxSlice.currentUser)
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ThemeProvider>
                    {!currentUser ?
                        <AuthPage/> :
                        <>
                            <NavbarLayout/>
                            <HomePage/>
                        </>
                    }
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
