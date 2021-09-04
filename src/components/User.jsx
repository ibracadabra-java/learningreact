import {React,useState,useEffect} from 'react'
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import {UserCard} from './UserCard'
import {UserDetails} from './UserDetails';
import { SnackBarAlert } from './SnackBarAlert';
export function User() {
    const[open,setOpen] = useState(false)
    const [userData,setUser] = useState({})
    const [updateData,setupdateData] = useState({})
    const[message,setMessage]=useState("Ha ocurrido un error")  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    useEffect(() => {      
      getTask()
    },[])
    const getTask = async() =>{
      const data =await fetch('https://localhost:44384/api/account/getuser?id=1')
      const user = await data.json()
      setUser(user)
      setupdateData({
        FullName:userData.fullName,
        Gender:userData.Gender,
        Birthday:userData.birthDate,
        Phone:userData.Phone
      })
      console.log(user)
    }
    const handleSubmit = async e =>{      
       e.preventDefault()
       try {
           let config = {
               method : 'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-type':'application/json'
               },
               body:JSON.stringify(updateData)
           }
           let res = await fetch('https://localhost:44384/api/account/update-profile',config)
           //let json = await res.json()
           setMessage('Usuario editado correctamente')
           setOpen(true)
           //console.log(json)           
                    
           /*history.push('/home',json.result.fullName)*/
       } catch (error) {           
       }       
   }
    const handleChange = (event) => {
        setUser({
          ...userData,
          [event.target.name]: event.target.value
        });
        setupdateData({
          FullName:userData.fullName,
          Gender:userData.Gender,
          Birthday:userData.birthDate,
          Phone:userData.Phone
        })
      };
    return (       
        <>
        <SnackBarAlert open={open} onClose={handleClose} message={message}/>  
        <Helmet>
          <title>Account | UserTask</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <UserCard data={userData} />
              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
                <UserDetails data={userData} onChange={handleChange} onSubmit={handleSubmit} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    )
}
