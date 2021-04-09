const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirecton: 'row',
  },
  wrapperSidebar: {
    height: '100%',
  },
  wrapperContent: {
    width: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  shiftLeft: {
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

export default styles;
