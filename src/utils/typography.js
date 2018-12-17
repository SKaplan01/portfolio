import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'
lincolnTheme.bodyFontFamily = [
  'Varela Round',
  'Varela',
  'Avenir Next',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]
lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h3': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(1 / 2),
  },
  p: {
    baseFontSize: rhythm(1 / 2),
  },
})
const typography = new Typography(lincolnTheme)

export default typography
