import { connect } from 'react-redux';



const menuStateToProps = (state, ownProps) => ({
  menuData: state.menuData
});

export const MenuData = (component) => (
  connect(menuStateToProps)(component)
);