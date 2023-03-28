import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ProtectedRouteGuard } from "./components/ProtectedRouteGuard";
import { UserProvider } from "./contexts/UserContext";
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
            <UserProvider>
                <BrowserRouter>
                    <GlobalStyle />
                    <CssBaseline />
                    <ProtectedRouteGuard />
                    <Routes>
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/" element={<Home />}>
                            <Route
                                path="/constructions"
                                element={<Constructions />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}
