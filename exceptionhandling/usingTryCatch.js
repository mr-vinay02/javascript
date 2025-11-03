function fetchData(){
    return new Promise( (resolve , reject ) => {
        let success = true ;

        if(success){
            resolve("Data Fetched successfully....");
        }
        else{
            reject("Failed to Fetch  the  Data");
        }
    });
};


async function getData(){
    console.log("Starting...");

    try{
        let result = await fetchData();
        console.log(result);
    }catch(error){
        console.log(error);
    }finally{
        console.log("Ending...");
    }
}


getData();
