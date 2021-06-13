import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { Twitter as IconTwitter, LinkedIn as IconLinkedIn, GitHub as IconGitHub } from '@material-ui/icons';
import { socialLinks } from '@data/constants';
import css from '@css/components/social.module.scss';

const Social = () => {
    return (
        <Grid container spacing={3} className={css.root}>
            <Grid item xs={4} align="center">
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <IconTwitter />
                    </IconButton>
                </a>
            </Grid>
            <Grid item xs={4} align="center">
                <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <IconLinkedIn />
                    </IconButton>
                </a>

            </Grid>
            <Grid item xs={4} align="center">
                <a href={socialLinks.gitHub} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <IconGitHub />
                    </IconButton>
                </a>
            </Grid>
        </Grid>
    )
};

export default Social;
