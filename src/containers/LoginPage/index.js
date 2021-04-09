import { TextField, } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles, } from '@material-ui/styles';
import React from 'react';
import { Link, } from 'react-router-dom';
import styles from './styles';

function LoginPage(props) {
  const { classes, } = props;

  return (
    <div className={classes.background}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />

        <CardContent>
          <form>
            <Typography gutterBottom variant="h5" component="h2">
              Đăng nhập để tiếp tục
            </Typography>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
            >
              Login
            </Button>

            <div>
              <Link to="/signup">
                <Button size="small" fullWidth>
                  Đăng ký tài khoản mới
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(LoginPage);
