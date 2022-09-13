const ItemCard = ({localItem}) => {
  return (
    <div className="item-card">
      <h3>{localItem.name}</h3>
    </div>
  )
}

export default ItemCard