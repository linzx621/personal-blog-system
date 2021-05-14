import "@/mock/message";
import request from "./request";

window.getMessage = getMessage;
export async function getMessage(page = 1, limit = 10) {
    return await request.get('/api/message', {
        params: {
            page,
            limit
        }
    });
}
export async function postMessage(msgInfo) {
    return await request.post('/api/message', msgInfo);
}