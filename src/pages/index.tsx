import Head from "next/head";
import HomeLayout from "../components/Home/HomeLayout";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Galerie des sens - Accueil</title>
				<meta name="description" content="Accueil - Galerie des sens" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeLayout />
		</div>
	);
}
