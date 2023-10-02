import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);
function Button({
    to,
    href,
    primary = false,
    small = false,
    large = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    onClick,
    className,
    children,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });

    const props = {
        onClick,
        ...passProps,
    };

    //Kiem tra nếu có disabled thì sẽ xoá
    // Nếu có nhiều DOM events trong 1 element
    // Với điều kiện : key.startsWith('on') key bắt đầu bằng chữ On
    // Và Kiểu dữ liêu của key là Function typeof key === 'function'
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete key[props];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {/* {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} */}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
