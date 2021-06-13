import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@material-ui/core';
import { Close as IconClose } from '@material-ui/icons';
import PropTypes from 'prop-types';
import css from '@css/components/letterPicker.module.scss';

const LetterPicker = ({ isOpen, handleClose, activeLetter, alphaKey, handleLetterPickerClick }) => {
    const currentTranslation = alphaKey[activeLetter?.toUpperCase()];
    return (
        <Dialog open={isOpen} className={css.root}>
            <IconButton
                onClick={handleClose}
                className={css.closeBtn}
            >
                <IconClose />
            </IconButton>
            <DialogTitle className="m-0">
                {activeLetter?.toUpperCase()} = {currentTranslation ? currentTranslation?.toUpperCase() : '?'}
            </DialogTitle>
            <DialogContent>
                <div className={css.letterButtonsWrap}>
                    {
                        Object.keys(alphaKey).map((k, idx) => <div className={css.letterButtonWrap} key={idx}>
                            <IconButton
                                className={`${css.letterButton} ${k === currentTranslation?.toUpperCase() && css.isActive}`}
                                variant="outlined"
                                disabled={k === activeLetter}
                                onClick={() => handleLetterPickerClick(activeLetter.toUpperCase(), k.toLowerCase())}
                            >
                                {k}
                            </IconButton>
                        </div>)
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
};

LetterPicker.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    activeLetter: PropTypes.string,
    alphaKey: PropTypes.objectOf(PropTypes.any),
    handleLetterPickerClick: PropTypes.func,
};

export default  LetterPicker;
