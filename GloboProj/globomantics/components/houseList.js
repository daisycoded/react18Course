import { useState } from "react"
import HouseRow from "./HouseRow"
import HouseRowMem from "./HouseRow"

const houseArray = [
    {
        id: 1,
        address: "12 your mum's, house",
        country: "land place",
        price: 100000,
    },
    {
        id: 2,
        address: "69 your mum's, house",
        country: "country country",
        price: 90000,
    }
]

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);

    // this is readonly!
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "420 your mum's, house",
                country: "house",
                price: 696969,
            }
        ]);
    }

    return (
        <>
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
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
                <HouseRowMem key={h.id} house={h}/>
                ))}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>
            Add
        </button>
        </>
    )
}

export default HouseList