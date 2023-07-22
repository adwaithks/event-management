import { Box } from "@chakra-ui/react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import HowWeDoIt from "./components/HowWeDoIt";
import Whatsapp from "./components/Whatsapp";
import ContactNow from "./components/ContactNow";
import WhatElse from "./components/WhatElse";

const App = () => {
	return (
		<Box sx={{ p: 0 }}>
			<Whatsapp />
			<Navbar />
			<Landing />
			<Services />
			<HowWeDoIt />
			<WhatElse />
			<ContactNow />
			<Footer />
		</Box>
	);
};

export default App;
