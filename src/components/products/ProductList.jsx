import { useEffect, useState } from "react"  // Lentyna duomenukam
import getAllProducts from '../../services/ProductsService';  //duomenukai
import OneProduct from "../product/OneProduct";
import  './ProductList.css'


const ProductList = () => {
    const [items, setItem] = useState([]); // items yra kur saugomi duomenys, o setItem yra kokiu metodo pagalba atnaujinami duomenys 
    // useState pradine reiksme, galima dadėti papildomus duomenis 
    const getItems = () => {
        //pakviesti fetch metoda ir isaugoti state
        getAllProducts().then((result) => {
            setItem([...result.products]);
        });


    }

    // [] tik pirma karta uzsikraunant app, useEffect stebetojas kada reike įjungti funkcionalumą
    useEffect(() => {
        getItems();
    }, []);

    console.log(items)
    return (
        <div>
            <OneProduct items={items} /> 
        </div>
    )
}

export default ProductList
