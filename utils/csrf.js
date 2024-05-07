export async function fetchCSRFToken(){
    const response=await fetch("http://localhost:8080/csrf-token/",{
        method:"GET",
        credentials:'include'
        });
    const data=await response.json();
    console.log(data);
    return data.csrfToken;
}
