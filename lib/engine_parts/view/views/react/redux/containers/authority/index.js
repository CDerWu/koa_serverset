import { connect } from 'react-redux';

const authorityProps = (state, ownProps) => ({
    SystemAuthorityType: state.SystemAuthorityType,
    checkAuthorized:(type)=>{
        if(isNaN(type))
        {
            console.log('check authorized failure.')
            return false;
        }
        return  state.user.lv.indexOf(type) > -1
    }
});

export const Authority = (component) => (
    connect(authorityProps)(component)
  );