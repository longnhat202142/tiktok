import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665757201241090.jpeg?x-expires=1696820400&x-signature=BhHqj7er1IpbCSVXf0ymHIBOLco%3D"
                    alt=""
                />

                <Button primary className={cx('follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>dongbar</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Đông Bar Market</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Like </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
