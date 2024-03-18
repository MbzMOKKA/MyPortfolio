//Imports
import React from "react";

//useText custom hook
export default function useText() {
    function renderText(text: string) {
        return text;
    }

    function renderComplexText(text: string) {
        const finalText = text.split("\n").map((str, index, arr) => (
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

    return { renderComplexText, renderText };
}
