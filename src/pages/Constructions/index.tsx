import { Avatar, Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { type MouseEvent, useState } from "react";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import { ConstructionMenuList } from "../../components/ConstructionsMenu/ConstructionMenuList";
import {
    NewConstructionButton,
    PageHeader,
    SelectConstructionButton,
} from "./style";
import { Outlet } from "react-router";

export function Constructions() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <PageHeader>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: 3 }}>
                        <Typography variant="h2" paragraph>
                            Obras
                        </Typography>
                        {/* TODO: adicionar Breadcrumbs */}
                    </Box>
                    <Box>
                        <SelectConstructionButton
                            variant="contained"
                            onClick={handleClick}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            <Avatar variant="rounded">A</Avatar>
                            <Box>
                                <Typography variant="subtitle1">
                                    Acapulco
                                </Typography>
                                <Typography variant="subtitle2">
                                    Selecione a obra
                                </Typography>
                            </Box>
                            <ArrowDropDownIcon />
                        </SelectConstructionButton>
                        <ConstructionMenuList
                            anchorEl={anchorEl}
                            open={open}
                            handleClose={handleClose}
                            mt={1}
                            ml={0}
                        />
                    </Box>
                </Box>
                <NewConstructionButton
                    variant="contained"
                    endIcon={<DomainAddIcon />}
                >
                    Nova obra
                </NewConstructionButton>
            </PageHeader>
            <Divider />
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Outlet />
        </>
    );
}
