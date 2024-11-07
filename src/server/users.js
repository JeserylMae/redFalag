import { 
    getAuth,
    setPersistence, 
    browserSessionPersistence,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
} from 'firebase/auth'

import firebaseApp from './firebaseconfig.js'
import StringValidator from './validation/string.js'


class User {
    
    #auth

    constructor() {
        this.#auth = getAuth(firebaseApp)
    }

    signin(email, password) {
        setPersistence(this.#auth, browserSessionPersistence)
        .then((result) => {
            return signInWithEmailAndPassword(this.#auth, email, password)
        })
        .catch((error) => {
            throw new Error(`Error ${error.code}: ${error.message}`)
        })
    }

    signup(email, password) {
        return new Promise((resolve, reject) => {
            setPersistence(this.#auth, browserSessionPersistence)
            .then(async () => {
                this.#constraintPassword(password)
                return createUserWithEmailAndPassword(this.#auth, email, password)
            })
            .then((userCredential) => {
                resolve(userCredential)
            })
        })
    }

    #constraintPassword(pwdStatus) {
        if (!StringValidator.containsLowercaseLetter){
            return reject (new Error({
                code: 200,
                message: 'Password must contain lower-cased characters.'
            }))
        } 
        if (StringValidator.containsNonNumericCharacter) {
            return reject(new Error({
                code: 200,
                message: 'Password must only contain alphnumeric characters.'
            }))
        }
    }
}

export default new User()