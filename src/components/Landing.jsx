import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Landing = () => {
	const isTabletOrBelow = useBreakpointValue({
		base: true,
		md: true,
		lg: false,
	});

	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				bgColor: "#1e0133",
				position: "relative",
			}}
		>
			{isTabletOrBelow && (
				<Image
					sx={{ position: "absolute", zIndex: 1 }}
					objectFit="cover"
					filter="brightness(0.4)"
					src="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80"
					height="100%"
					width="100%"
				/>
			)}
			<Container
				textAlign={isTabletOrBelow ? "center" : "left"}
				sx={{
					position: "relative",
					zIndex: 2,
					width: isTabletOrBelow ? "100%" : "50%",
				}}
			>
				<Heading
					sx={{
						letterSpacing: 6,
						textDecoration: "underline",
						textDecorationColor: "gold",
					}}
					fontSize={isTabletOrBelow ? "4xl" : "6xl"}
					fontFamily="DM Serif Display"
					fontWeight="800"
					color="white"
					mb={2}
				>
					Find any perfect venue for wherever life takes you!
				</Heading>
				<Text fontSize="xl" color="lightgray">
					The only event management platform you need. Find any
					perfect venue for wherever life takes you!
				</Text>
				<Button
					mt={8}
					borderRadius={0}
					size="lg"
					width={200}
					bgColor="white"
					onClick={() => {
						if (window.innerWidth < 600)
							window.open("tel:+919895228089", "_blank");
						else window.open("mailto:ronnygeorgev@gmail.com");
					}}
					sx={{
						boxShadow: "5px 5px 0px black",
						border: "solid 2px",
						_hover: {
							border: " black solid 2px",
							bgColor: "black",
							color: "white",
						},
					}}
					color="black"
				>
					Contact Us Now
					<ArrowForwardIcon ml={2} />
				</Button>
			</Container>
			{!isTabletOrBelow && (
				<Box sx={{ width: "50%", bgColor: "white", height: "100%" }}>
					<Image
						objectFit="cover"
						height={"100%"}
						width={"100%"}
						filter="brightness(0.7)"
						src={
							"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Landing;
