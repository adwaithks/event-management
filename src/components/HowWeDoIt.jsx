import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import WorkCard from "./WorkCard";

const HowWeDoIt = () => {
	return (
		<Box
			sx={{
				height: "100%",
				pb: 100,
				position: "relative",
			}}
		>
			<Image
				height="100%"
				width="100%"
				position="absolute"
				objectFit="cover"
				sx={{
					filter: "brightness(0.5)",
				}}
				src="https://images.unsplash.com/photo-1638272181967-7d3772a91265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
			/>
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					textAlign: "center",
					mb: 5,
					py: 20,
				}}
			>
				<Heading
					fontFamily="Poppins"
					color="white"
					fontWeight="extrabold"
				>
					How we do it?
				</Heading>
				<Container>
					<Text color="lightgray">
						More than 20 year&apos;s experience in corporate events
						planning guarantees a professional and experienced
						approach from a team of event organisers who will
						formulate a concept and event plan based on
						requirements, budget and creative input.
					</Text>
				</Container>
			</Box>
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: 5,
					margin: 2,
				}}
			>
				<WorkCard
					title="Latest Technology"
					description="Harnessing cutting-edge technology, we create immersive event experiences that leverage state-of-the-art audiovisual equipment and innovative event management software."
				/>
				<WorkCard
					title="Transparency"
					description="We make exceptional event experiences accessible by offering transparent pricing and working closely with your budgetary requirements, ensuring you receive the best value without compromising quality."
				/>
				<WorkCard
					title="Memorable Experience"
					description="Crafted with meticulous planning and attention to detail, our events create unforgettable moments that evoke emotions, spark connections, and leave a lasting impression."
				/>
				<WorkCard
					title="Unique Experience"
					description="Tailoring each event to reflect your brand, vision, and values, we infuse creativity, distinctive themes, and personalized touches to create a truly unique experience that sets you apart."
				/>
			</Box>
		</Box>
	);
};

export default HowWeDoIt;
