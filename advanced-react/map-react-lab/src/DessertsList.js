function DessertsList(props) {
    // Implement the component here.
    let data = props.data.filter(element => element.calories < 500);
    data.sort((a, b) => {
        return a.calories - b.calories;
    });
    const listItems = data.map(dessert => {
        const itemText = `${dessert.name} - ${dessert.calories} cal`;
        return <li>{itemText}</li>
    });
    return <ul>{listItems}</ul>;
  }
  
  export default DessertsList;