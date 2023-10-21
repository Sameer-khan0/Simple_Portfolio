const text = document.getElementsByClassName('sectxt')[0];
const textLoader = (sentence, intervalTime) => {
    return new Promise((resolve, reject) => {
        let i = 0;
        const loader1 = () => {
            text.textContent = sentence.slice(0, i);
            i++;
            if (i > sentence.length) {
                clearInterval(intervalId);
                resolve();
            } else {
                console.log(reject);
            }
        };

        const intervalId = setInterval(loader1, intervalTime);
    });
};

const transitions = [
    { text: 'Developer', interval: 300 },
    { text: 'Web Developer', interval: 500 },
    { text: 'Web Designer', interval: 500 },
    { text: 'Front-End Developer', interval: 500 },
    { text: 'Full-stack Developer', interval: 500 },
    { text: 'Mern-stack Developer', interval: 500 },
];

const smoothTransitions = async () => {
    for (const { text, interval } of transitions) {
        await textLoader(text, interval);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    setTimeout(smoothTransitions, 13000);
};

smoothTransitions();
