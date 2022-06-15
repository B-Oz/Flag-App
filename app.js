//*=========================================================
//*                     FLAG-APP
//*=========================================================


const fetchCountry = async () => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const res = await fetch(url);

    const data = await res.json();
    console.log(data[0]);
};

fetchCountry('turkey');