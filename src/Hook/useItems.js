import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://ancient-hollows-23865.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items]);
    return [items, setItems];
}

export default useItems;