import './App.scss'
import _ from 'lodash'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tmwowlcdosxcssyzbdpy.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtd293bGNkb3N4Y3NzeXpiZHB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjU5NDI1NSwiZXhwIjoyMDIyMTcwMjU1fQ.jHcr6ysFsAqr4A7JlUANLmFoCMuP9rkMMDvaoE9_umU'
const supabase = createClient(supabaseUrl, supabaseKey)

const App = () => {
	useEffect(() => {
		supabase
			.from('test_table')
			.select('*')
			.then((d) => {
				console.log(d.data)
			})
	}, [])

	return <div>12346546546989879879</div>
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
