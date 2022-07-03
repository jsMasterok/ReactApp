import React from 'react'
import { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { randomColor } from 'randomcolor'
import Draggable from 'react-draggable'

export default function Todo() {


    const [item, setItem] = useState('');
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) ||
        []
    )


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])


    const newItem = (e) => {
        e.preventDefault()
        if (item.trim() !== '') {
            const newItem = {
                id: v4(),
                color: randomColor({
                    luminosity: 'light'
                }),
                position: {
                    x: -100,
                    y: -100
                },
                item
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Type!!!!')
            setItem('')
        }
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id))

    }

    const updatePos = (data,index) => {
        let newArra = [...items]
        newArra[index].position = {x:data.x,y:data.y}
        setItems(newArra)
    }

    return (
        <div className='container d-flex bg-light p-2 mt-2 rounded-2 h100 position-relative flex-column align-items-center justify-content-center align-items-center'>
            <form className='d-flex w-50 p-2 rounded-2 bg-dark gap-3 Todo-form' onSubmit={newItem}>
                <input
                    value={item}
                    type="text"
                    className='w-100 p-2 Todo-input'
                    placeholder='Text...'
                    onChange={(e) => setItem(e.target.value)}
                />
                <input type="submit" className='w-25 btn btn-success' />
            </form>
            {
                items.map((item, index) => {
                    return (
                        <Draggable key={index} defaultPosition={item.position} onStop={(_,data) => {
                            updatePos(data,index)
                        }} bounds='parent'>
                            <div className='Todo-item' style={{ backgroundColor: item.color }}>
                                <p className='Todo-text'>{`${item.item}`}</p>
                                <button className='btn btn-danger position-absolute Todo-close' onClick={() => deleteItem(item.id)}>X</button>
                            </div>
                        </Draggable>
                    )
                })
            }
        </div>
    )
}
