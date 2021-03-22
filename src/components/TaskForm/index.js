import { Box, Button, Grid, Modal } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, onClose, classes } = this.props;
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Tiêu đề"
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-textarea"
                label="Mô tả"
                placeholder="Placeholder"
                multiline
                className={classes.textfield}
              />
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" flexDirection="row-reverse">
                <Box ml={1}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={onClose}
                  >
                    Hủy bỏ
                  </Button>
                </Box>

                <Button variant="contained" color="primary">
                  Lưu lại
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.shape({
    modal: PropTypes.shape.isRequired,
    textfield: PropTypes.shape.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskForm);
