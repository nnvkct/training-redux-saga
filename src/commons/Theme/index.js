import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#4791db',
    secondary: '#e33371',
    error: '#d32f2f',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    background: '#115293',
    textColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
});

export default theme;
