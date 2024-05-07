import {cookies} from "next/headers";
import {fetchCSRFToken} from "@/utils/csrf";

export default async function csrf(){
    const csrf=cookies().get('csrftoken')
    const csrfToken = await fetchCSRFToken();
    return (
        <>
            <p>this is the {csrf?csrf:'XXX'} token</p>
            <p>this is the token fetched by fetch CSRF Token {csrfToken}</p>
        </>
    )
}