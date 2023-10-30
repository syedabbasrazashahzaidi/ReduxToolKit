import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addingItems, itemListing } from "./slice";

function ListingComponent() {
  const [selectedItem, setselectedItem] = useState([]);
  const [selectedItem2, setselectedItem2] = useState([]);
  const itemsList = useSelector(state => state.item.itemList);
  const itemsList2 = useSelector(state => state.item.addItems);
  const dispatch = useDispatch();
  const itemObject = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ];

  const addSelectedItems = (data) => {
    if (selectedItem.find((item) => item.id === data.id)) {
      setselectedItem(selectedItem.filter((item) => item.id !== data.id));
    } else {
      setselectedItem([...selectedItem, data]);
    }
  };
  const moveItems = () => {
    dispatch(addingItems(selectedItem));
    const updatedList = itemsList.filter(item => !selectedItem.some(newItem => newItem.id === item.id));
    dispatch(itemListing(updatedList));
    setselectedItem([]);
  };


  const addSelectedItems2 = (data) => {
    if (selectedItem2.find((item) => item.id === data.id)) {
      setselectedItem2(selectedItem2.filter((item) => item.id !== data.id));
    } else {
      setselectedItem2([...selectedItem2, data]);
    }
  };
  const moveBackItems =()=>{
    const newState = [...itemsList, ...selectedItem2];
    console.log("newState==", newState, selectedItem2);
    dispatch(itemListing(newState));
    const updatedList = itemsList2.filter(item => !selectedItem2.some(newItem => newItem.id === item.id));
    dispatch(addingItems(updatedList))
    setselectedItem2([]);
  }

  useEffect(() => {
  }, [itemsList]);

//   console.log("Items===", select edItem, itemsList);

  return (
    <>
    <div>
      {itemsList.map((data) => (
        <li key={data.id}>
          {data.name}
          <input
            type="checkbox"
            // checked={selectedItem.find((item) => item.id === data.id)}
            onChange={() => addSelectedItems(data)}
          />
        </li>
      ))}
      <button onClick={moveItems}>Next</button>
    </div>
    <br/>
    <div>
      {itemsList2.map((data) => (
        <li key={data.id}>
          {data.name}
          <input
            type="checkbox"
            // checked={selectedItem.find((item) => item.id === data.id)}
            onChange={() => addSelectedItems2(data)}
          />
        </li>
      ))}
      <button onClick={moveBackItems}>Revert back</button>
    </div>
    
    </>
  );
}

export default ListingComponent;
