import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

const WorkCard = ({ title, description }) => {
	return (
		<Box
			sx={{
				transition: "box-shadow ease-in 0.1s",
				width: {
					md: "45%",
				},
				p: 3,
			}}
		>
			<Box>
				<Text
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						mb: 3,
						color: "white",
					}}
					fontFamily="DM Serif Display"
					fontSize="3xl"
					fontWeight="bold"
				>
					<CheckCircleIcon color="lightgreen" fontSize="3xl" mr={3} />
					{title}
				</Text>
			</Box>
			<Box>
				<Text fontSize="md" color="white">
					{description}
				</Text>
			</Box>
		</Box>
	);
};

export default WorkCard;
