
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export interface ProductData {
  brand: string;
  price: number;
  images: string[];
  title: string;
  rating: number;
  category:string;
}

const Product: React.FC<ProductData> = ({ brand, price, images, title, rating }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 300,height:300,padding:"2rem" }}>
        <CardMedia
          sx={{ height: 140, objectFit: 'contain' }}
          image={images[0]}
          title="Product Image"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brand: {brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {rating}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
