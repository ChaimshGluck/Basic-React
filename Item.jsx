export default function Item(props) {
    return <>
        {props.maxPrice == null
            || props.criteria === 'Maximum' && props.price < props.maxPrice
            || props.criteria === 'Minimum' && props.price > props.maxPrice ?
            <div className="ItemsList">
                <div>Item Name : {props.name}</div>
                <div>Item Price : ${props.price}</div>
                <div>Amount in stock : {props.inStockAmount}</div>
            </div>
            : <div>Item {props.index + 1} is too {props.criteria === 'Maximum' ? "expensive" : "cheap"} for you</div>
        }
    </>
}