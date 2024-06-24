import Item from "./Item"
import FilterItems from './filterItems'
import { useState } from 'react'

const items = [{
    name: "Table",
    price: 250,
    inStockAmount: 50
}, {
    name: "Chair",
    price: 130,
    inStockAmount: 85
}, {
    name: "Closet",
    price: 500,
    inStockAmount: 43
}, {
    name: "Desk",
    price: 160,
    inStockAmount: 30
}];

export default function ItemList() {
    let [max, setMax] = useState(null);
    let [criteria, setCriteria] = useState(null);
    return <>
        <h1>My items list</h1>
        <FilterItems maxNumber={(x) => setMax(x)} criteria={(x) => setCriteria(x)} />
        {items.map((x, index) =>
            <Item
                index={index}
                key={index}
                name={x.name}
                price={x.price}
                inStockAmount={x.inStockAmount}
                maxPrice={max}
                criteria={criteria}
            />)}
    </>
};