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

    // signup(email, password) {
    //     return new Promise((resolve, reject) => {
    //         setPersistence(this.#auth, browserSessionPersistence)
    //         .then(async () => {
    //             this.#constraintPassword(password)
    //             return createUserWithEmailAndPassword(this.#auth, email, password)
    //         })
    //         .then((userCredential) => {
    //             resolve(userCredential)
    //         })

    //     })
    // }

    signup(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                await setPersistence(this.#auth, browserSessionPersistence)
                this.#constraintPassword(password)
                
                let userCredential = createUserWithEmailAndPassword(this.#auth, email, password)
                resolve((await userCredential).user)
            } catch (error) {
                reject(error)
            }
        });
    }
    

    #constraintPassword(p_password) {
        if (!StringValidator.containsLowercaseLetter(p_password)){
            throw new Error('Password must contain lower-cased characters.')
        } 
        if (StringValidator.containsNonNumericCharacter(p_password)) {
            throw new Error('Password must only contain alphnumeric characters.')
        }
    }
}

export default new User()