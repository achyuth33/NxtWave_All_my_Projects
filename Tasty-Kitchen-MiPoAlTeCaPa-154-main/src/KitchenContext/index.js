import React from 'react'

const KitchenContext = React.createContext({
  addBtn: false,
  filter: () => {},
  onAddBtn: () => {},
  sortByOptions: [],
  temporaryData: [],
  removeItem: () => {},
  updateLocalData: () => {},
  checkZero: () => {},
  stateEmpty: () => {},
})

export default KitchenContext
