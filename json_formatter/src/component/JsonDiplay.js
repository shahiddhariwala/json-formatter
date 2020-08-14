import React from 'react';
const getJsonIndented = (obj) => JSON.stringify(obj, null, 4).replace(/["{[,\}\]]/g, "")

const JSONDisplayer = ({children}) => (
    <div>
        <pre>{getJsonIndented(children)}</pre>
    </div>
)
export default JSONDisplayer;