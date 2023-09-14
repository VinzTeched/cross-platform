import currencyFormatter from "../helpers/currencyFormatter";
import React from 'react'

const HouseRow = ({ house }) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.price)}</td>
        </tr>
    );
};

const HouseRowMemory = React.memo(HouseRow);

export { HouseRowMemory }

export default HouseRow;