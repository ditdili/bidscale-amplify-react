import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const Navbar = ({ signOut }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add Alert
          </Typography>
          <Button color="inherit" variant="outlined" onClick={signOut}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
