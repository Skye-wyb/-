let cookie = {
    set:function(key,value,time){
        let date = new Date()
        let expireDays = time
        date.setTime(date.getTime()+expireDays*24*3600*1000)
        document.cookie = key+'='+value+';expires='+date.toGMTString()
    },
    get:function(key){
        let getCookie = document.cookie.replace(/[ ]/g,"")
        let arrCookie = getCookie.split(';')
    }
}