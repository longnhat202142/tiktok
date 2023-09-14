import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from '~/Image/Image.module.scss';
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

export default Image;
