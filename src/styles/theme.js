import getMuiTheme from 'material-ui/styles/getMuiTheme'

export const red          = '#FF1818'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'


export const palette = {
  primary1Color: red,
  primary2Color: red,
  primary3Color: red,
  accent1Color: darkRed,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })