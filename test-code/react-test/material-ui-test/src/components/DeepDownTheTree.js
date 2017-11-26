import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

const DeepDownTheTree = (props)=>{
    console.log(props.muiTheme.palette.textColor);
    return (
        <span style={{color: props.muiTheme.palette.textColor}}>
            hello world
        </span>
    )
}

export default muiThemeable()(DeepDownTheTree)
