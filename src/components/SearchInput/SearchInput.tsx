import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
} from "@mui/material";
import { SearchForm, SvgBox, WhiteBackgroundBox } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { type ChangeEvent, useState, useEffect } from "react";
import useConstructions from "../../hooks/api/useConstructions";
import { type Construction } from "../../services/constructionApi";
import { useLocation, useNavigate } from "react-router";
import { ClickAwayListener } from "@mui/base";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import useMaterials from "../../hooks/api/useMaterials";
import { type Material } from "../../services/materialApi";

export function SearchInput() {
    const [query, setQuery] = useState("");
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { getConstructions } = useConstructions();
    const [constructions, setConstructions] = useState<Construction[]>();
    const { getMaterials } = useMaterials();
    const [materials, setMaterials] = useState<Material[]>();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const filteredConstructions = constructions
        ?.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) =>
            a.name.localeCompare(b.name, "pt", { sensitivity: "base" })
        )
        .map((construction) => ({ ...construction, type: "obras" }));

    const filteredMaterials = materials
        ?.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) =>
            a.name.localeCompare(b.name, "pt", { sensitivity: "base" })
        )
        .map((material) => ({ ...material, type: "insumos" }));

    const filteredItens =
        filteredConstructions && filteredMaterials
            ? [...filteredConstructions, ...filteredMaterials]
            : [];

    const itemTypeHandler: Record<string, JSX.Element> = {
        obras: <ApartmentIcon />,
        insumos: <WidgetsIcon />,
    };

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

    function navigateToItemPage(id: number, type: string) {
        if (type === "insumos") {
            navigate(`/${type}`);
        } else {
            navigate(`/${type}/${id}`);
        }

        setQuery("");
    }

    useEffect(() => {
        getConstructions()
            .then((res) => {
                setConstructions(res);
            })
            .catch((err) => {
                console.error(err);
            });

        getMaterials()
            .then((res) => {
                setMaterials(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [pathname, getConstructions, getMaterials]);

    return (
        <ClickAwayListener
            onClickAway={() => {
                setMenuIsOpen(false);
                setQuery("");
            }}
        >
            <SearchForm>
                <TextField
                    required
                    onChange={handleInput}
                    value={query}
                    type="text"
                    placeholder="Buscar..."
                />
                <SvgBox>
                    <SearchIcon aria-label="search" />
                </SvgBox>
                {menuIsOpen && filteredItens && (
                    <>
                        <WhiteBackgroundBox />
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
                                        >
                                            <ListItemIcon>
                                                {itemTypeHandler[item.type]}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} />
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
                    </>
                )}
            </SearchForm>
        </ClickAwayListener>
    );
}
