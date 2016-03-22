import React from 'react'
import ReactDOM from 'react-dom'
import { Locations } from 'react-router-component'
import { Location } from 'react-router-component'

//Components
import Home from './components/home/HomeComponent'

const App = () => (
	<Locations hash>
  	<Location path="/" handler={Home} />
	</Locations>
)

ReactDOM.render(<App/>, document.querySelector('#container'))