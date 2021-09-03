import React from 'react'
import {Box,Grid} from '@material-ui/core'

export function BoxComponents() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box border={1}>
                        xs 121
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box border={1}>
                        xs 121
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
