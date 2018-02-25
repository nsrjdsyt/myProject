import React from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions'

const Link = ({active, children, onClick}) => {
  if(active){
    return <b className="selected">{children}</b>
  }else{
    return <a href="#" className="not-selected" onClick={(e) => {e.preventDefault(); onClick()}}>{children}</a>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter ? true : false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {dispatch(actions.setFilter(ownProps.filter))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
