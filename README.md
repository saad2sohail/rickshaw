# rickshaw
rickshaw - the Auto App


Base Requrements 
node version	v21.6.2																								


Mongo Db installations

brew tap mongodb/brew
brew install mongodb-community

brew services start mongodb/brew/mongodb-community


MongoDb
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.0
Using MongoDB:		7.0.2
Using Mongosh:		2.2.0

Process of mongo db
show databases

use mydatabase

show collections


//To check the collections in the database
db.mycollection.find().pretty()

