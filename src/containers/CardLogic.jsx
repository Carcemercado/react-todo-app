import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
        <Button size="small">Add Item</Button>
        <Button size="small">Remove Item</Button>
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
