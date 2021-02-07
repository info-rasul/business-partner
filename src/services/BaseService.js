import { Http } from "./Http";
export class BaseService {
    static get entity() {
        throw new Error("entity getter not defined");
    }
    static request(status = { auth: false }) {
        const http = new Http(status);
        return http.init();
    }
}
//# sourceMappingURL=BaseService.js.map