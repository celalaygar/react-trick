import React, { useState } from 'react'
import MainComponent from './components/MainComponent';
import SidebarComponent from './components/SidebarComponent';
import TopMenuComponent from './components/TopMenuComponent';

export const data=[
  {
      Name: 'Name1',
      course: 'Course1',
      age: 21
  },
  {
      Name: "Name2",
      course: "Course2",
      age: 22
  }
];


function App() {
  const [control, setcontrol] = useState(false);
  const [obj, setobj] = useState({ id: 0, title: "title", counter: 13, subTitle: "sub Title" });

  const details= data.map((item) => 
    <>{item.Name} {item.course} {item.age}</>
  )


  const [records, setRecords] = useState(
    [
      { id: 1, correct: false },
      { id: 2, correct: false },
      { id: 3, correct: false },
      { id: 4, correct: false },
      { id: 5, correct: false }
    ]);
  const onCorrectAnswerHandler = (id) => {
    records.forEach(r => {
      if (r.id == id) r.correct = !r.correct;
    });
    setRecords([...records]);
  }

  const onChangeData = (event, type, value) => {
    let data = null;
    if (type === "counter") {
      data = value;
    }
    else if (type === "id") {
      onCorrectAnswerHandler(value);
      data = value;
    }
    else {
      data = value;
    }
    setobj({ ...obj, [type]: data })
  }

  const onClickData = (event) => {
    setcontrol(!control);
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-sm-12 '>hahaha : {details}</div>
        <div className='col-sm-3 '>
          <input
            type="text" value={obj.title}
            onChange={(event) => onChangeData(event, "title", event.target.value)} />
        </div>
        <div className='col'></div>
        <div className='col-sm-8 bg-light border border-info border-2'>
          {" " + obj.title}
        </div>
        <div className='col-sm-3 mt-2'>
          <input
            type="text" value={obj.subTitle}
            onChange={(event) => onChangeData(event, "subTitle", event.target.value)} />
        </div>
        <div className='col'></div>
        <div className='col-sm-8 bg-light border border-info border-2 mt-2'>
          {"    " + obj.subTitle}
        </div>
        <div className='col-sm-3'>
          <button
            className='btn btn-sm btn-primary'
            onClick={(event) => onChangeData(event, "counter", obj.counter + 1)} > + </button>
          <button
            className='btn btn-sm btn-primary m-2'
            onClick={(event) => onChangeData(event, "counter", obj.counter - 1)} > - </button>

        </div>
        <div className='col'></div>
        <div className='col-sm-8 bg-light border border-info border-2 mt-2'>
          {obj.counter}
        </div>
        <div className='col-sm-12 text-light'>
          <button
            className='btn btn-sm btn-success mt-5'
            onClick={(event) => onClickData(event)} > Show Result </button>
        </div>
        {control &&
          <div className='col-sm-12 text-dark bg-light border border-dark border-5 p-5 mt-3'>
            <p className=' text-justify'>  {obj.title}  </p>
            <p className=' text-justify'>  {obj.subTitle}  </p>
            <p className=' text-justify'>  {obj.counter}  </p>
          </div>
        }
        <div className='col-sm-12'>
          <input
            type="text" value={obj.id}
            onChange={(event) => onChangeData(event, "id", event.target.value)} />
          {
            records.map(r =>
              <>  {r.id + " " + r.correct + " - - - "} </>
            )
          }
          <hr />
          <hr />
          <TopMenuComponent />
        </div>
        <div className='col-sm-3'>
          <SidebarComponent />
        </div>
        <div className='col-sm-9'>
          <MainComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
