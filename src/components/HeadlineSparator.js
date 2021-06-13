import React from 'react';
import PropTypes from 'prop-types';
import css from '@css/components/headlinesparator.module.scss';

const HeadlineSeparator = ({ text }) => {
    return (
        <div className={css.root}>
            <div className={css.wing}/>
            <h3 className={css.headline}>
                {text}
            </h3>
            <div className={css.wing}/>
        </div>
    )
};

HeadlineSeparator.propTypes = {
    text: PropTypes.string.isRequired,
}

export default HeadlineSeparator;
