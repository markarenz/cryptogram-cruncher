import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import { getDecryptedText, cleanCyphertext, isCharacterALetter } from '@functions/helpers';
import wordList from '@data/wordList';
import css from '@css/components/decodingDisplay.module.scss';

const DecodingDisplay = ({ cyphertext, alphaKey, launchLetterPicker }) => {
    const decryptedText = getDecryptedText(cyphertext, alphaKey);
    const wordsCyphertext = cyphertext.split(' ');
    const words = decryptedText.split(' ');
    return (
        <div className={css.root}>
            <Card>
                <CardContent>
                    {
                        words.map((word, idx) => {
                            const cleanedWord = cleanCyphertext(word);
                            const wordCyphertext = wordsCyphertext[idx].split('');
                            const isWord = wordList.includes(cleanedWord);
                            return <span key={idx}>
                                <span className={`${css.word} ${isWord ? css.legit : css.notLegit}`}>
                                    {word.split('').map((c, idx) => {
                                            const cCyphertext = wordCyphertext[idx];
                                            const isLetterSet = alphaKey[cCyphertext.toUpperCase()];
                                            if (isCharacterALetter(c)) {
                                                return <span key={idx} className={`${css.letter} ${isLetterSet ? css.active : css.inactive}`} onClick={() => launchLetterPicker(cCyphertext)}>{c}</span>;
                                            }
                                        return <span key={idx}>{c}</span>;
                                    })}
                                </span>
                                {" "}
                            </span>;
                        })
                    }
                </CardContent>
            </Card>
        </div>
    )
};

DecodingDisplay.propTypes = {
    cyphertext: PropTypes.string,
    alphaKey: PropTypes.objectOf(PropTypes.any),
    launchLetterPicker: PropTypes.func.isRequired,
};

export default DecodingDisplay;
