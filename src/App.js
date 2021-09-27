
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './Redux/Action';
import ListCard from './component/card';

function App() {
  const dispatch = useDispatch()
  const [updateSearch, setUpdateSearch] = useState('')

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])

  const onChangeSearch = (e) => {
    setUpdateSearch(e.target.value)
  }
  const stateData = useSelector((state) => state.datanya.data)

  const dataSearch = stateData.filter(
    (item) =>
      item.title.toLowerCase().includes(updateSearch) ||
      item.body.toLowerCase().includes(updateSearch)
  )
  const ListData = dataSearch.map((item, idx) => {
    return (
      <ListCard
        idx={idx + 1}
        key={item.id}
        id={item.id}
        title={item.title}
        body={item.body}
        userId={item.userId}
      />
    )
  })
  return (
    // <div className="App">
    <div className="container mt-3">
      <div className="mb-3">
        <input type="search" class="form-control" id="exampleFormControlInput1" placeholder="search your card" value={updateSearch} onChange={onChangeSearch} />
      </div>
      <div className="row justify-content-center" >
          {ListData}
      </div>
    </div>
    // </div>
  );
}

export default App;
