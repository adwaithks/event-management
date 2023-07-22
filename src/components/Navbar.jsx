import { Box, Image, Link, Text } from "@chakra-ui/react";
import Logo from "./logo.png";
const Navbar = () => {
	return (
		<Box
			sx={{
				display: "flex",
				backdropFilter: "blur(100px)",
				top: 0,
				position: "fixed",
				zIndex: 10,
				alignItems: "center",
				width: "100%",
				color: "white",
				height: 50,
				p: 10,
			}}
		>
			<Box>
				<Image src={Logo} height={65} width={100} />
			</Box>
			{/* <Box sx={{ ml: 5 }}>
				<Link mr={5} href="/">
					Home
				</Link>
				<Link mr={5} href="/">
					Services
				</Link>
				<Link mr={5} href="/">
					About
				</Link>
				<Link href="/">Contact</Link>
			</Box> */}
		</Box>
	);
};

export default Navbar;
