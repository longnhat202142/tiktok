import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2, 3]);
        }, 3000);
    }, []);

    const handleHideResult = () => {
        setshowResult(false);
    };

    const handClear = () => {
        setsearchValue('');
        setsearchResult([]);
        inputRef.current.focus();
    };
    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => setsearchValue(e.target.value)}
                    onFocus={() => setshowResult(true)}
                />
                {searchValue && (
                    <button className={cx('clear')} onClick={handClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
