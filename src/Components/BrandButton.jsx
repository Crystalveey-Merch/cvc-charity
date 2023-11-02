
import PropTypes from 'prop-types';

export const BrandButton = ({
    onClick = undefined,
    label = '',
    disabled = false,
    className = '',
    type = 'button',
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-orange-600 text-white text-base font-medium py-2 px-4 rounded-lg shadow border border-orange-600 hover:bg-orange-700 hover:border hover:border-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-100 focus:ring-offset-violet-100 disabled:bg-blue-100 disabled:cursor-not-allowed transition duration-500 ease-in-out ${className}`}
            type={type}
        >
            {label}
        </button>
    );
};

BrandButton.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.string,
};
