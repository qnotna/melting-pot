import React, { Fragment } from 'react';

const Suggestions = (props) => {

    const options = props.sources ? props.sources.map(source => (
        <option key={source.id}>
        {source.id}
        </option>
    )) : null
    return <Fragment>{options}</Fragment>
}

export default Suggestions