// import jsonwebtoken
const jwt = require('jsonwebtoken')

const db = require('./db')

users = {
    1: { name: "Ramu", email:"ramu@gmail.com", password: "1000", balance: 5000, transaction: [] },
    2: { name: "Raju", email:"raju@gmail.com", password: "1001", balance: 5000, transaction: [] },
    3: { name: "Ravi", email:"ramu@gmail.com", password: "1002", balance: 5000, transaction: [] }
}

const register = (name, email, password) => {

    return db.User.findOne({ email }).then(user => {
        if (user) {
            return {
                statusCode: 401,
                status: false,
                message: "account already exists..please login!!"
            }
        }
        else {
            const newUser = new db.User({
                name,
                email,
                password,
                balance: 0,
                transaction: []
            })
            newUser.save()
            return {
                statusCode: 200,
                status: true,
                message: "account successfully created!!"
            }
        }
    })
}

const login = (email, password) => {
    return db.User.findOne({
        email,
        password
    }).then(user => {
        if (user) {
            currentAcno = email
            // currentUserName = user.uname

            // token generation
            // const token = jwt.sign({
            //     currentAcc: email
            // }, 'supersecretkey123')

            return {
                statusCode: 200,
                status: true,
                message: "Login success",
                currentAcno
                // token
            }

        }

        return {
            statusCode: 401,
            status: false,
            message: "Invalid credentials"
        }

    })



}

const deposit = (email, password, amt) => {
    let amount = parseInt(amt)
    return db.User.findOne({
        email,
        password
    }).then(user => {
        if (user) {
            user.balance = user.balance + amount
            user.transaction.push({
                amount: amount,
                type: "Credit"
            })
            user.save()
            return {
                statusCode: 200,
                status: true,
                message: amount + " credited. new balance is:" + user.balance
            }
        }
        return {
            statusCode: 401,
            status: false,
            message: "invalid credentials"
        }
    })
}




const withdraw = (req, email, password, amt) => {
    let amount = parseInt(amt)
    return db.User.findOne({
        email,
        password
    }).then(user => {
        if (req.currentAcc != email) {
            return {
                statusCode: 401,
                status: false,
                message: "permission denied"
            }
        }
        if (user) {
            if (user.balance > amount) {
                user.balance = user.balance - amount
                user.transaction.push({
                    amount: amount,
                    type: "Debit"
                })
                user.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: amount + " debited. new balance is:" + user.balance
                }
            }
            else {
                return {
                    statusCode: 401,
                    status: false,
                    message: "insufficient balance"
                }
            }
           
        }
        else{
            return {
                statusCode: 401,
                status: false,
                message: "invalid credentials"
            }  
        }
    })
}



const getTransaction = (req) => {
    email=req.currentAcc
    return db.User.findOne({
        email
    }).then(user=>{
    if (user) {
        return {
            statusCode: 200,
            status: true,
            transaction: user.transaction
        }
    }
    else {
        return {
            statusCode: 401,
            status: false,
            message: "invalid credentials"
        }
    }
})
}
    
module.exports = {
    register,
    login,
    deposit,
    withdraw,
    getTransaction,
}