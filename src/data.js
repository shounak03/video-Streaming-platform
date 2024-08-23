export const YT_API_KEY = 'AIzaSyCnCJDSf8Mw_F1HSwQ7DjC9yEr72eA2qSU'

export const value_conv = (value)=>{
    if(value>=1000000)
            return Math.floor(value/1000000) + 'M';
    if(value>=1000)
            return Math.floor(value/1000) + 'K';
    else    return value
}