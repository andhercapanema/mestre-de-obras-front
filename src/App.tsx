import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ProtectedRouteGuard } from "./components/ProtectedRouteGuard";
import { ContextsProvider } from "./contexts/ContextsProvider";
import { Theme } from "./layouts/Theme";
import { Constructions, Home, SignIn, SignUp } from "./pages";

export function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ContextsProvider>
                <BrowserRouter>
                    <GlobalStyle />
                    <CssBaseline />
                    <ProtectedRouteGuard />
                    <Theme>
                        <Routes>
                            <Route path="/cadastro" element={<SignUp />} />
                            <Route path="/login" element={<SignIn />} />
                            <Route path="/" element={<Home />}>
                                <Route
                                    path="/obras"
                                    element={<Constructions />}
                                >
                                    <Route
                                        path="/obras/cadastro"
                                        element={<div>Teste</div>}
                                    ></Route>
                                </Route>
                            </Route>
                        </Routes>
                    </Theme>
                </BrowserRouter>
            </ContextsProvider>
        </>
    );
}
