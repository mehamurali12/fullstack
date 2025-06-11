import React from 'react'
import ResponsiveAppBar from '../navbar/NavBar';
import Grid from '@mui/material/Grid';

function Home(){
  return (
    <div>
      <ResponsiveAppBar/>
      <Grid container spacing={2} style={{ padding: '20px'}}>
        <Grid size={{xs:12, md:6, lg:6}} >
          <h1>Welcome to the Home Page</h1>
          <p>This is a simple home page component</p>
          <p>You can add more content here as needed.</p>
        </Grid>
        <Grid size={{xs:12, md:6, lg:6}} >
          <img src="/undraw_task-list_qe3p.svg" alt="Task Illustration" style={{ width: '100%', maxWidth: '500px' }} />
        </Grid>
      </Grid>
    </div>
  )
}
export default Home;