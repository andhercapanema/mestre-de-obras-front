import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
} from "@mui/material";
import { SearchForm } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { type ChangeEvent, useState, type FormEvent, useEffect } from "react";
import useConstructions from "../../hooks/api/useConstructions";
import { Box } from "@mui/system";
import { type Construction } from "../../services/constructionApi";
import { useLocation, useNavigate } from "react-router";
import { ClickAwayListener } from "@mui/base";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export function SearchInput() {
    const [query, setQuery] = useState("");
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { getConstructions } = useConstructions();
    const [constructions, setConstructions] = useState<Construction[]>();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const filteredItens = constructions
        ?.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) =>
            a.name.localeCompare(b.name, "pt", { sensitivity: "base" })
        )
        .map((construction) => ({ ...construction, type: "obras" }));

    function handleInput(
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        setQuery(e.target.value);

        if (e.target.value.length > 0) {
            setMenuIsOpen(true);
        } else {
            setMenuIsOpen(false);
        }
    }

    function search(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setQuery("");
    }

    function navigateToItemPage(id: number, type: string) {
        setQuery("");
        navigate(`/${type}/${id}`);
    }

    useEffect(() => {
        getConstructions()
            .then((res) => {
                setConstructions(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [pathname, getConstructions]);

    return (
        <>
            <SearchForm onSubmit={search}>
                <TextField
                    required
                    onChange={handleInput}
                    value={query}
                    type="text"
                    placeholder="Buscar..."
                />
                <IconButton aria-label="search" type="submit">
                    <SearchIcon />
                </IconButton>
                {menuIsOpen && filteredItens && (
                    <>
                        <Box />
                        <ClickAwayListener
                            onClickAway={() => {
                                setMenuIsOpen(false);
                                setQuery("");
                            }}
                        >
                            <List role="presentation">
                                {filteredItens.length > 0 ? (
                                    filteredItens.map((item) => (
                                        <ListItem
                                            key={item.id}
                                            onClick={() => {
                                                setMenuIsOpen(false);
                                            }}
                                        >
                                            <ListItemButton
                                                onClick={() => {
                                                    navigateToItemPage(
                                                        item.id,
                                                        item.type
                                                    );
                                                }}
                                                disabled={item.type === "erro"}
                                            >
                                                <ListItemIcon>
                                                    <ApartmentIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.name}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))
                                ) : (
                                    <ListItem
                                        onClick={() => {
                                            setMenuIsOpen(false);
                                            setQuery("");
                                        }}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <ListItemButton
                                            disabled
                                            sx={{
                                                padding: "6px 45px !important",
                                            }}
                                        >
                                            <SearchOffIcon />
                                            <ListItemText
                                                primary="Nenhum elemento correspondente encontrado!"
                                                sx={{ textAlign: "center" }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                )}
                            </List>
                        </ClickAwayListener>
                    </>
                )}
            </SearchForm>
        </>
    );
}
