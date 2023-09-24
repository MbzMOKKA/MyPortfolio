//Imports
import React from "react";
import { useTranslation } from "react-i18next";

//useText custom hook
export default function useText() {
    const { t } = useTranslation();

    function renderComplexText(text: string, isRaw = false) {
        const translatedText = isRaw ? text : t(text);
        const finalText = translatedText.split("\n").map((str, index, arr) => (
            <React.Fragment key={index}>
                {str}
                {index !== arr.length - 1 ? (
                    <>
                        <br />
                    </>
                ) : null}
            </React.Fragment>
        ));
        return finalText;
    }

    return { renderComplexText, renderText: t };
}
