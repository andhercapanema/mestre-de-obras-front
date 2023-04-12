import { TextField, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { type Dispatch } from "react";
import { type ConstructionForm } from "../NewConstruction";
import { format } from "date-fns";

export function TypographyOrTextField({
    form,
    setForm,
    isEditing,
    name,
    value,
}: {
    form: ConstructionForm;
    setForm: Dispatch<React.SetStateAction<ConstructionForm>>;
    isEditing: boolean;
    name: string;
    value: string | Date;
}) {
    if (!isEditing)
        return (
            <Typography>
                {typeof value === "string"
                    ? value
                    : format(value, "dd/MM/yyyy")}
            </Typography>
        );

    function handleForm(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    if (typeof value === "string")
        return (
            <TextField
                id="outlined-basic"
                variant="outlined"
                required
                name={name}
                onChange={handleForm}
                value={value}
            />
        );

    return (
        <DateField
            value={value}
            onChange={(insertedDate) => {
                setForm({ ...form, [name]: insertedDate });
            }}
            slotProps={{
                textField: () => ({
                    variant: "outlined",
                }),
            }}
        />
    );
}
