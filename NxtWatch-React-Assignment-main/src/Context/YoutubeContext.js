import React from 'react'

const YoutubeContext = React.createContext({
  cartList: [],
  isTheme: false,
  ThemeIsClicked: () => {},
  addSaveItems: () => {},
})

export default YoutubeContext
