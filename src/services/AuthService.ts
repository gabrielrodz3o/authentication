import { Ref, ref } from "vue";
class AuthService {

    private jwt: Ref<string>
    private error: Ref<string>
    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(): Ref<string> {
        return this.jwt

    }
    getErrir(): Ref<string> {
        return this.error

    }
    async login(email: string, password: string): Promise<boolean> {
        try {
            const resp = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const response = await resp.json()
            if ('errors' in response) {
                this.error.value = "Login Failed"
                return false
            }
            this.jwt.value = response.data.acces_token
            return true


        }
        catch (err) {
            console.log(err)
            return false
        }
    }
}
export default AuthService