import types, { updateMedsRequest, updateMedsSuccess, updateMedsFail } from './actions'
import { UpdateMedicationsEpic } from './epics'
import reducer from './reducer'

export {
  reducer as default,
  types, updateMedsRequest, updateMedsSuccess, updateMedsFail,
  UpdateMedicationsEpic
}