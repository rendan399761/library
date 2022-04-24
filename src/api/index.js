import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import DuzheController from './Duzhe'
import TushuleixingController from './Tushuleixing'
import TushuxinxiController from './Tushuxinxi'
import TushujieyueController from './Tushujieyue'
import TushuguihaiController from './Tushuguihai'
import WeiguichuliController from './Weiguichuli'
import StoreupController from './Storeup'
import NewsController from './News'
import DiscusstushuxinxiController from './Discusstushuxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/duzhe', DuzheController({ config, db }))

	api.use('/tushuleixing', TushuleixingController({ config, db }))

	api.use('/tushuxinxi', TushuxinxiController({ config, db }))

	api.use('/tushujieyue', TushujieyueController({ config, db }))

	api.use('/tushuguihai', TushuguihaiController({ config, db }))

	api.use('/weiguichuli', WeiguichuliController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/discusstushuxinxi', DiscusstushuxinxiController({ config, db }))

	return api
}
