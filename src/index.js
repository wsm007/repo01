// import { getTitle, getAuthor } from './functions.js'
// import { curso } from './objects.js'

// console.log(getTitle())
// console.log(getAuthor())
// console.log(curso)

import { config } from "dotenv";
import env from 'env-var';

config()
const PORT = env.get('PORT').required().asPortNumber()

console.log(PORT)


// console.log( process.env.PORT )
// console.log( process.env.DB_USER )
// console.log( process.env.DB_PASS )