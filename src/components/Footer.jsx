import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: "black",
				height: 100,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
			}}
		>
			<Text textAlign="center">
				Copyright © 2023 Ronnys Caterers - All Rights Reserved.
			</Text>
		</Box>
	);
};

export default Footer;
