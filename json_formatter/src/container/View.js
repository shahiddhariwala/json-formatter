import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./View.module.css";

class View extends Component {
    render() {
        return (
            <>
                <Grid container spacing={1} direction="row"
                    justify="space-around"
                    alignItems="stretch">
                    <Grid item xs={4} spacing={1} className={styles.GridRoot1}> 
                        <Paper className={styles.PaperStyle}>Raw JSOn</Paper>
                    </Grid>
                    <Grid item xs={4} spacing={1} className={styles.GridRoot2}>
                        <Paper className={styles.PaperStyle}> Button to Modify</Paper>
                    </Grid>
                    <Grid item xs={4} spacing={1} className={styles.GridRoot3}>
                        <Paper className={styles.PaperStyle}>JSon Formatted</Paper>
                    </Grid>
                </Grid>
            </>
        );
    }



}

export default View;
