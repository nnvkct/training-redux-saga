import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { withStyles, } from '@material-ui/styles';
import React, { Component, } from 'react';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { task, classes, status, } = this.props;
    const { title, id, description, } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography component="h2">{status.label}</Typography>
            </Grid>
          </Grid>
          <p>{description}</p>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Fab
            color="primary"
            aria-label="edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="delete"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
