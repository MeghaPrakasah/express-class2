//10-01-2024

const mongoose = require('mongoose');

// connecting db
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://meghatp12345:Meghamegha11@meghatp.1esebie.mongodb.net/?retryWrites=true&w=majority`);
        console.log("DB connected",
            connect.connection.host
            , connect.connection.name);
    } catch (error) {
        console.log(error);
    }
}


// const connectDb = async () => {
//     try {
//       const conn = await mongoose.connect(`mongodb+srv://meghatp12345:Meghamegha11@meghatp.1esebie.mongodb.net/?retryWrites=true&w=majority/firstDB`, {
//         useNewUrlParser: true,
//       });
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.error(error.message);
//       process.exit(1);
//     }
//   }

module.exports = connectDb;