import user from './users.js'


user.signup('rafael.montefalco@gmail.com', 'knoxx3434')
    .then((userCredential) => {
        console.log(userCredential.email)
        
    }).catch((error) => {
        console.log(error)
    })