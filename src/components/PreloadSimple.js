import React, {Fragment} from "react"
 
import { Grid} from '@material-ui/core'
//import config from "./../store/config/config.json";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function PreloadSimple(props) {
    return (
        <Fragment>
            <main className="main_content preload preload-common">
                <div className="container-preload-image">
                    <div className="inner-preload-image">
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <div className="text-center">
                                    <CircularProgress />
                                    <h2 className="title">{props.text !== undefined ? props.text : ""}</h2>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </main>
        </Fragment>
    )
}
