import { useContext } from "react";
import ConstructionContext from "../../../contexts/ConstructionContext";

export function ConstructionDetail() {
    const { construction } = useContext(ConstructionContext);

    console.log("Detail", construction);

    return <div>ConstructionDetail</div>;
}
