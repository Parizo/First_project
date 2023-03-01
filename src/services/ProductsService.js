const API_URL = 'https://dummyjson.com/products?limit=8'; //Gaunami duomenys iš API 

const getAllProducts = async () => {                 // Arrow funkcija ir ji yra asinchroninė jaigu ką palauks
    try {
        const response = await fetch(API_URL);    // lauk kol duomenukai bus išfečinti
        const data = await response.json();       // Sudėjimas duomenuku ir paruošimas išnešimui
        return data;                        // kai viskas pavyksta pareturnina visus duomenukus supakuotus naudojimui galima neštis ;}
    } catch (error) {                                // bandyk jaigu nepavyks gaudyk vėl apsauga sau rasti errora;)
        console.log(error)
    }
}

export default getAllProducts  // pasiekti duomenukam 

// Bendrai parneša duomenukus iš API !!! :D