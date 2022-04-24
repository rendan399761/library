import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 图书归还
const TushuguihaiModel = sequelize.define('TushuguihaiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
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
	jianshu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '简述'
	},
	jieyuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '借阅号'
	},
	shuliang: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '数量'
	},
	guihaishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('guihaishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '归还时间'
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
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	shenfenzheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '身份证'
	},
	dengjishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('dengjishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '登记时间'
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
	tableName: 'tushuguihai'
})

export default TushuguihaiModel
