import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

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

export default Button;
