import React from 'react';
import { HeadlineSeparator } from '@components';
import { Grid } from '@material-ui/core';
import {
    commonLetters,
    commonOneLetterWords,
    commonDoubleLetters,
    commonWordStarters,
    commonWordEnders
} from '@data/constants';
import PropTypes from 'prop-types';
import css from '@css/components/analysisDisplay.module.scss';

const AnalysisDisplay = ({ analysisResults }) => {
    if (!analysisResults?.letterFrequencySorted) return null;
    const {
        letterFrequency,
        letterFrequencySorted,
        oneLetterWordsSorted,
        doubleLettersSorted,
        wordStartersSorted,
        wordEndersSorted
    } = analysisResults;
    return (
        <div className={css.root}>
            <HeadlineSeparator text="Analysis" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <p>
                        <b>Frequent Letters:</b>{" "}
                        { letterFrequencySorted.slice(0,commonLetters.split(' ').length).map((c, idx) => <span key={c}>{`${idx > 0 ? ',' : ''} ${c} (${letterFrequency[c]})`}</span>) }
                        <br />
                        <i>
                            Most common letters in English: {commonLetters.toUpperCase()}
                        </i>
                    </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <p>
                        <b>One Letter Words:</b>{" "}
                        { oneLetterWordsSorted.map((c, idx) => <span key={c}>{`${idx > 0 ? ',' : ''} ${c} (${letterFrequency[c]})`}</span>) }
                        <br />
                        <i>
                            Common one letter words: {commonOneLetterWords.toUpperCase()}
                        </i>
                    </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <p>
                        <b>Double Letters:</b>{" "}
                        { doubleLettersSorted.map((c, idx) => <span key={c}>{`${idx > 0 ? ',' : ''} ${c} (${letterFrequency[c]})`}</span>) }
                        <br />
                        <i>
                            Common double letters: {commonDoubleLetters.toUpperCase()}
                        </i>
                    </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <p>
                        <b>Word Starters:</b>{" "}
                        { wordStartersSorted.map((c, idx) => <span key={c}>{`${idx > 0 ? ',' : ''} ${c} (${letterFrequency[c]})`}</span>) }
                        <br />
                        <i>
                            Common word-starting letters: {commonWordStarters.toUpperCase()}
                        </i>
                    </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <p>
                        <b>Word Enders:</b>{" "}
                        { wordEndersSorted.map((c, idx) => <span key={c}>{`${idx > 0 ? ',' : ''} ${c} (${letterFrequency[c]})`}</span>) }
                        <br />
                        <i>
                            Common word-ending letters: {commonWordEnders.toUpperCase()}
                        </i>
                    </p>
                </Grid>

            </Grid>
        </div>
    )
};

AnalysisDisplay.propTypes = {
    analysisResults: PropTypes.objectOf(PropTypes.any),
};

export default AnalysisDisplay;
