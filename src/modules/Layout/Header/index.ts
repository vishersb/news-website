import { withStyles } from '@mui/styles';
import { styles } from './Header.styles';
import { Header as Component } from "./Header";
const Header = withStyles(styles)(Component);

export {Header};