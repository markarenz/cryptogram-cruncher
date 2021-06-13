import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Bg, LetterPicker, Header, Footer, CyphertextEntry, DecodingDisplay, DecodingButtons, AlphaKeyDisplay, AnalysisDisplay } from '@components';
import { defaultAlphaKey } from '../data/constants';
import { randomizeKey, checkProgress, getAnalysis, batchRandomGuess } from '@functions/helpers';
import css from '@css/components/main.module.scss';

const CryptogramCruncherMain = () => {
    const [cyphertext, setCyphertext] = useState('');
    const [activeLetter, setActiveLetter] = useState('');
    const [alphaKey, setAlphaKey] = useState(defaultAlphaKey);
    const [numCorrectWords, setNumCorrectWords] = useState(0);
    const [numCorrectWordsMax, setNumCorrectWordsMax] = useState(0);
    const [letterPickerOpen, setLetterPickerOpen] = useState(false);
    const [analysisResults, setAnalysisResults] = useState({});

    const handleRestart = () => {
        setCyphertext('');
        setAlphaKey(defaultAlphaKey);
    };
    const handleSaveCyphertext = (newCyphertext) => {
        setCyphertext(newCyphertext);
    };
    const launchLetterPicker = (l) => {
        setActiveLetter(l);
        setLetterPickerOpen(true);
    };
    const handleCloseLetterPicker = () => {
        setLetterPickerOpen(false);
    };
    const handleBatchTest = () => {
        const newAlphaKey = batchRandomGuess(cyphertext);
        setAlphaKey({...newAlphaKey});
    }
    const handleLetterPickerClick = (activeLetter, newLetter) => {
        handleCloseLetterPicker();
        const newAlphaKey = {...alphaKey};
        Object.keys(alphaKey).map(k => {
            if (newAlphaKey[k] === newLetter) {
                newAlphaKey[k] = null; // is newLetter targeted in alphaKey?
            }
            return null;
        })
        newAlphaKey[activeLetter] = newLetter;
        setAlphaKey({
            ...newAlphaKey,
        });
    };
    const handleRandomize = () => {
        setAlphaKey(randomizeKey(alphaKey));
    };
    const handleRevert = () => {
        setAlphaKey(defaultAlphaKey);
    }
    useEffect(() => {
        if (cyphertext !== '') {
            setAnalysisResults(getAnalysis(cyphertext));
        }
    }, [cyphertext]);
    useEffect(() => {
        if (cyphertext !== '') {
            const { numWords, numCorrect } = checkProgress(cyphertext, alphaKey);
            if (numCorrectWordsMax < 1) {
                setNumCorrectWordsMax(numWords);
            }
            setNumCorrectWords(numCorrect);
        }
    }, [alphaKey, cyphertext, numCorrectWordsMax]);

    return (
        <div className={css.root}>
            <Header handleRestart={handleRestart}/>
            <Container>
                <main className={css.main}>
                    <Bg />
                    {
                        cyphertext === ''
                            ? <CyphertextEntry handleSaveCyphertext={handleSaveCyphertext} />
                            : <Grid container spacing={2}>
                                <DecodingButtons handleRandomize={handleRandomize} handleRevert={handleRevert} handleBatchTest={handleBatchTest} />
                                <Grid item xs={12}>
                                    <DecodingDisplay cyphertext={cyphertext} alphaKey={alphaKey} launchLetterPicker={launchLetterPicker} />
                                    <div className="text-right mt-1">Words: {numCorrectWords} / {numCorrectWordsMax}</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <AlphaKeyDisplay alphaKey={alphaKey} launchLetterPicker={launchLetterPicker} />
                                </Grid>
                                <Grid item xs={12}>
                                    <AnalysisDisplay analysisResults={analysisResults} />
                                </Grid>
                            </Grid>
                    }
                </main>
            </Container>
            <Footer />
            <LetterPicker
                isOpen={letterPickerOpen}
                activeLetter={activeLetter}
                handleClose={handleCloseLetterPicker}
                alphaKey={alphaKey}
                handleLetterPickerClick={handleLetterPickerClick}
            />
        </div>
    )
};

export default CryptogramCruncherMain;
