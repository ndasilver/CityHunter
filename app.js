let data = (word) => {
    let table = document.getElementById("searchTable");
    fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
        .then((response) => {
            return response.json();
        }).then((jsonOut) => {
            let searc = jsonOut.filter(search => {
                //getting search word
                const searchText = word;
                //removing double spaces
                const searchText2 = searchText.replace(/\s{2,}/g, ' ');
                return search.city.toLowerCase().match(searchText2.toLowerCase()) || search.state.toLowerCase().match(searchText2.toLowerCase());
            });

            if (word == "") {
                table.innerHTML = "";
            } else {
                table.innerHTML = "";
                const row = table.insertRow(0);
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);
                cell1.innerHTML = "<b>City</b>";
                cell2.innerHTML = "<b>State</b>";
                cell3.innerHTML = "<b>Population</b>";
                cell4.innerHTML = "<b>Growth</b>";
                for (let i = 0; i < searc.length; i++) {
                    const row = table.insertRow(-1);
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    const cell3 = row.insertCell(2);
                    const cell4 = row.insertCell(3);
                    cell1.innerHTML = searc[i].city;
                    cell2.innerHTML = searc[i].state;
                    //population
                    cell3.innerHTML = searc[i].population.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    if (searc[i].growth_from_2000_to_2013.replace("%", "") > 0) {
                        cell4.innerHTML = `<span style="color:green">${searc[i].growth_from_2000_to_2013}</span>`;
                    } else {
                        cell4.innerHTML = `<span style="color:red">${searc[i].growth_from_2000_to_2013}</span>`;
                    }
                }
            }
        })
};

let search = (e) => {
    const keyWord = e.value;
    data(keyWord);

};