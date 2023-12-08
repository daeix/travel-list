import { useState } from "react"
import Logo from "./Logo"
import PackingList from "./PackingList"
import Stats from "./Stats"
import Form from "./Form"

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleClearList() {
    setItems([])
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
        items={items}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}
