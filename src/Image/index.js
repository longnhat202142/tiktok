import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from '~/Image/Image.module.scss';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handError}
        />
    );
});

Image.protoTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};
export default Image;
