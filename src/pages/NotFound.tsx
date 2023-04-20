import React from "react"
export const NotFound = (): JSX.Element => {
	return (
		<div className="container mx-auto h-1/2 flex items-center justify-center">
			<h1 className="text-6xl font-extrabold">
				404 <i className="text-red-600 font-mono text-3xl">Error</i>
				<br />
				Page not Found
			</h1>
		</div>
	)
}
