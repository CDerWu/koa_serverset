import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

export const Intl = (component) => (
  injectIntl(connect(getLSProps)(component))
);

const getLSProps = (state, ownProps) => ({
  getLS: (id, params = {}) => {
    const { intl } = ownProps;
    return intl.formatMessage({ id: id }, params);
  }
});
