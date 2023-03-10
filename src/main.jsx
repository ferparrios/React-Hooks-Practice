import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { HooksApp } from './HooksApp'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { Layout } from './05-useLayoutEffect/Layout'
import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp />  */}
    {/* <CounterWithCustomHook />  */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen/> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>,
)
