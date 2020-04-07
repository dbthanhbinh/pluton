import React from 'react'

const ShowEmail = (props) => {
    let {email} = props
    return (
        <a href={`mailto:${email}`}>{email}</a>
    )
}

export default ShowEmail