import { useEffect } from 'react'

/*Ce composant à besoin des props d'une fonction pour changer la valeur d'un state */
const ShopAPI = (props) => {

    useEffect(() => {

        // Options de la requête fetch
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        };

        fetch(`https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-boutiques-officielles/records?limit=100`, options)
            .then(response => response.json())
            .then(response => props.setData(response.results))
            .catch(err => console.error(err));

    }, [])

    return (
        <div>

        </div>
    )
}


export default ShopAPI;
