import user from './users.js'


user.signup('zamiel.mercadesjas@gmail.com', 'za@$%miel123M')
    .then((result) => {
        console.log(result)
        
    }).catch((err) => {
        console.log(`Error ${err.code}: ${err.mess}`)
    })