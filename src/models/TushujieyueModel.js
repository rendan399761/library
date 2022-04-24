import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 图书借阅
const TushujieyueModel = sequelize.define('TushujieyueModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	jieyuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '借阅号'
	},
	tushubianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图书编号'
	},
	tushumingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图书名称'
	},
	tushuleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图书类型'
	},
	zuozhe: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '作者'
	},
	jieshushijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('jieshushijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '借书时间'
	},
	jianshu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '简述'
	},
	shuliang: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '数量'
	},
	chubanshe: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '出版社'
	},
	zhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '账号'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
	},
	shenfenzheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '身份证'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'tushujieyue'
})

export default TushujieyueModel
