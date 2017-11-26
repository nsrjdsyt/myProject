import React, { Component } from 'react'

export default class Footer extends Component{
    renderFilter(filter, name){
        if(filter === this.props.filter){
            return name
        }

        return (<a onClick={(e)=>{e.preventDefault(); this.props.onFilterChange(filter)}} href='#'>{name}</a>)
    }
    render(){
        return (<p>
            SHow:
            {this.renderFilter('SHOW_ALL', 'All')}
            {', '}
            {this.renderFilter('SHOW_COMPLETED', 'Completed')}
            {', '}
            {this.renderFilter('SHOW_ACTIVE', 'Active')}
        </p>)
    }
}
