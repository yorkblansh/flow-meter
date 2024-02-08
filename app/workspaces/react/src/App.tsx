import './App.scss'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { supabase } from './client'
import { NumericInput } from './widgets/NumericInput'
import { useFocus } from './shared/hooks/useFocus'

const Counters = () => {
	const [inputRef, setInputFocus] = useFocus()
	const [indexInput, setIndexInput] = useState('')

	useEffect(() => {
		window.addEventListener('keypress', (e) => {
			setInputFocus()
		})
	}, [])

	return (
		<div className="App">
			Расчет коммунальных платежей
			<NumericInput
				ref={inputRef}
				onClick={() => {}}
				isCorrect
				maxLength={6}
				message=""
				minLength={6}
				name=""
				placeholder=""
				validateStatus="validating"
				onChange={setIndexInput}
				value={indexInput}
			/>
			{/* <h1>Hello, please sign in!</h1>
			<button onClick={signInWithGithub}>Sign In</button>
			<button onClick={getSession}>get session</button> */}
		</div>
	)
}

export const Router = () => {
	return (
		<RouterProvider
			router={createBrowserRouter([
				{
					path: '/counters',
					element: <Counters />,
				},
			])}
		/>
	)
}
