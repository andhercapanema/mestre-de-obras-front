import { type PropsWithChildren } from "react";
import {
    createTheme,
    ThemeProvider,
    type ThemeOptions,
} from "@mui/material/styles";

export const themeOptions: ThemeOptions & {
    palette: {
        text: {
            light: string;
            lighter: string;
            lightest: string;
        };
        background: {
            dark: string;
        };
    };
} = {
    palette: {
        mode: "light",
        primary: {
            main: "#00bcc2",
        },
        secondary: {
            main: "#4aa2ee",
        },
        text: {
            primary: "rgba(39,44,51,0.8)",
            secondary: "rgba(39,44,51,0.6)",
            disabled: "rgba(39,44,51,0.38)",
            light: "hsla(0,0%,100%,.54)",
            lighter: "hsla(0,0%,100%,.85)",
            lightest: "#fff",
        },
        background: {
            default: "#f5f7fa",
            paper: "#fff",
            dark: "#303840",
            darker: "#272c33",
        },
        divider: "#e9edf2",
    },
};

const theme = createTheme(themeOptions);

export function Theme({ children }: PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
