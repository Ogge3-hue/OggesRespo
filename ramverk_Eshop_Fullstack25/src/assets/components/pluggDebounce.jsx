import { useState, useEffect } from 'react'

const SearchUI = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    // 1. starta timer (debounce)
    const timer = setTimeout(async () => {
      try {
        const req = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        if (!req.ok) {
          throw new Error('fel')
        }
        const data = await req.json()
        setProducts(data.products)
      } catch (error) {
        console.log('något gick fel')
      }
    }, 1500)

    // 2. Cleanup: avbryter timern
    return () => {
      clearTimeout(timer)
      setFetched(false)
    }
  }, [searchTerm])

  return (
    <div>
      <h2>Smart sök</h2>
      <input
        type="text"
        placeholder="Skriv för att söka...."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setFetched(true)
        }}
      />

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <div className="card" style={{ width: '18rem', border: '2px red solid' }}>
              <img className="card-img-top" src={item.images[1]} alt="Card image cap" width={100} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchUI
