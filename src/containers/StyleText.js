import React, { useState } from 'react';
import { Container, Button, Grid, Card, CardHeader, CardContent, TextField } from '@material-ui/core';
import { LetterPicker } from '@components';

const CryptogramCrusherMain = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [activeLetter, setActiveLetter] = useState('');
    const [letterPickerOpen, setLetterPickerOpen] = useState(false);
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const testFunc = () => {
        setActiveLetter('a');
        setLetterPickerOpen(true);
    };
    const handleCloseLetterPicker = () => {
        setLetterPickerOpen(false);
    };
    return (
        <div>
            <h1>
                This is an H1 Headline
            </h1>
            <div className="test" />
            <h2>
                This is an H2 Headline
            </h2>
            <div className="test" />
            <h3>
                This is an H3 Headline
            </h3>
            <div className="test" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            </p>
            <p>
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
            </p>
            <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
            </p>
            <div className="test" />
            <div className="py-2 button-row">
                <Button
                    variant="outlined"
                >
                    Outlined Button
                </Button>
                <Button
                    variant="contained"
                >
                    Filled Button
                </Button>
            </div>

            <div className="test" />
            <Container className=" mt-2 mb-5">
                <Card>
                    <CardHeader title="Card Title" />
                    <CardContent>
                        <h1 className="m-0 p-0">This is a card</h1>
                        <h2>The card has a form in it.</h2>

                        <p className="mt-1">
                            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
                        </p>
                        <p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                        </p>

                        <div className="form mt-2">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        value={firstName}
                                        onChange={handleChangeFirstName}
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        calue={lastName}
                                        onChange={handleChangeLastName}
                                        placeholder="Last Name"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="text-right mt-1 button-row">
                            <Button
                                variant="outlined"
                                className="reversed"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                className="reversed"
                                onClick={testFunc}
                            >
                                SUBMIT
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Container>
            <LetterPicker
                isOpen={letterPickerOpen}
                activeLetter={activeLetter}
                handleClose={handleCloseLetterPicker}
            />
        </div>
    )
};

export default CryptogramCrusherMain;
