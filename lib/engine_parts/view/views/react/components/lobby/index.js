import React from 'react';
import PropTypes from 'prop-types';
import Sw from '@widgets/switch_component';
import ErrorBoundary from '@widgets/errorboundary';


class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.buildSWComponents = this.buildSWComponents.bind(this);
        this.domReady = false;
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.showpage !== nextProps.showpage)
            return true;

        return false;
    }
    buildSWComponents() {
        const { SWComponent } = this.props;
        let swC = {};
        for (let i in SWComponent) {
            swC[SWComponent[i].type]=(new Sw.SWInit(SWComponent[i].type, SWComponent[i].obj));
        }
        return swC;
    }
    render() {
        const {showpage } = this.props;
        let info = { sw_type: new Sw.SWStateParams(showpage.type, showpage.params) };
        let SWC = this.buildSWComponents();
        //console.log(SWC);
        return (
            <ErrorBoundary>
                <div className='main_board'>
                    <Sw info={info} coms={SWC} />
                </div>
            </ErrorBoundary>
        );
    }
}

Lobby.propTypes={
    SWComponent:PropTypes.object.isRequired,
    showpage:PropTypes.object.isRequired,
};

export default Lobby;