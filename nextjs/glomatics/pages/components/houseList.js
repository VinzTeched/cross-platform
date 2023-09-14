import { useEffect, useState } from "react";
import HouseRow, { HouseRowMemory } from "./houseRow";

// const housesArray = [
//     {
//         id: 1,
//         address: "7 Sophie Kuye, Pedro Gbagada",
//         country: "Nigeria",
//         price: 900000
//     },
//     {
//         id: 2,
//         address: "26 Umunnaji street, Maryland",
//         country: "Nigeria",
//         price: 1800000
//     }
// ]

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses)
        }
        fetchHouses()
    })

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "13 Ndulue Street, Abagana",
                country: "Nigeria",
                price: 1000000
            }
        ])
    }

    return (
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">Houses currently on the market</h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRowMemory key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>Add House</button>
        </div>
    )
}

export default HouseList;