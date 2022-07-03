import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


type SearchUserType = {
    login: string
    id: number
}
type SearchResult = {
    items: SearchUserType
}



export default function GitHubAPI() {
    console.log('render');
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])
    const [tempSearch, setTempSearch] = useState('')

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        } else {

        }
    }, [selectedUser])

    useEffect(() => {
        axios.get<SearchResult>('https://api.github.com/search/users?q=jsmasterok').then(response => {
            setUsers(response.data.items)
        })
    }, [])

    return (
        <div className='container p-2 mt-2 bg-light rounded-2 position-relative h100 d-flex flex-column'>
            <div className='w-50  border border-2 p-2 rounded-2 rouned-2 bg-dark d-flex flex-row align-items-center gap-3'>
                <input
                    value={tempSearch}
                    onChange={(e) => {
                        setTempSearch(e.currentTarget.value)
                    }}
                    className='w-100'
                    type="search"
                />
                <input
                    className='w-25 btn btn-warning fw-bold text-light'
                    type="submit"
                    onClick={() => {
                        axios.get<SearchResult>('https://api.github.com/search/users?q=' + tempSearch).then(response => {
                            setUsers(response.data.items)
                        })
                    }}
                />
            </div>
            <ul className='w-50 border border-2 mt-2 text-light bg-dark p-2 Git-list'>
                <h3>Users</h3>
                {
                    users.map(userName =>

                        <li
                            key={userName.id}
                            onClick={() => {
                                setSelectedUser(userName)
                            }}
                            className={selectedUser === userName ? 'bg-light text-dark py-2 rounded-2 fw-bold' : ''}
                        >
                            {userName.login}
                        </li>)
                }
            </ul>
            <div className='w-25 border border-2 p-2 bg-dark position-absolute Git-position text-light'>
                <h5 className='text-center fw-bold'>User info</h5>
            </div>
        </div>
    )
}
