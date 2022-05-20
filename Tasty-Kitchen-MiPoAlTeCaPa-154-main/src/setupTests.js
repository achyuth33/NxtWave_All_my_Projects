/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from '@testing-library/react'

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }

configure({testIdAttribute: 'testid'})
