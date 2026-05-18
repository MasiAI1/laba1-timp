import MyInput from '../Ui/MyInput/MyInput'
import MySelect from '../Ui/MySelect/MySelect'
import {
    INCIDENT_STATUSES,
    INCIDENT_CATEGORIES,
    INCIDENT_ZONES,
} from '../constants/incidentAttributes'

function PostFilter({ filter, setFilter }) {
    const updateFilter = (field) => (value) =>
        setFilter({ ...filter, [field]: value });

    return (
        <div className="post_filter">
            <MyInput
                style={{ marginTop: 20 }}
                value={filter.search}
                type="text"
                placeholder="Поиск по названию, локации, оператору..."
                onChange={(event) => setFilter({ ...filter, search: event.target.value })}
            />

            <MySelect
                defaultSel="Сортировка по"
                opt={[
                    { value: 'title', name: 'По названию' },
                    { value: 'severity', name: 'По уровню критичности' },
                    { value: 'status', name: 'По статусу' },
                    { value: 'responseTime', name: 'По времени реакции' },
                    { value: 'zone', name: 'По зоне' },
                ]}
                selectSort={filter.sort}
                onChange={updateFilter('sort')}
            />

            <MySelect
                defaultSel="Фильтр по статусу"
                opt={[{ value: '', name: 'Все статусы' }, ...INCIDENT_STATUSES]}
                selectSort={filter.status}
                onChange={updateFilter('status')}
            />

            <MySelect
                defaultSel="Фильтр по категории"
                opt={[{ value: '', name: 'Все категории' }, ...INCIDENT_CATEGORIES]}
                selectSort={filter.category}
                onChange={updateFilter('category')}
            />

            <MySelect
                defaultSel="Фильтр по зоне"
                opt={[{ value: '', name: 'Все зоны' }, ...INCIDENT_ZONES]}
                selectSort={filter.zone}
                onChange={updateFilter('zone')}
            />
        </div>
    )
}

export default PostFilter
