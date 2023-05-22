import React from 'react';
import PropTypes from 'prop-types';


export default function MemberView(props) {

    return (
      <div>
        {props.children}
        <div id="MemberArea"></div>
      </div>
    );
}


MemberView.propTypes = {
  children: PropTypes.array
};
