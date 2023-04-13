import { ListItemIcon, MenuItem } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { type Dispatch, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export function SignOutButton({
    setAnchorEl,
}: {
    setAnchorEl: Dispatch<React.SetStateAction<HTMLElement | null>>;
}) {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    function logOut() {
        setAnchorEl(null);
        setUserData(null);
        toast.success("Usuário deslogado com sucesso!");
        navigate("/login");
    }

    return (
        <MenuItem onClick={logOut}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Sair
        </MenuItem>
    );
}
