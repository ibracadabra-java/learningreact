import {React,useState,Fragment} from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    MenuItem 
  } from '@material-ui/core';
  import {SnackBarAlert} from './SnackBarAlert'
  
  const states = [
    {
      value: true,
      label: 'Done'
    },    
    {
      value: false,
      label: 'Pending'
    }
  ];

export function NewTask(props) {
    const[open,setOpen] = useState(false)
    const[usernametask,setUsername]=useState("UserTest")
    const [values, setValues] = useState({
      Name: '',
      User: '',
        state: 'Done'        
      });
      const[message,setMessage]=useState("Ha ocurrido un error")      
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      
      const handleSubmit = async e =>{        
         e.preventDefault()
         try {
             let config = {
                 method : 'POST',
                 headers:{
                     'Accept':'application/json',
                     'Content-type':'application/json'
                 },
                 body:JSON.stringify(values)
             }
             let res = await fetch('https://localhost:44384/api/Task/Create',config)
             let json = await res.json() 

             setMessage(json)
             setOpen(true)                                    
                console.log(json)
              setValues({
                Name: '',
                User: '',
                  state: 'Done'        
                })
         } catch (error) {
          console.log(error)
         }         
     }
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
        setUsername(event.target.value);
      };     
    return (        
      <>
      <SnackBarAlert open={open} onClose={handleClose} message={message}/>   
            <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Task"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Name Task"
                label="Name Task"
                name="Name"
                onChange={handleChange}
                required
                value={values.taskname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                select
                label="User name"
                name="User"
                onChange={handleChange}
                required
                value={usernametask}
                variant="outlined"
              >
                <MenuItem key={1} value={1}>
              {"Raul Meno"}
            </MenuItem>
            <MenuItem key={2} value={2}>
              {"Alex Meno"}
            </MenuItem>
                </TextField>
            </Grid>            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Add Task
          </Button>
        </Box>
      </Card>
    </form>   
    </>     
    )
}
