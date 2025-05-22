import { createContext, useEffect, useState } from "react"

export const MainContext = createContext()

function MainProvider({ children }) {
    const url = "http://localhost:3000/chairs/"
    const [product, setProduct] = useState([])
    const [basket, setbasket] = useState([])
    const [wish, setwish] = useState([])

    async function getElement(url) {
        const res = await fetch(url)
        const data = await res.json()
        setProduct(data)
    }

    async function deleteElement(url, id) {
        const res = await fetch(url + id, {
            method: "DELETE"
        })
        getElement(url)
    }

    async function postElement(url, body) {
        const res = await fetch(url,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }
        )
        const data = await res.json()
        setProduct(data)
    }

    function addBasket(obj) {
        const addedElement = basket.find(x => x._id === obj._id)
        if (addedElement) {
            addedElement.count++
            setbasket([...basket])
        }
        else {
            setbasket([...basket, { ...obj, count: 1 }])

        }
    }

    function decreaseBasket(obj) {
        const addedElement = basket.find(x => x._id === obj._id)
        if (addedElement.count === 1) {
            return
        }
        else {
            addedElement.count--
            setbasket([...basket])
        }
    }

    function removeBasket(id){
        setbasket(basket.filter(x=>x._id!==id))
    }

    function totalBasket() {
        return basket.reduce((total,initial)=>(total+(initial.price*initial.count)),0)
    }

    function addWish(obj) {
        const addWish=wish.find(x=>x._id===obj._id)
        if(addWish){
            return
        }
        else{
            setwish([...wish,obj])
        }
    }

    function removeWish(id){
        setwish(wish.filter(x=>x._id!==id))
    }

     function totalWish() {
        return wish.reduce((total,initial)=>(total+initial.price),0)
    }









    useEffect(() => {
        getElement(url)
    }, [])



    return (
        <MainContext.Provider value={{ product, deleteElement, url, postElement, addBasket, basket,decreaseBasket,removeBasket,totalBasket,addWish,wish,removeWish,totalWish }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider