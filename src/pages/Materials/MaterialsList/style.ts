import { Dialog, Table, styled } from "@mui/material";
import { themeOptions } from "../../../layouts/Theme";

export const StyledTable = styled(Table)`
    .MuiTableHead-root {
        background: ${({ theme }) => theme.palette.primary.main};

        * {
            color: ${themeOptions.palette.text.lightest};
            text-align: center;
            cursor: initial;
        }
    }

    /* .MuiTableRow-root {
        cursor: pointer;
    } */

    .MuiTableRow-root:nth-of-type(2n) {
        background: ${({ theme }) => theme.palette.primary.light};
    }
`;

export const StyledDialog = styled(Dialog)`
    form {
        height: 100%;

        .MuiDialogContent-root {
            height: calc(100% - 64px - 52.5px);

            .MuiTypography-root {
                margin-bottom: 16px;
            }

            .MuiBox-root {
                .MuiFormControl-root {
                    width: 100%;

                    :nth-of-type(odd) {
                        margin-bottom: 8px;
                    }

                    label {
                        top: -4px;
                    }
                }

                .MuiButtonBase-root {
                    margin: 0;
                    height: 40px;
                    margin-left: 8px;

                    :hover {
                        color: ${({ theme }) => theme.palette.error.main};
                    }
                }
            }

            .MuiButtonBase-root {
                display: flex;
                margin: 0 0 0 auto;
            }
        }

        .MuiDialogActions-root {
            margin: auto 0 0;
        }
    }
`;
