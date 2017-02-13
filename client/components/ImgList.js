import React, { Component } from 'react';
import InfiniteScroll from 'redux-infinite-scroll';
import loadMore from "../actions/loadMore";
import { connect } from "react-redux";

class ImgList extends Component {
  
  constructor(props) {
    // super props
    super(props);
      
  }

  // render list as a child.
  // render msg
  renderList() {
    // this state
    // msgs
    // map(msg)
    return this.props.propList.map((msg) => {
      // return
      // className
      // item
      // key is msg
      // display msg
      return(
        <div className="item" key={msg}>{msg}</div>
      )
    })
  }
  

  render() {
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


function mapStateToProps(state) {

  return { 
    propList: state.loadMore.list
  };
}


export default connect(mapStateToProps, { loadMore })(ImgList);
