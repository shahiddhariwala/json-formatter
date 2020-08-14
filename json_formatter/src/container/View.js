import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./View.module.css";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
// import JSONPretty from 'react-json-prettify';
import JSONDisplayer from "../component/JsonDiplay";
// import {github} from 'react-json-prettify/themes';
import JSONPretty from 'react-json-pretty';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {

    const [jsonRawData, setRawData] = useState();

    const onChangeHandler = (e) => {
        e.persist();
            setRawData(jsonRawData => e.target.value);


    }
    const checkJSON = () => {
        if (jsonRawData) {
            try {
                let newData = JSON.parse(jsonRawData);
                toast.success("You are seeing the Beautiful JSON !", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            catch (e) {
                toast.error("Error !", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        else {
            toast.warn("Please put some life in  Raw JSON 🎇!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Grid container spacing={1} direction="row"
                justify="space-around"
                alignItems="stretch">
                <Grid item xs={4} spacing={1} className={styles.GridRoot1}>
                    <Paper className={styles.PaperStyle1}><br />
                        <TextField className={styles.InputStyle} id="outlined-basic" label="Raw JSON" variant="outlined" multiline="true" onChange={(e) => onChangeHandler(e)} onBlur={(e) => onChangeHandler(e)} value={jsonRawData} />
                        {/* <TextareaAutosize aria-label="minimum height" className={styles.InputStyle} rowsMin={35} placeholder="Minimum 3 rows" /> */}

                    </Paper>
                </Grid>
                <Grid item xs={2} spacing={1} className={styles.GridRoot2}>
                    <Paper className={styles.PaperStyle2} style={{ textAlign: "center", justifyContent: "center" }}>
                        <Button variant="contained" color="primary" style={{ textAlign: "center", justifyContent: "center", marginTop: "150%" }} onClick={checkJSON}>
                            Check Error
                            </Button>
                    </Paper>
                </Grid>
                <Grid item xs={5} spacing={1} className={styles.GridRoot3} style={{ textAlign: "left" }}>
                    <Paper className={styles.PaperStyle3} ><span >Formatted JSON</span>
                        {/* {jsonRawData ? <JSONDisplayer>{jsonRawData}</JSONDisplayer> : null }
                    <div><pre>{ JSON.stringify(jsonRawData, null, 2) }</pre></div>
                    <JSONPretty json={jsonRawData} theme={github} padding={4} /> */}
                        <JSONPretty id="json-pretty" data={jsonRawData} ></JSONPretty>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );




}

export default View;
