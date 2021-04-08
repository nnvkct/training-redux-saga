const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 10,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.primary,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuLinkActive: {
    '&>div': { backgroundColor: theme.color.hover, },
  },
});

export default styles;
