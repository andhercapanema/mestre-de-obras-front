import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { Home, SignIn, SignUp } from "./pages";

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
                theme="colored"
            />
            <BrowserRouter>
                <GlobalStyle />
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
