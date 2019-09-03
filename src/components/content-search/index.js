import React, {Component} from 'react';
import * as LIST from '../../contants'
import * as _ from 'lodash'

class ContentSearch extends Component {

    renderList=()=>{
        console.log(this.props.keySearch)
        return(
            _.filter(LIST.LIST_PROVINCE,(o)=>{
            return _.includes(o.NAME,this.props.keySearch)
        }).map((item,key)=>{
            return(
                <li key={key}>
                    <i className="fas fa-bus"></i>
                    <span>{item.NAME}</span>
                </li>
            )
        })
        )
    }
    render() {
        return (
            <>
                {this.renderList}
            </>
        );
    }
}

export default ContentSearch;