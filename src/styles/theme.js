import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {fade} from 'material-ui/utils/colorManipulator';
import {
  red500, red700, grey300, grey400, grey500, grey700,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

export const palette = {
  primary1Color: red500,
  primary2Color: red700,
  primary3Color: grey400,
  accent1Color: grey700,
  accent2Color: grey700,
  accent3Color: grey500,
  textColor: darkBlack,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey300,
  disabledColor: fade(darkBlack, 0.3),
  pickerHeaderColor: red500,
  clockCircleColor: fade(darkBlack, 0.07),
  shadowColor: fullBlack,
}

export default getMuiTheme({ palette })