import types, { updateMedsRequest, updateMedsSuccess, updateMedsFail } from './actions'
import { UpdateMedsEpic } from './epics'
import reducer from './reducer'

export {
  reducer as default,
  types, updateMedsRequest, updateMedsSuccess, updateMedsFail,
  UpdateMedsEpic
}