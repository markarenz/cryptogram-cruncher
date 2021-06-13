import React, {useState} from 'react';
import {defaultText} from "@data/constants";
import PropTypes from 'prop-types';
import { Grid, Button, TextField } from '@material-ui/core';
import { PlayArrow as IconBegin, LowPriority as IconEncrypt } from '@material-ui/icons';
import { removeExtraSpaces, randomizeKey, getDecryptedText } from '@functions/helpers';
import { defaultAlphaKey } from '@data/constants';
import css from '@css/components/cyphertextEntry.module.scss';

const CyphertextEntry = ({ handleSaveCyphertext }) => {
    const [tempCyphertext, setTempCyphertext] = useState(removeExtraSpaces(defaultText));
    const handleChangeText = (e) => {
        setTempCyphertext(e.target.value.toUpperCase());
    };
    const handleEncryptPlaintext = () => {
        const tempAlphaKey = randomizeKey(defaultAlphaKey);
        const newTempCyphertext = getDecryptedText(tempCyphertext, tempAlphaKey);
        setTempCyphertext(newTempCyphertext);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h3 className="mt-1">Enter Cyphertext</h3>
                <TextField
                    value={tempCyphertext}
                    onChange={handleChangeText}
                    variant="outlined"
                    multiline
                    className={`overDark ${css.textField}`}
                    autoFocus
                />
            </Grid>
            <Grid item xs={12} align="right" className="button-row">
                <Button variant="contained" onClick={handleEncryptPlaintext}>
                    <IconEncrypt />
                    Encrypt Plaintext
                </Button>
                <Button variant="contained" onClick={() => handleSaveCyphertext(tempCyphertext)}>
                    <IconBegin />
                    Begin
                </Button>
            </Grid>
        </Grid>
    )
};

CyphertextEntry.propTypes = {
    handleSaveCyphertext: PropTypes.func,
};

export default CyphertextEntry;
