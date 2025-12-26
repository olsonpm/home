import { transitionDurMs } from './style-variables'
import { pWaitMs } from 'common-fp'

const nbsp = '\xa0'

const waitAnimationDur = () => pWaitMs(transitionDurMs)

export { nbsp, waitAnimationDur }
