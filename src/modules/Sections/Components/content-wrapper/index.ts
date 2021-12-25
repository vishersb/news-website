import { ContentWrapper as Component} from './content-wrapper';
import { withStyles } from '@mui/styles';
const ContentWrapper = withStyles({
    mainWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    itemWrapper:{
        width: '30%',
    },
    img:{
        width: '100%',
        marginTop: '-5px',
    },
    description:{
        margin:0,
        marginTop: '-5px',
        color:'white',
        backgroundColor: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        borderTop: '2px solid purple',
        borderBottom: '2px solid purple',
        marginBottom: '5px',
        paddingBottom: 7,
        paddingLeft: 5,
    },
    title:{
        color:'white',
        backgroundColor: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        margin:0,
        height: '30px',
        borderTop: '2px solid purple',
        borderBottom: '6px solid purple',
        paddingTop: 7,
        paddingLeft: 5,
    }
  })(Component);
export { ContentWrapper };