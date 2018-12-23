// var config = require('../config')
import config from '../config'

export function request(url, method, data){
  return new Promise((resolve, reject)=>{
    wx.request({
      data,
      method,
      url:config.host + url,
      success(res){
        if(res.data.code==0){
          resolve(res.data.data)
        }else{
          showModal('失败',res.data.data.msg)
          reject(res.data)
        }
      }
    }) 
  })
}

export function showSuccess(text){
  wx.showToast({
    title:text,
    icon:'success',
    duration: 2000
  })
}

export function showModal(title,content){
 wx.showModal({
   title,
   content,
   showCancel:false
 })
}