import React from 'react';
import { alpha } from '@data/constants';
import { Grid } from '@material-ui/core';
import { HeadlineSeparator } from '@components';
import PropTypes from 'prop-types';
import css from '@css/components/alphaKeyDisplay.module.scss';

const AlphaKeyDisplay = ({ alphaKey, launchLetterPicker }) => {
    return (
        <div className={css.root}>
            <HeadlineSeparator text="Current Key" />
            <Grid container spacing={3} justify="center">
                {
                    alpha.map((k, idx) => {
                        const t = alphaKey[k.toUpperCase()] ? alphaKey[k.toUpperCase()] : '?';
                        return <Grid item key={idx} xs={6} sm={1} align="center" className={`${css.keyPair} ${t === '?' ? css.inactive : css.active}`}>
                            <span onClick={() => launchLetterPicker(k)}>
                                {k.toUpperCase()} = {t.toUpperCase()}
                            </span>
                        </Grid>;
                    })

                }
            </Grid>
        </div>
    )
};

AlphaKeyDisplay.propTypes = {
    alphaKey: PropTypes.objectOf(PropTypes.any),
    launchLetterPicker: PropTypes.func.isRequired,
};

export default AlphaKeyDisplay;
