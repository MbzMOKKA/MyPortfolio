//Imports
import React from "react";

//Exports
export default function renderComplexText(text: string) {
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
