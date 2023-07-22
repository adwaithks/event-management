import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

const ServiceCard = (props) => {
	const { title, description, imageUrl } = props;

	return (
		<Box
			sx={{
				cursor: "pointer",
				position: "relative",
				backgroundColor: "black",
				overflow: "hidden",
				zIndex: 5,
				backdropFilter: "blur( 4px )",
				WebkitBackdropFilter: "blur( 4px )",
			}}
			onClick={() => {
				if (window.innerWidth < 600)
					window.open("tel:+919895228089", "_blank");
				else window.open("mailto:ronnygeorgev@gmail.com");
			}}
			height={320}
			width={300}
		>
			<Image
				height="100%"
				position="absolute"
				width="100%"
				objectFit="cover"
				sx={{
					transition: "all ease-in-out 0.2s",
					overflow: "hidden",
					filter: "brightness(0.5)",
					_hover: {
						transform: "scale(1.2)",
					},
				}}
				zIndex={1}
				src={imageUrl}
			/>
			<Box
				sx={{
					position: "relative",
					p: 3,
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					zIndex: 2,
				}}
			>
				<Text
					fontWeight="black"
					fontSize="2xl"
					fontFamily="DM Serif Display"
				>
					{title} <ArrowForwardIcon />
				</Text>
				{/* <Text fontWeight="bold">{description}</Text> */}
			</Box>
		</Box>
	);
};

export default ServiceCard;
