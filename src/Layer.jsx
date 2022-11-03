import React, {useState} from 'react'

const Layer = ({id, title, paragraph}) => {
  const [active, setActive] = useState(undefined);
  function handleClick(e){
    setActive(active ? undefined : true);
  }
  return (
    <section className={`s${id}`}>
        <button className={`title-div t${id}`} onClick={(e) => handleClick(e)}>
            <h2>{title}</h2>
            <h2 className={active ? 'rotate' : ''}>{'>'}</h2>
        </button>
        <p className={`p${id} ${active ? '' : 'hidden'}`}>{paragraph}</p>
    </section>
  )
}

export default Layer