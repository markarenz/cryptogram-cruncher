import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Social } from '@components';
import css from '@css/components/footer.module.scss';

const Footer = () => {
    return (
        <footer className={css.root}>
            <Container>
                <Grid container spacing={3} className={css.footerMain}>
                    <Grid item xs={12} sm={4}>
                        <h3>About</h3>
                        <p>
                            Cryptograms are a genre of puzzle based on simple substitution cyphers commonly included in "variety puzzle" magazines you can pick up at the grocery store.
                            They usually take a couple of minutes to solve, but I wanted to see if you could solve them in a couple of seconds with this tool.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h3>How to Use</h3>
                        <ul>
                            <li>
                                <span>
                                    Enter the cyphertext from the puzzle and click Begin.
                                </span>
                            </li>
                            <li>
                                <span>
                                    To play manually, click on letters in the message to set the key for that letter.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Use the advice on the analytics panel to guide you.
                                </span>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <h3>Obligatory Social Plug</h3>
                        <Social />
                    </Grid>
                </Grid>
            </Container>
            <div className={css.copyright}>
                &copy;{new Date().getFullYear()} Mark Arenz / <a href="https://www.markmakesstuff.com" target="_blank" rel="noopener noreferrer">MarkMakesStuff.com</a>
            </div>
        </footer>
    )
};

export default Footer;
