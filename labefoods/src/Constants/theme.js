import {red} from '@mui/material/colors'
import { createTheme } from '@mui/material'

const labeTheme = createTheme({
    pallete:{
        primary:{
            main:'#56cd6',
        },
        secondary:{
            main:'#19857b',
        },
        error:{
            main: red.A400
        }
    }
})

export default labeTheme