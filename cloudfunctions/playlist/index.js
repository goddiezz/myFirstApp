// 云函数入口文件
const cloud = require('wx-server-sdk')
//初始化云环境（改这个可以切换环境）
cloud.init({
  env: 'porice-5gymfr7u94e3079c'
})

//引入云数据库，并定义一个常量方便调用
const db = cloud.database()

//引入云数据库的playlist集合，并定义一个常量方便实用
const playlistCollection = db.collection('playlist')


// 云函数入口函数
exports.main = async (event, context) => {
  const res = await playListCollection.get()
  console.log('#######' + res.data)
  return res.data
}