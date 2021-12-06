import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-BR" className="h-full">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:wgh@400;700;900t&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="favicon.png" type="image/png" />
				</Head>

				<body className="h-full">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
