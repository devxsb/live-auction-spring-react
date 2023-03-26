import './App.css';
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ThemeProvider from './theme';
import NavbarLayout from "./layouts/navbar";
import {useSelector} from "react-redux";
import AuthPage from "./pages/Auth";
import ProductsPage from "./pages/Product";
import Author from "./pages/Author";

function App() {
    const currentUser = useSelector(state => state.reduxSlice.currentUser)
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ThemeProvider>
                    {!currentUser ? <AuthPage/> :
                        <>
                            <NavbarLayout/>
                            <Routes>
                                <Route path='/' element={<ProductsPage/>}/>
                                <Route path=':username' element={<Author/>}/>
                            </Routes>
                        </>
                    }
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
