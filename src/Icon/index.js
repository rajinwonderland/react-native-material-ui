/* eslint-disable import/no-unresolved, import/extensions */
import { MaterialIcons } from '@expo/vector-icons';
import React, { PureComponent, PropTypes } from 'react';
import getIconType from './helpers';
const propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.number,
    color: PropTypes.string,
    type: PropTypes.string
};
const defaultProps = { };
const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

class Icon extends PureComponent {
    render() {
        const { name, style, size, color, type } = this.props;
        const { palette, spacing } = this.context.uiTheme;
        let Icon;
        if (!type) {
          Icon = getIconType('material');
        } else {
          Icon = getIconType(type);
        }
        const iconColor = color || palette.secondaryTextColor;
        const iconSize = size || spacing.iconSize;
        return (
            <Icon
                name={name}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        );
    }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.contextTypes = contextTypes;

export default Icon;
