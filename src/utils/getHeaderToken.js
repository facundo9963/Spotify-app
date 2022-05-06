export default function getHeaderToken() {
    return {
       headers: {
        Authorization: 'Bearer '+localStorage.token.slice(1).slice(0, -1),
       }
    }
 }