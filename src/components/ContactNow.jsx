import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const ContactNow = () => {
	return (
		<Box sx={{ mb: 100 }}>
			<Box textAlign="center">
				<Heading fontWeight="extrabold" fontFamily="DM Serif Display">
					Get in Touch, Let&apos;s Make Magic Happen!
				</Heading>
				<Container>
					<Text color="gray" fontSize="xl">
						Because Events Don&apos;t Manage Themselves... But We
						Do!
					</Text>
				</Container>

				<Button
					size="xl"
					mt={5}
					borderRadius={0}
					bgColor="black"
					fontWeight="black"
					color="white"
					fontSize="xl"
					p={3}
					width={300}
					onClick={() => {
						if (window.innerWidth < 600)
							window.open("tel:+919895228089", "_blank");
						else window.open("mailto:ronnygeorgev@gmail.com");
					}}
				>
					Contact Us Now
					<ArrowForwardIcon ml={2} />
				</Button>
			</Box>
		</Box>
	);
};

export default ContactNow;
