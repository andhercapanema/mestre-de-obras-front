import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ProtectedRouteGuard } from "./components/ProtectedRouteGuard";
import { ContextsProvider } from "./contexts/ContextsProvider";
import { Theme } from "./layouts/Theme";
import { Constructions, Home, NewConstruction, SignIn, SignUp } from "./pages";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ptBR from "date-fns/locale/pt-BR";
import { ConstructionDetail } from "./pages/Constructions/ConstructionDetail";
import { ConstructionsList } from "./pages/Constructions/ConstructionsList";

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
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ptBR}
                >
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
                                            path="/obras"
                                            element={<ConstructionsList />}
                                        ></Route>
                                        <Route
                                            path="/obras/cadastro"
                                            element={<NewConstruction />}
                                        ></Route>
                                        <Route
                                            path="/obras/:id"
                                            element={<ConstructionDetail />}
                                        ></Route>
                                    </Route>
                                </Route>
                            </Routes>
                        </Theme>
                    </BrowserRouter>
                </LocalizationProvider>
            </ContextsProvider>
        </>
    );
}
