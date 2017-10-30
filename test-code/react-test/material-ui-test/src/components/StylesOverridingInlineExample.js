import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const StylesOverridingInlineExample = ()=>(
    <Checkbox
        label="checked the mail"
        name="StylesOverridingInlineExample"
        style={{width: '50%',margin: '0 auto',border: '2px solid #FF9800', color:'red',backgroundColor:'#ffd699'}}>
        </Checkbox>
)

export default StylesOverridingInlineExample
