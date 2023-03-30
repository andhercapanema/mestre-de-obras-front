import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/images/constructor-hat-helmet-protection-svgrepo-com.svg";
import {
    DrawerHeader,
    StyledDrawer,
    StyledList,
    StyledLogo,
    StyledTitle,
} from "./style";
import { drawerWidth } from "../../pages/Home/style";
import { AccountMenu } from "../AccountMenu/AccountMenu";
import ApartmentIcon from "@mui/icons-material/Apartment";

export function LeftNavBar({ drawerIsOpen }: { drawerIsOpen: boolean }) {
    return (
        <StyledDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={drawerIsOpen}
        >
            <DrawerHeader>
                <StyledLogo alt="Mestre de Obras Logo" src={logo} />
                <StyledTitle variant="h5">MESTRE DE OBRAS</StyledTitle>
            </DrawerHeader>
            <AccountMenu />
            <Divider />
            <StyledList>
                <ListItem disablePadding>
                    <ListItemButton href="/constructions">
                        <ListItemIcon>
                            <ApartmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Obras" />
                    </ListItemButton>
                </ListItem>
            </StyledList>
        </StyledDrawer>
    );
}
