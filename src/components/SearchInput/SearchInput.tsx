import { IconButton, TextField } from "@mui/material";
import { SearchForm } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { type ChangeEvent, useState, type FormEvent } from "react";

export function SearchInput() {
    const [query, setQuery] = useState("");

    function handleInput(
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        setQuery(e.target.value);
    }

    function search(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setQuery("");
    }

    return (
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
        </SearchForm>
    );
}
