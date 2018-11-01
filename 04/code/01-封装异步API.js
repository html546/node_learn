function fn(callback){
    // var callback = function(data){console.log(data)}
    // setTimeout(function(){
    //     var data = 'hello'
    //     return data
    // },1000)

    // var data = '默认数据'
    // setTimeout(function(){
    //     data = 'hello'
    // },1000)
    // return data

    setTimeout(function(){
        var data = 'hello'
        callback(data);
    },1000)
}
// 调用fn，得到内部的data
// console.log(fn())

// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
fn(function(data){
    console.log(data)
})

// 回调函数:获取异步操作的结果

$.get('dasasdfas',function(data){

})

$.ajax({
    url:'adfasdasd',
    type:'get',
    data:{
        foo:'bar'
    },
    // 使用者只负责传递,封装者需要去调用
    success:function(){

    }
})

function ajax(options){
    options.success(data)
}