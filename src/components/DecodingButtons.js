import React from 'react';
import {Grid, Button} from '@material-ui/core';
import {Casino as IconRandom, Shuffle as IconShuffle, Undo as IconRevert} from "@material-ui/icons";
import PropTypes from 'prop-types';

const DecodingButtons = ({ handleRandomize, handleRevert, handleBatchTest }) => <Grid item xs={12} className="button-row" align="right">
    <Button
        variant="contained"
        onClick={handleRevert}
    >
        <IconRevert />
        Revert
    </Button>

        <Button
            variant="contained"
            onClick={handleRandomize}
        >
            <IconRandom />
            Randomize
        </Button>
        <Button
            variant="contained"
            onClick={handleBatchTest}
        >
            <IconShuffle />
            Batch Test
        </Button>
    </Grid>;

DecodingButtons.propTypes = {
    handleRandomize: PropTypes.func.isRequired,
    handleRevert: PropTypes.func.isRequired,
    handleBatchTest: PropTypes.func.isRequired,
};

export default DecodingButtons;
