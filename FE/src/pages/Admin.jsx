import React, { useContext, useState } from 'react'
import { MainContext } from '../context/MainProvider'

function Admin() {
  const { product,deleteElement,url } = useContext(MainContext)
  const [search, setSearch] = useState('')
  const [sortProp, setSortProp] = useState({
    property: "",
    order: true
  })
  return (
    <>
      <title>Admin Page</title>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <div className="buttons">
        <button onClick={()=>setSortProp({property:"price",order:true})}>Artma</button>
        <button onClick={()=>setSortProp({property:"price",order:false})}>Azalma</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {product
            .toSorted(((a, b) => {
              if (sortProp.order) {
                return (a[sortProp.property] > b[sortProp.property]) ? 1 : ((b[sortProp.property] > a[sortProp.property]) ? -1 : 0)
              }
              else {
                return (a[sortProp.property] < b[sortProp.property]) ? 1 : ((b[sortProp.property] < a[sortProp.property]) ? -1 : 0)
              }
            }
            ))
            .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
            .map(x => (
              <tr>
                <td>{x.name}</td>
                <td>{x.price}</td>
                <td>
                  <img src={x.image} alt="" />
                </td>
                <td>
                  <button onClick={()=>deleteElement(url,x._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Admin