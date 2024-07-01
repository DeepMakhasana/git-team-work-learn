import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TodoInfo from './components/TodoInfo'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/todo/:id' element={<TodoInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout