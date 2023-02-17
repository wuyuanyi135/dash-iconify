import {Component} from 'react';
import PropTypes from 'prop-types';
import {addCollection} from '@iconify/react';

/**
 * Iconify for Plotly Dash. Visit this site to browse all the available icons: https://icon-sets.iconify.design/
 */
export default class DashIconifyBundleLoader extends Component {

    componentDidMount() {
        console.log('Loading bundle data');
        addCollection(this.props.offlineData);
    }

    render() {
        return null;
    }
}

DashIconifyBundleLoader.defaultProps = {};

DashIconifyBundleLoader.propTypes = {
    /**
     * Offline Icon bundle data
     */
    offlineData: PropTypes.object,
};

export const defaultProps = DashIconifyBundleLoader.defaultProps;
export const propTypes = DashIconifyBundleLoader.propTypes;
