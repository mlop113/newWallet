import * as React from 'react'
import { Provider } from 'react-redux'
import './src/Config'
import DebugConfig from './src/Config/DebugConfig'
import createStore from './src/Reducers'
import RootContainer from './src/Containers/RootContainer'
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				{/*<View style={{backgroundColor: 'red', flex: 1}}/>*/}
				<RootContainer/>
			</Provider>
		)
	}
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
	? console.tron.overlay(App)
	: App
