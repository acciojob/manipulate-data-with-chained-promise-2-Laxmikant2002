//your JS code here. If required.
(function () {
    const output = document.getElementById('output');

    function getInitialArray() {
        return Promise.resolve([1, 2, 3, 4]);
    }

    function filterEvens(arr) {
        return new Promise((resolve) => {
            const evens = arr.filter((n) => n % 2 === 0);

            setTimeout(() => {
                output.textContent = evens.join(',');
                resolve(evens);
                }, 1000);
        });
    }

    function multiplyByTwo(arr) {
        return new Promise((resolve) => {
            const multiplied = arr.map((n) => n * 2);

            setTimeout(() => {
                output.textContent = multiplied.join(',');
                resolve(multiplied);
            }, 2000);
        });
    }

    getInitialArray()
        .then(filterEvens)
        .then(multiplyByTwo)
        .catch((err) => console.error(err));
})();