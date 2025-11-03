function fetchData(){
    return new Promise(
        (resolve) => {
            setTimeout( () => console.log("Data Fetched Successfully...."));
        }
    );
};


async function getData(){
    console.log("Fetching....");

    let result = await fetchData();
    console.log(result);
};

getData();