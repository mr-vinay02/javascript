function fetchData(){
    return new Promise(
        (resolve) => {
            setTimeout( () => console.log("Data Fetched Successfully...."));
            resolve("Done !");
        }
    );
};


async function getData(){
    console.log("Fetching....");

    let result = await fetchData();
    console.log(result);
};

getData();