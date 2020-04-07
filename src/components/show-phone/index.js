import React from 'react'

const ShowPhone = (props) => {
    let {phone} = props
    return (
        <a href={`tel:${phone}`}>{phone}</a>
    )
}

export default ShowPhone