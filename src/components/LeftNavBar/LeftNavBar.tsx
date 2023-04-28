import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/images/constructor-hat-helmet-protection-svgrepo-com.svg";
import {
    DrawerHeader,
    StyledDrawer,
    StyledList,
    StyledListItemButton,
    StyledLogo,
    StyledTitle,
} from "./style";
import { drawerWidth } from "../../pages/Home/style";
import { AccountMenu } from "../AccountMenu/AccountMenu";
import { Link, useLocation } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WidgetsIcon from "@mui/icons-material/Widgets";

export function LeftNavBar({ drawerIsOpen }: { drawerIsOpen: boolean }) {
    const { pathname } = useLocation();
    const pagesList = [
        { name: "obras", icon: <ApartmentIcon /> },
        { name: "insumos", icon: <WidgetsIcon /> },
    ];

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
                {pagesList.map(({ name, icon }) => (
                    <ListItem disablePadding key={name}>
                        <Link to={`/${name}`}>
                            <StyledListItemButton
                                isSelected={pathname.split("/")[1] === name}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText
                                    primary={
                                        name[0].toUpperCase() + name.slice(1)
                                    }
                                />
                            </StyledListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </StyledList>
        </StyledDrawer>
    );
}
