function LiveOrdersList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const handleNewOrders = () => {
        const newOrders = DataSource.getOrders();
        setOrders(newOrders)
      }

      DataSource.addListener(handleNewOrders)
    
      return () => {
        DataSource.removeListener(handleNewOrders)
      }
    }, [])
    
    return <LiveOrders orders={orders} />
}