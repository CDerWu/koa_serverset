import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPage } from '@actions'

export const authorityProps = (state, ownProps) => ({
    page: state.page,
});

const switchPage = (dispatch) => {
    return bindActionCreators({ setPage }, dispatch);
}

export const Page = (component) => (
    connect(authorityProps, switchPage)(component)
);

