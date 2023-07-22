import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Box,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

const Service1 = ({ title }) => {
	const [isOver, setIsOver] = useState(false);
	return (
		<Box
			sx={{
				p: 2,
				fontWeight: "bold",
				transition: "background-color ease-in 0.1s",
				width: 300,
				height: 300,
				display: "flex",
				position: "relative",
				justifyContent: "flex-start",
				_hover: {
					filter: "brightness(0.9)",
				},
				// _hover: {
				// 	bgColor: "#260042",
				// 	color: "white",
				// 	cursor: "pointer",
				// 	boxShadow: "5px 5px 0px #260042",
				// 	border: "#260042 solid 2px",
				// },
			}}
			onClick={() => {
				if (window.innerWidth < 600)
					window.open("tel:+919895228089", "_blank");
				else window.open("mailto:ronnygeorgev@gmail.com");
			}}
			onMouseEnter={() => setIsOver(true)}
			onMouseLeave={() => setIsOver(false)}
		>
			<Image
				sx={{
					position: "absolute",
					zIndex: 1,
					filter: "brightness(0.3)",
				}}
				src="https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
				height="100%"
				width="100%"
			/>
			<Box
				sx={{
					display: "flex",
					color: "white",
					zIndex: 2,
					p: 4,
				}}
			>
				<Text fontFamily="DM Serif Display" fontSize="2xl" mr={2}>
					{title}
				</Text>
				<ArrowForwardIcon fontSize="3xl" />
			</Box>
		</Box>
	);
};

const services = [
	{
		title: "Destination Theme Weddings",
		color: "rgba(255, 87, 51, 0.4)",
		borderColor: "rgb(255, 87, 51)",
		textColor: "rgb(255, 87, 51)", // Matching text color
	},
	{
		title: "Open Air functions",
		color: "rgba(51, 102, 204, 0.4)",
		borderColor: "rgb(51, 102, 204)",
		textColor: "rgb(51, 102, 204)", // Matching text color
	},
	{
		title: "Water Theme Ceremonies",
		color: "rgba(102, 204, 153, 0.4)",
		borderColor: "rgb(102, 204, 153)",
		textColor: "rgb(102, 204, 153)", // Matching text color
	},
	{
		title: "Exquisite Photography",
		color: "rgba(255, 195, 0, 0.4)",
		borderColor: "rgb(255, 195, 0)",
		textColor: "rgb(255, 195, 0)", // Matching text color
	},
	{
		title: "Music & Dance Bands",
		color: "rgba(153, 51, 153, 0.4)",
		borderColor: "rgb(153, 51, 153)",
		textColor: "rgb(153, 51, 153)", // Matching text color
	},
	{
		title: "Honeymoon Packages",
		color: "rgba(255, 102, 51, 0.4)",
		borderColor: "rgb(255, 102, 51)",
		textColor: "rgb(255, 102, 51)", // Matching text color
	},
	{
		title: "Makeover Services",
		color: "rgba(102, 204, 204, 0.4)",
		borderColor: "rgb(102, 204, 204)",
		textColor: "rgb(102, 204, 204)", // Matching text color
	},
	{
		title: "Luxury vehicles",
		color: "rgba(255, 153, 0, 0.4)",
		borderColor: "rgb(255, 153, 0)",
		textColor: "rgb(255, 153, 0)", // Matching text color
	},
];

const WhatElse = () => {
	const isTabletOrBelow = useBreakpointValue({
		base: true,
		md: true,
		lg: false,
	});

	return (
		<Box
			sx={{
				mb: isTabletOrBelow ? 100 : 120,
				mt: 200,
				p: 10,
			}}
			width="100%"
			justifyContent="center"
			margin="auto"
			flexWrap="wrap"
		>
			<Box mb={5}>
				<Heading
					textAlign="center"
					fontWeight="extrabold"
					fontFamily="DM Serif Display"
				>
					What Else Do We Offer ?
				</Heading>
				<Text color="gray" textAlign="center">
					We are not done yet! We offer even more, other than our core
					services
				</Text>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 5,
				}}
			>
				{services.map((service, index) => {
					return <Service1 title={service.title} key={index} />;
				})}
			</Box>
		</Box>
	);
};

export default WhatElse;
