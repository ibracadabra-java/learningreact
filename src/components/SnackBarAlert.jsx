import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import {Snackbar} from '@material-ui/core'

function Alert(props) {
  return <MuiAlert elevation={5} variant="filled" {...props} />;
}
export function SnackBarAlert({open,onClose,message}) {
    return (
        <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={onClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
        </div>
    )
}
