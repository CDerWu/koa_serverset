import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

const mapStateToProps = (state) => {
  const { lang, messages } = state.locale;
  return { locale: lang, key: lang, messages };
}

const ReduxConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);
export default ReduxConnectedIntlProvider;