import { createBrowserHistory } from 'history'

export const browserHistory = createBrowserHistory()

export const  nextPath =(path) =>{
    // this.props.history.push(path);
    browserHistory.push(path)
}