
import '../styles/styles.css'
import 'lazysizes'

import Sidebar from './modules/Sidebar.js'

new Sidebar()

if(module.hot) {
  module.hot.accept()
}