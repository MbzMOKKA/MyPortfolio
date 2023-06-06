//Imports
import React from "react";
import { StyledMethod, StyledHeader, StyledInfo, StyledMain } from "./style";
import { useTranslation } from "react-i18next";
import { ContactMethod as ContactMethodProps } from "../../../data/contact_methods/contactMethods";
import { useText } from "../../../utils/hooks";

//Component of a close button
export default function ContactMethod(props: ContactMethodProps) {
	const { logo, nameId, /*descriptionId,*/ contactInfo, cta } = props;
	const { t } = useTranslation();
	const { renderText } = useText();

	const ctaAltTxt = t(cta.nameId);

	return (
		<StyledMethod>
			<StyledHeader>
				<img src={logo} alt="logo" />
				<h2>{renderText(nameId)}</h2>
				{/* <p>{renderText(descriptionId)}</p> */}
			</StyledHeader>
			<StyledMain>
				<StyledInfo>
					<p>{contactInfo}</p>
				</StyledInfo>
				<a
					className="button"
					href={cta.action}
					target="_blank"
					rel="noreferrer"
				>
					<img src={cta.icon} alt={ctaAltTxt} />
				</a>
			</StyledMain>
		</StyledMethod>
	);
}
