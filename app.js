const data = () => {
    fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
        .then((response) => {
            return response.json();
        }).then((jsonOut) => {
            let searc = jsonOut.filter(search => {
                //getting search word
                const searchText = "new  york";
                //removing double spaces
                const searchText2 = searchText.replace(/\s{2,}/g, ' ');
                return search.city.toLowerCase().match(searchText2.toLowerCase()) || search.state.toLowerCase().match(searchText2.toLowerCase());
            });
            console.log(searc);
        })
};
data();