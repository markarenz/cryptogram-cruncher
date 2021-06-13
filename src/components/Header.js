import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import css from '@css/components/header.module.scss'

const Header = ({ handleRestart }) => {
    return (
        <AppBar position="static" className={css.root}>
            <Toolbar>
                <h1>Cryptogram Cruncher</h1>
                <Button variant="outlined" color="inherit" onClick={handleRestart}>Start Over</Button>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    handleRestart: PropTypes.func.isRequired,
};

export default Header;
