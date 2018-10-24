// Initialize npm packages
var mySQL = require("mysql");
var inquirer = require("inquirer");

// establish connection and sync database
var connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

// create connection with server and start
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    start();
});

// create function to begin product data load
function start() {
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        console.table(res);
        requestItem(res);
    });
}

// create a display or render data

// create function to prompt customer for request purchase item
function requestItem(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What item would you like to purchase?",
            }
        ])
        .then(function(){
            var choice = parseInt(val.choice);
            var product = checkInventory(choice, inventory);
            // if else statement to determine if item is available
            if(product) {
                productQuantity(product);
            }
            else {
                console.log("\nSold out.");
                start();
            }
        });
// create function to check for item availability
// create function for customer purchase
}