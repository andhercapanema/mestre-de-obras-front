import { PageBody } from "../../layouts/Page/PageBody";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import DomainAddIcon from "@mui/icons-material/DomainAdd";

export function Constructions() {
    return (
        <PageBody>
            <PagesHeader pageName="Obras" newElText="Nova obra">
                <DomainAddIcon />
            </PagesHeader>
        </PageBody>
    );
}
