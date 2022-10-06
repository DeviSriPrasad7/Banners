// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <div className="bg-container">
      <li className={className}>
        <div className="list-container">
          <h1 className="heading">{headerText}</h1>
          <p className="paragraph">{description}</p>
          <button className="button">Show More</button>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
