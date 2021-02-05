import axios from "axios";
export class Http {
    constructor(status) {
        this.isAuth = status && status.auth ? status.auth : false;
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        });
        this.init();
    }
    init() {
        if (this.isAuth) {
            this.instance.interceptors.request.use(request => {
                request.headers.authorization = process.env.VUE_APP_BEARER;
                return request;
            }, error => {
                return Promise.reject(error);
            });
        }
        return this.instance;
    }
}
//# sourceMappingURL=Http.js.map