// Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Components 
import InputForm from '../components/InputForm';

function CardLogic({ cardTitle, cardDescription }) {
  
  const card = (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2">
          {cardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <InputForm />
      </CardActions>
    </>
  );

  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

export default CardLogic;
