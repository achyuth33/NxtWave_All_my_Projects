import BannerCardItem from './components/BannerCardItem'

import './App.css'

const bannerCardsData = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="app-container">
    <div className="reusable-banners-container">
      {bannerCardsData.map(eachBanner => (
        <BannerCardItem bannerCardData={eachBanner} key={eachBanner.id} />
      ))}
    </div>
  </div>
)

export default App
