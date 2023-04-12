import { Box, ButtonGroup, Typography, styled } from "@mui/material";

export const PageTitle = styled(Typography)`
    font-weight: 600;
    font-size: 1.4rem;

    margin-bottom: 16px;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
    height: 26.1333px;

    .MuiButtonBase-root:nth-of-type(2):hover {
        background-color: ${({ theme }) => theme.palette.error.light};
        border-color: ${({ theme }) => theme.palette.error.dark};
        color: ${({ theme }) => theme.palette.error.dark};
    }
`;

export const BackgroundBox = styled(Box)`
    background-color: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0 3px 3px -2px rgba(39, 44, 51, 0.1),
        0 3px 4px 0 rgba(39, 44, 51, 0.04), 0 1px 8px 0 rgba(39, 44, 51, 0.02);
    border-radius: 0.25rem;

    .MuiListItem-root {
        min-height: 49px;
    }

    .MuiListItemIcon-root {
        min-width: 40px;
    }

    .MuiListItemText-root {
        min-width: 230px;
        flex: initial;

        .MuiTypography-root {
            font-size: 0.8125rem;
            font-weight: 600;
            letter-spacing: 2px;
        }
    }

    .MuiFormControl-root {
        width: 100%;
    }
`;
