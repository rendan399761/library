import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 违规处理
const WeiguichuliModel = sequelize.define('WeiguichuliModel', {
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
	chulileixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '处理类型'
	},
	jiaonafajin: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '缴纳罚金'
	},
	dengjishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('dengjishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '登记时间'
	},
	ispay: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否支付'
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
	tableName: 'weiguichuli'
})

export default WeiguichuliModel
