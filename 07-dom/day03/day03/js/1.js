(()=>{
    ajax("get","getFamily.php","")
        .then(data=>{
            console.log(data)
        })
})()