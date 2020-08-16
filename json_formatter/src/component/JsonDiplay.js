import React from 'react';
const getJsonIndented = (obj) => JSON.stringify(obj, null, 4)

const JSONDisplayer = ({children}) => (
    <div>
        <pre>{children ? getJsonIndented(children) : null}</pre>
    </div>
)
export default JSONDisplayer;