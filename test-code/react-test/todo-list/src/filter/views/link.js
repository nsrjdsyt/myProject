import React from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions'

const Link = ({active, children, onClick}) => {
  console.log("Link", active); //会进行浅比较，props变了 更新渲染
  if(active){
    return <b className="selected">{children}</b>
  }else{
    return <a href="#" className="not-selected" onClick={(e) => {e.preventDefault(); onClick()}}>{children}</a>
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps active", ownProps);          //每一次组件更新的时候都会重新计算
  return {
    active: ownProps.filter === state.filter ? true : false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("mapDispatchToProps filter click", ownProps); //组件挂载时调用一次
  return {
    onClick: () => {dispatch(actions.setFilter(ownProps.filter))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
