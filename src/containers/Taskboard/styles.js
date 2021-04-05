const styles = (theme) => ({
  taskboard: {
    display: 'flex',
    alignItems: 'center',
  },
  shape: {
    margin: 10,
    padding: 20,
    borderRadius: 40,
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
  },
  modalConfirmTextBold: {
    fontWeight: 700,
  },
});

export default styles;
