export default function getHeaderToken() {
  const data = JSON.parse(localStorage.token);
  console.log("ACA ESTA LA DATA", data);
  return {
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
      Authorization: "Bearer " + data.access_token,
    },
  };
}
export function getScope(){
   const data = JSON.parse(localStorage.token);
   return data.scope
}