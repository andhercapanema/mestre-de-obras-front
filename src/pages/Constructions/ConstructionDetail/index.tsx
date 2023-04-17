import {
    type FormEvent,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";
import ConstructionContext from "../../../contexts/ConstructionContext";
import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { BackgroundBox, PageTitle, StyledButtonGroup } from "./style";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TodayIcon from "@mui/icons-material/Today";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { TypographyOrTextField } from "./TypographyOrTextField";
import { useParams } from "react-router-dom";
import useConstruction from "../../../hooks/api/useConstruction";
import { type ConstructionForm } from "../NewConstruction";
import useConstructionPatch from "../../../hooks/api/useConstructionPatch";
import { toast } from "react-toastify";
import { type AxiosError } from "axios";
import { DeleteDialog } from "./DeleteDialog";

export function ConstructionDetail() {
    const { construction, setConstruction } = useContext(ConstructionContext);
    const { id } = useParams();
    const { getConstruction } = useConstruction();
    const [error, setError] = useState("");

    const fetchConstruction = useCallback(async () => {
        getConstruction(Number(id))
            .then((res) => {
                setConstruction(res);
                console.log("res: ", res);
            })
            .catch((err) => {
                setError(err.response.data);
            });
    }, [id, getConstruction, setConstruction]);

    useEffect(() => {
        if (!construction) {
            void fetchConstruction();
        }
    }, [construction, fetchConstruction]);

    const populateForm = useCallback(() => {
        if (construction) {
            setForm({
                name: construction.name,
                address: construction.address,
                client: construction.client,
                technicalManager: construction.technicalManager,
                initialDate: new Date(construction.initialDate),
                endDate: new Date(construction.endDate),
            });
        }
    }, [construction]);

    useEffect(() => {
        populateForm();
    }, [populateForm]);

    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState<ConstructionForm>({
        name: "",
        address: "",
        client: "",
        technicalManager: "",
        initialDate: new Date(),
        endDate: new Date(),
    });
    const { name, address, client, technicalManager, initialDate, endDate } =
        form;
    const { patchConstruction } = useConstructionPatch();
    const [formIsComplete, setFormIsComplete] = useState(false);

    const checkIfFormIsComplete = useCallback(() => {
        let isFinished = true;
        for (const key in form) {
            const value = form[key as keyof ConstructionForm];

            if (!value) {
                isFinished = false;
            } else if (typeof value === "string" && value.length === 0) {
                isFinished = false;
            } else if (
                typeof value === "object" &&
                (value.toString() === "Invalid Date" ||
                    value.getFullYear() < 1900)
            ) {
                isFinished = false;
            }
        }
        setFormIsComplete(isFinished);
    }, [form]);

    useEffect(() => {
        checkIfFormIsComplete();
    }, [checkIfFormIsComplete]);

    async function updateConstruction(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!construction) return;

        try {
            const updatedConstruction = await patchConstruction(
                form,
                construction.id
            );
            toast.success("Alteração realizado com sucesso!");
            setConstruction(updatedConstruction);
            setIsEditing(false);
        } catch (err) {
            const error = err as AxiosError;

            if (error.response?.data)
                toast.error(error.response.data as string);

            console.error(error);
        }
    }

    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);

    useEffect(() => {
        setIsEditing(false);
        void fetchConstruction();
    }, [id, fetchConstruction]);

    if (!construction)
        return (
            <Box
                sx={{
                    height: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography>{error}</Typography>
            </Box>
        );

    return (
        <form onSubmit={updateConstruction}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <PageTitle variant="h3">Informações da Obra</PageTitle>
                <StyledButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                >
                    {isEditing ? (
                        <>
                            <Button type="submit" disabled={!formIsComplete}>
                                Salvar
                            </Button>
                            <Button
                                onClick={() => {
                                    populateForm();
                                    setIsEditing(false);
                                }}
                            >
                                Cancelar
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsEditing(true);
                                }}
                            >
                                Editar
                            </Button>
                            <Button
                                onClick={() => {
                                    setDeleteDialogIsOpen(true);
                                }}
                            >
                                Deletar
                            </Button>
                            <DeleteDialog
                                deleteDialogIsOpen={deleteDialogIsOpen}
                                setDeleteDialogIsOpen={setDeleteDialogIsOpen}
                                id={Number(id)}
                            />
                        </>
                    )}
                </StyledButtonGroup>
            </Box>
            <BackgroundBox>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <MapsHomeWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="NOME" />
                        <TypographyOrTextField
                            form={form}
                            setForm={setForm}
                            isEditing={isEditing}
                            name="name"
                            value={name}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="ENDEREÇO" />
                        <TypographyOrTextField
                            form={form}
                            setForm={setForm}
                            isEditing={isEditing}
                            name="address"
                            value={address}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="CLIENTE" />
                        <TypographyOrTextField
                            form={form}
                            setForm={setForm}
                            isEditing={isEditing}
                            name="client"
                            value={client}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <EngineeringIcon />
                        </ListItemIcon>
                        <ListItemText primary="RESPONSÁVEL TÉCNICO" />
                        <TypographyOrTextField
                            form={form}
                            setForm={setForm}
                            isEditing={isEditing}
                            name="technicalManager"
                            value={technicalManager}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <TodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="PREVISÃO DE DATA INICIAL" />
                        {initialDate && (
                            <TypographyOrTextField
                                form={form}
                                setForm={setForm}
                                isEditing={isEditing}
                                name="initialDate"
                                value={initialDate}
                            />
                        )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <EventAvailableIcon />
                        </ListItemIcon>
                        <ListItemText primary="PREVISÃO DE DATA FINAL" />
                        {endDate && (
                            <TypographyOrTextField
                                form={form}
                                setForm={setForm}
                                isEditing={isEditing}
                                name="endDate"
                                value={endDate}
                            />
                        )}
                    </ListItem>
                </List>
            </BackgroundBox>
        </form>
    );
}
