import { connect } from 'react-redux';

export const User = (component) => (
    connect(userStateToProps)(component)
  );
  
  const userStateToProps = (state, ownProps)=>({
    user : state.user
  });
  