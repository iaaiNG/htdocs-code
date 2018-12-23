function todo(key){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(key)
    },2000)
  })
  // setTimeout(()=>{
  //   console.log(key)
  // },2000)
}
// todo('jkm')
// .then(res=>{
//   console.log(res)
//   return todo('lqw')
// })
// .then(res=>{
//   console.log(res)
//   return todo('zal')
// })
// .then(res=>{
//   console.log(res)
// })




async function todosth(){
  console.log(await todo('张三锋'))
  await setTimeout(()=>{
    console.log(123)
  },2000)
  console.log(333)
}
todosth()