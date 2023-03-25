import { render } from 'preact'
import { App } from './app'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

render(<App />, document.getElementById('app') as HTMLElement)
