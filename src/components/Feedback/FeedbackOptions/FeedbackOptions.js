import { Component } from 'react';
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'



class FeedbackOptions  extends  Component{
  render() {
    return(
       <ul className={css.buttonList}>
         {this.props.options.map(el => (
           <li key={nanoid()}> <button onClick={() => this.props.onLeaveFeedback(el)}>{el}</button></li>
         ))}
     </ul>
    )
  }
}

FeedbackOptions.propTypes = {
  options:PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;
