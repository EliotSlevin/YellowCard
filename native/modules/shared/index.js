import * as colors from './colors'
import './rxjs-operators'
import reducer from './reducer'
import { initFirebaseRequest } from './actions'
import { InitFirebaseEpic } from './epics'

export { colors, reducer as default, InitFirebaseEpic, initFirebaseRequest }