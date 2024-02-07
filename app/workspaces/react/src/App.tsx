import './App.scss'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { supabase } from './client'

const App = () => {
	// useEffect(() => {

	// }, [])

	// return (
	// 	<div>
	// 		<div className=""></div>
	// 	</div>
	// )

	const [user, setUser] = useState(null)
	useEffect(() => {
		checkUser()
		window.addEventListener('hashchange', function () {
			checkUser()
		})
	}, [])

	const getSession = async () => {
		// supabase
		// 	.schema('public').
		supabase
			.from('test_table')
			.select()
			.then((d) => {
				// console.log(d.error)
				console.log(d.data)
			})
		// console.log((await supabase.auth.getSession()).data.session.)
	}

	async function checkUser() {
		const user = await supabase.auth.getUser()
		setUser(user.data.user)
	}
	async function signInWithGithub() {
		await supabase.auth.signInWithOAuth({
			provider: 'github',
		})
	}
	async function signOut() {
		await supabase.auth.signOut()
		setUser(null)
	}

	console.log(user)

	if (user) {
		return (
			<div className="App">
				<h1>Hello, {user.email}</h1>
				<button onClick={signOut}>Sign out</button>
				<button onClick={getSession}>get session</button>
			</div>
		)
	}
	return (
		<div className="App">
			<h1>Hello, please sign in!</h1>
			<button onClick={signInWithGithub}>Sign In</button>
			<button onClick={getSession}>get session</button>
		</div>
	)
}

export const Router = () => {
	return (
		<RouterProvider
			router={createBrowserRouter([
				{
					path: '/',
					element: <App />,
				},
			])}
		/>
	)
}
