const server = require("./server");

const data = require("./src/configs")


const startServer = () => {
    require("./src/db").addListener("open", () => {
        server.listen(data.PORT, () => {
            console.log(`Server listening on port ${data.PORT}`);
        });
    }).addListener("error", (err) => {
        console.log("Error connecting to the database", err);
    }); 
};

startServer();