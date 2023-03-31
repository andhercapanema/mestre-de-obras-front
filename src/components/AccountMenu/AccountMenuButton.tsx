import Avatar from "@mui/material/Avatar";
import { StyledAccountMenuButton } from "./style";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useUser from "../../hooks/api/useUser";
import { useEffect, useState, type MouseEvent } from "react";
import { type getUserResponse } from "../../services/userApi";

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
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const { getUser } = useUser();

    useEffect(() => {
        getUser()
            .then((res) => {
                setUser(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [getUser]);

    useEffect(() => {
        if (user) {
            const arrOfNames = user.name.split(" ");
            setFirstName(arrOfNames[0]);
            setLastName(arrOfNames[arrOfNames.length - 1]);
        }
    }, [user, firstName, lastName]);

    console.log({ backgroundColor });

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
            {firstName && lastName && (
                <>
                    <Avatar sx={{ width: 32, height: 32, fontSize: 16 }}>
                        {firstName[0] + lastName[0]}
                    </Avatar>
                    <Typography variant="body1">
                        {`${firstName} ${lastName}`}
                    </Typography>
                </>
            )}
            <ExpandMoreIcon />
        </StyledAccountMenuButton>
    );
}
