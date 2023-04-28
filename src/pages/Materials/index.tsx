import { useContext } from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import { PageBody } from "../../layouts/Page/PageBody";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NewMaterialContext from "../../contexts/NewMaterialContext";

export function Materials() {
    const { setIsCreatingNewMaterial } = useContext(NewMaterialContext);

    return (
        <PageBody>
            <PagesHeader
                pageName="Insumos"
                newElText="Novo insumo"
                newElAction={() => {
                    setIsCreatingNewMaterial(true);
                }}
                showConstructionsHeaderMenu={false}
            >
                <WidgetsIcon />
            </PagesHeader>
        </PageBody>
    );
}
