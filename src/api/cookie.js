import Cookies from 'js-cookie'   //js-cookie是一个简单的，轻量级的处理cookies的js API。

const tokenKey = 'ssc-Token';
//存
export function setToken(token){
    // return Cookies.set(tokenKey, token);
    //expires: 7设置有效期
    // return Cookies.set(tokenKey, token, { expires: 7, path: '' });
    return Cookies.set(tokenKey, token)
}
//取
export function getToken(){
    return Cookies.get(tokenKey)
}
//删除
export function removeToken(){
    return Cookies.remove(tokenKey)
}


