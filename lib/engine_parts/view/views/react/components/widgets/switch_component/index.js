import React from 'react';
import PropTypes from 'prop-types'
import { withErrorBoundary } from '@widgets/errorboundary';

class SwitchComponent extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        if (this.props.info.sw_type.type !== nextProps.info.sw_type.type)
            return true;

        return false;
    }

    render(){       
        let type = this.props.info.sw_type.type;
        console.log('SwitchComponent render, sw_type = ' + type);
        if (type === '')
            return null;
        let Com = this.props.coms[type].com;
        return <Com params={this.props.info.sw_type.params}/>;
    }
}

const Sw = withErrorBoundary(SwitchComponent);

function withProps(Component, props) {
    function Temp(matchProps) {
        return <Component {...props} {...matchProps} />
    }
    Temp.displayName = 'withProps';
    return Temp;
}
Sw.withProps = withProps;

class SWInit{
    constructor(type, com){
        this.type = type;
        this.com = com;
    }
}

Sw.SWInit = SWInit;

class SWStateParams{
    constructor(type, params){
        this.type = type;
        this.params = params;
    }
}

Sw.SWStateParams = SWStateParams;

SwitchComponent.propTypes = {
    coms : PropTypes.object.isRequired,
    info : PropTypes.shape({
        sw_type : PropTypes.instanceOf(SWStateParams)
    })
}

export default Sw;