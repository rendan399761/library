import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 图书信息
const TushuxinxiModel = sequelize.define('TushuxinxiModel', {
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
	tupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	jianshu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '简述'
	},
	zuozhe: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '作者'
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
	xiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '详情'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
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
	tableName: 'tushuxinxi'
})

export default TushuxinxiModel
