import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./View.module.css";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';

const View = () => {

    const [jsonRawData, setRawData] = useState("");

    const onChangeHandler = (e) => {
        e.persist();
        if (e.target && e.target.value) {
            setRawData(jsonRawData => e.target.value);
        }

    }
    return (
        <>
            <Grid container spacing={1} direction="row"
                justify="space-around"
                alignItems="stretch">
                <Grid item xs={4} spacing={1} className={styles.GridRoot1}>
                    <Paper className={styles.PaperStyle}><br />
                        <TextField className={styles.InputStyle} id="outlined-basic" label="Raw JSON" variant="outlined" multiline="true" onChange={(e) => onChangeHandler(e)} onBlur={(e) => onChangeHandler(e)} value={jsonRawData} />
                        {/* <TextareaAutosize aria-label="minimum height" className={styles.InputStyle} rowsMin={35} placeholder="Minimum 3 rows" /> */}

                    </Paper>
                </Grid>
                <Grid item xs={4} spacing={1} className={styles.GridRoot2}>
                    <Paper className={styles.PaperStyle} style={{ textAlign: "center", justifyContent: "center" }}>
                        <Button variant="contained" color="primary" style={{ textAlign: "center", justifyContent: "center", marginTop: "60%" }}>
                            Format JSON
                            </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4} spacing={1} className={styles.GridRoot3}>
                    <Paper className={styles.PaperStyle}>Formatted JSON
                    <br />
                        {jsonRawData}
                    </Paper>
                </Grid>
            </Grid>
        </>
    );




}

export default View;
