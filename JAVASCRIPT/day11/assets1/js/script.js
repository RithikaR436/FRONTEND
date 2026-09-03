const processNumber = (num, callback) => {
    const result = num * num;   
    callback(result);          
};

processNumber(5, (result) => {
    console.log(result);       
});     