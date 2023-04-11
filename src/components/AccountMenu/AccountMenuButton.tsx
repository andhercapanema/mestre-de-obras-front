import Avatar from "@mui/material/Avatar";
import { StyledAccountMenuButton } from "./style";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useUser from "../../hooks/api/useUser";
import { useEffect, useState, type MouseEvent } from "react";
import { type getUserResponse } from "../../services/userApi";
import { Initials } from "../Initials";

export function AccountMenuButton({
    open,
    handleClick,
    margin,
    backgroundColor,
}: {
    open: boolean;
    handleClick: (event: MouseEvent<HTMLElement>) => void;
    margin?: number;
    backgroundColor?: string;
}) {
    const [user, setUser] = useState<getUserResponse>();
    const { getUser } = useUser();

    const nameArr = user?.name.split(" ") ?? ["Erro", "Usuário"];
    const firstAndLastName =
        nameArr.length === 1
            ? nameArr[0]
            : `${nameArr[0]} ${nameArr[nameArr.length - 1]}`;

    useEffect(() => {
        getUser()
            .then((res) => {
                setUser(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [getUser]);

    if (!user) return <></>;

    return (
        <StyledAccountMenuButton
            variant="contained"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            backgroundColor={backgroundColor}
            margin={margin}
        >
            <Avatar sx={{ width: 32, height: 32, fontSize: 16 }}>
                {user && <Initials name={user.name} />}
            </Avatar>
            <Typography variant="body1">{firstAndLastName}</Typography>
            <ExpandMoreIcon />
        </StyledAccountMenuButton>
    );
}
