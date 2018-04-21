import React from 'react';
import './index.css';
import { sizes, light, dark, mdInactive } from './config/mappings'

const MaterialIcon = ({ icon, size, invert, inactive, color, style }) => {
    const sizeMapped = sizes[size] || parseInt(size) || sizes['small'];
    const defaultColor = (invert && 'invert') ? light : dark;
    const inactiveColor = (inactive && 'inactive') ? mdInactive : '';
    const propStyle = style || {};
    const styleOverride = Object.assign(propStyle, {color: color ? color : '', fontSize: sizeMapped});
    
    return (
        <i className={`material-icons ${sizeMapped} ${defaultColor} ${inactiveColor}`} style={styleOverride} >{icon}</i>
    )
}
export default MaterialIcon;
export * from './palette';