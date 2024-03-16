import './index.css'

const Body = props => {
  const {eachItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  return (
    <div className="item">
      <p className="para">{timeAccessed}</p>
      <div className="imgTitle">
        <img src={logoUrl} className="iconImg" />
        <p className="para">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
    </div>
  )
}

export default Body
