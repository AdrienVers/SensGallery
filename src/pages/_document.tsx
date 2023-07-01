import Document, { Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr">
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
