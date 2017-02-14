// react
import React, { Component } from 'react';
// scroll
import InfiniteScroll from 'redux-infinite-scroll';
// load more action
import loadMore from "../actions/loadMore";
// connect
import { connect } from "react-redux";

// list img class
class ImgList extends Component {
  
  // props
  constructor(props) {
    // super props
    super(props);
      
  }


  componentWillMount() {
    // fire action
    this.props.loadMore();
  }

  
  renderList() {
    let myList = this.props.propList;
    
    return myList.map((item, index) => {
    
      //console.log(item);
    
      // access each element
      return(
        <div className="item" key={index}>{index} - {item.a}</div>
      )
    });
      
  }
  

  // this class render
  render() {
    // set height
    // load more, get remote data
    // child render individual element
    return (
      <div>
        <span></span>
        <InfiniteScroll containerHeight="300px" loadMore={this.props.loadMore}>
          {this.renderList()}
        </InfiniteScroll>
      </div>
    );
  }
  
  
}


// the propList
function mapStateToProps(state) {

  return { 
    propList: state.loadMore.list
  };
}

// connect
export default connect(mapStateToProps, { loadMore })(ImgList);
