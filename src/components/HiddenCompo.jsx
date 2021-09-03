import React from 'react'
import { withWidth } from '@material-ui/core'
import { Typography ,Hidden,Button} from '@material-ui/core'

 function HiddenCompo(props){    
    return (
        <div>
          <Typography variant="h6" color="initial">
              Ancho:{props.width}
          </Typography>
          <Hidden xsDown>
              <Button>
                  xs
              </Button>
          </Hidden>
        </div>
    )
}
export default withWidth()(HiddenCompo)