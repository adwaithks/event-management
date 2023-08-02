import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Box,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

const events = {
	destinationthemeweddings:
		"https://images.unsplash.com/photo-1567888818950-737cde12f04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzdGluYXRpb24lMjB3ZWRkaW5nfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
	openairfunctions:
		"https://images.unsplash.com/photo-1547963802-25f153e14080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMGFpciUyMGZ1bmN0aW9uc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
	waterthemeceremonies:
		"https://images.unsplash.com/photo-1645306715377-b82ddef01404?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGUlMjBjZXJlbW9uaWVzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
	exquisitephotography:
		"https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	"music&dancebands":
		"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	honeymoonpackages:
		"https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXltb29ufGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
	makeoverservices:
		"https://images.unsplash.com/photo-1662151820001-0c8d949304a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZW92ZXIlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
	luxuryvehicles:
		"https://images.unsplash.com/photo-1522255272218-7ac5249be344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwdmVyaGljbGVzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
};

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
				src={events[title.replaceAll(" ", "").toLowerCase()]}
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
				<Text fontFamily="Poppins" fontSize="2xl" mr={2}>
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
				bgColor: "#d1b500",
				mb: isTabletOrBelow ? 100 : 120,
				position: "relative",
				pb: 200,
			}}
			width="100%"
			justifyContent="center"
			margin="auto"
			flexWrap="wrap"
		>
			<Image
				height="100%"
				position="absolute"
				zIndex={1}
				filter="brightness(100%)"
				width="100%"
				src="https://images.unsplash.com/photo-1545873681-d8affd67677b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
			/>
			<Box pt={100} sx={{ position: "relative", zIndex: 2 }} mb={5}>
				<Heading
					textAlign="center"
					fontWeight="extrabold"
					fontFamily="Poppins"
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
