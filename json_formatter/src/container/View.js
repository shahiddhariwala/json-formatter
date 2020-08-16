import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./View.module.css";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import JSONDisplayer from "../component/JsonDiplay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {

    const [jsonRawData, setRawData] = useState();
    const [showJson,setShowJson] = useState(false);

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
                setShowJson(showJson=>true);
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
                setShowJson(showJson=>false);
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
            setShowJson(showJson=>false);
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
                            Pretty JSON
                            </Button>
                    </Paper>
                </Grid>
                <Grid item xs={5} spacing={1} className={styles.GridRoot3} style={{ textAlign: "left" }}>
                    <Paper className={styles.PaperStyle3} ><span >Formatted JSON</span>
                        {showJson ? <JSONDisplayer>{JSON.parse(jsonRawData)}</JSONDisplayer> : null }
                    </Paper>
                </Grid>
            </Grid>
        </>
    );




}

export default View;


/* Raw JSON Data

{"data":[{"stuff":[
    {"onetype":[
        {"id":1,"name":"John Doe"},
        {"id":2,"name":"Don Joeh"}
    ]},
    {"othertype":[
        {"id":2,"company":"ACME"}
    ]}]
},{"otherstuff":[
    {"thing":
        [[1,42],[2,2]]
    }]
}]}


*/