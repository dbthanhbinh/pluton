import React from 'react'
import _ from 'lodash'
import ShowThumbNone from './show-thumb-none'

const ShowThumb = (props) => {
    let aProps = _.pick(props, ['href'])
    let otherProps = _.pick(props, ['src', 'alt', 'width', 'height'])
    let {aclassname, imgclassname} = props
    return (
        <a className={aclassname} {...aProps}>
            <ShowThumbNone className={imgclassname} {...otherProps}/>
        </a>
    )
}

export default ShowThumb