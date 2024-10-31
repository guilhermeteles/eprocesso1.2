import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const darkenColor = (hex, percent) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;

  return `#${(0x1000000 + (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 0 ? 0 : B) : 255)).toString(16).slice(1)}`;
};

export const IconButton = ({ icon, name, color, onClick, letter, textColor = '#FFFFFF' }) => {
  const hoverColor = darkenColor(color, 5); // Darken by 5% for hover effect
  const activeColor = darkenColor(color, 15); // Darken by 15% for active effect

  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-md focus:outline-none flex justify-center items-center transition-colors font-medium"
      style={{ backgroundColor: color }}
      title={name}
      aria-label={name}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.backgroundColor = activeColor;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: textColor }}/>
      <span style={{ color: textColor }} className="text-sm">{letter}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  letter: PropTypes.string,
  textColor: PropTypes.string,
};

export const OutlinedIconButton = ({ icon, name, onClick, textColor = '#0050D8' }) => {
  const borderColor = '#DFE1E2';
  const hoverBorderColor = darkenColor(borderColor, 5);
  const activeBorderColor = darkenColor(borderColor, 15);

  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded border focus:outline-none transition-colors flex justify-center items-center"
      style={{
        backgroundColor: 'white',
        borderColor: borderColor,
        color: textColor,
      }}
      title={name}
      aria-label={name}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hoverBorderColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = borderColor;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.borderColor = activeBorderColor;
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.borderColor = hoverBorderColor;
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: textColor }}/>
    </button>
  );
};

OutlinedIconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
};
