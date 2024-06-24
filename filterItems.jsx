export default function FilterItems(props) {
    return <>
        <label htmlFor="number-input">Type in a price amount to filter by </label>
        <div><select id="criteria-input">
            <option>Maximum</option>
            <option>Minimum</option>
        </select>
        <> of </>
        $<input id="number-input" type="number" ></input></div>
        <div><button onClick={() => {
            props.maxNumber(Number(document.getElementById("number-input").value));
            props.criteria(document.getElementById("criteria-input").value)
        }}
        >Filter</button></div>
    </>
}