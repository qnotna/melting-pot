import React, { Fragment } from 'react';

const Suggestions = (props) => {

    const options = props.sources ? props.sources.map(source => (
        <option key={source.id} value={source.id}>
        {source.name}
        </option>
    )) : null
    return <Fragment>{options}</Fragment>
}

export default Suggestions