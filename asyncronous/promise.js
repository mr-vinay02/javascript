let promise = new Promise( (resolve , reject ) => {
    let success = true;

    if(success){
        resolve("Task Completed successfully");
    }else{
        reject("Something went wrong");
    }
});


promise.then((message) => console.log(message)).catch((error) => console.log(error));