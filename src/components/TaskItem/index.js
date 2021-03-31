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
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { task, classes, status, onClickEdit, } = this.props;
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
            onClick={onClickEdit}
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

TaskItem.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.shape.isRequired,
    label: PropTypes.shape.isRequired,
    CardActions: PropTypes.shape.isRequired,
    fab: PropTypes.shape.isRequired,
  }).isRequired,
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  status: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  onClickEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskItem);
