const createCounter = () => {
    let count = 0;
    return () => {
        count = count + 1;
        console.log(count);
    };
};

const counter = createCounter();
counter();   // 1
counter();   // 2
counter();   // 3