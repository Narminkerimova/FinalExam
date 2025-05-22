import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { MainContext } from "../context/MainProvider"

function DetailPage() {
  const { id } = useParams()
  const { url } = useContext(MainContext)
  const [detail, setDetail] = useState({})

  async function getElById(url, id) {
    const res = await fetch(url + id)
    const data = await res.json()
    setDetail(data)
  }

  useEffect(() => {
    getElById(url, id)
  }, [])


  return (
    <>
      <title>Detail</title>
      <div className="card" key={detail._id}>
        <div className="card_image">
          <img src={detail.image} alt="prod" />
        </div>
        <div className="card_title">
          <div className="card_name">{detail.name}</div>
          <div className="card_price">{detail.price}</div>
        </div>
      </div>
    </>
  )
}

export default DetailPage