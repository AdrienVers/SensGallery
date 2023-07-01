import Head from "next/head";
import StatuesLayout from "../components/Statues/StatuesLayout";

export default function Statues() {
	return (
		<div>
			<Head>
				<title>Galerie des sens - Statues</title>
				<meta name="description" content="Statues - Galerie des sens" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StatuesLayout />
		</div>
	);
}
