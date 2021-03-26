import { Modal, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, compose, } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';

class CommonModal extends Component {
  render() {
    const { classes, open, title, component, modalActionsCreator, } = this.props;
    const { hideModal, } = modalActionsCreator;
    return (
      <Modal
        open={open}
        onClose={hideModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

CommonModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  component: PropTypes.shape.isRequired,
  modalActionsCreator: PropTypes.shape({
    hideModal: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
