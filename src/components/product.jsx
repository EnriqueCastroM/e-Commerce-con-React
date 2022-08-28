import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import accounting from "accounting";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product : {_id, product_name, price, description, image, category}}) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            
            {accounting.formatMoney(50)}
          </IconButton>
        }
        title={"Producto"}
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={"https://www.ecestaticos.com/image/clipping/d0d127b5b80c69905e744d76a836d4c8/un-planeta-doble-que-no-se-ve-desde-la-edad-media-el-fenomeno-unico-de-jupiter-y-saturno.jpg"}
        alt={"category"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Awesome Granite Bacon
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share">
          {Array(4)
          .fill()
          .map((_, i)=>(
            <StarIcon/>
          ))}
  
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
          {
            
          }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
