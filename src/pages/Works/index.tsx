//Imports
import React, { useEffect } from "react";
import {
	StyledMain,
	StyledTopSection,
	StyledList,
	StyledActions,
	StyledStats,
} from "./style";
import { WorkCard } from "../../components/works";
import { useParams } from "react-router-dom";

//Component of the works page
export default function WorksPage() {
	const { id } = useParams();

	return (
		<StyledMain>
			<StyledTopSection>
				<StyledActions>
					<button>Filtrer</button>
					<button>Trier</button>
				</StyledActions>
				<StyledStats>14 travaux en tout : 3 en cours</StyledStats>
			</StyledTopSection>
			<StyledList>
				<WorkCard id={0} />
				<WorkCard id={1} />
				<WorkCard id={2} />
			</StyledList>
		</StyledMain>
	);
}
