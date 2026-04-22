import React from 'react'
import MyInput from '../Ui/MyInput/MyInput'
import MySelect from '../Ui/MySelect/MySelect'

function PostFilter({filter, setFilter}) {
    const sortPosts = (sel) => {
        setFilter({...filter, sort: sel})
    }

    return (
        <div>
            <MyInput
                style={{marginTop:20}}
                value={filter.search}
                type="text"
                placeholder="Поиск происшествия..."
                onChange={(event) => setFilter({...filter, search: event.target.value})}
            />

            <MySelect 
                defaultSel="Сортировка по"
                opt={[
                    {value: "title", name: "По названию"},
                    {value: "severity", name: "По уровню критичности"}
                ]}
                selectSort={filter.sort}
                onChange={sortPosts}
            />
        </div>
    )
}

export default PostFilter