import { Http } from "./Http";
export class BaseService {
    static request(status = { auth: false }) {
        const http = new Http(status);
        return http.init();
    }
}
//# sourceMappingURL=BaseService.js.map