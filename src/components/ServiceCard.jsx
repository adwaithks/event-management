import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Box,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const events = {
	weddings: {
		title: "Weddings",
		images: [
			"https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://plus.unsplash.com/premium_photo-1675106698116-93a91203894c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	birthdays: {
		title: "Birthdays",
		images: [
			"https://plus.unsplash.com/premium_photo-1677221924769-54f24d80ea0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
			"https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnRoZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	familyevents: {
		title: "Family Events",
		images: [
			"https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwZXZlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1526277015674-026cb84653ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFtaWx5JTIwZXZlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1577071309899-d44b2b1b7b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhbWlseSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	baptisms: {
		title: "Baptisms",
		images: [
			"https://plus.unsplash.com/premium_photo-1664372356679-7acf68df4254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhcHRpc218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			"https://plus.unsplash.com/premium_photo-1664372356766-254c528f2187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFwdGlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://plus.unsplash.com/premium_photo-1664372356582-4a478a298731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJhcHRpc218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	corporateevents: {
		title: "Corporate Events",
		images: [
			"https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvcnBvcmF0ZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvcnBvcmF0ZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvcnBvcmF0ZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	babyshowers: {
		title: "Baby Showers",
		images: [
			"https://images.unsplash.com/photo-1594300907312-c6603f83b2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFieSUyMHNob3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://plus.unsplash.com/premium_photo-1677655407676-6ddb0e67f2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMHNob3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1518566585952-954bb14432d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnklMjBzaG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	festivecelebrations: {
		title: "Festive Celebrations",
		images: [
			"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVzdGl2ZSUyMGNlbGVicmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1607919966670-90622ba53a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVzdGl2ZSUyMGNlbGVifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1607919965349-c3c790913de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVzdGl2ZSUyMGNlbGVifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	luncheons: {
		title: "Luncheons",
		images: [
			"https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHVuY2hlb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1667895195438-eac50ef68b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1bmNoZW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1612204103649-a544a34978db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuY2hlb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	conventions: {
		title: "Conventions",
		images: [
			"https://images.unsplash.com/photo-1660714144430-d64b4673631f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29udmVudGlvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1507696988306-48f9f533a522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbnZlbnRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1630816682184-9071de37cb32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvbnZlbnRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	lifecelebrations: {
		title: "Life Celebrations",
		images: [
			"https://images.unsplash.com/photo-1593575240467-a3bbc4b0eb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpZmUlMjBjZWxlYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlmZSUyMGNlbGVifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1615472846433-4593b99df118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbnZlbnRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
	grandopenings: {
		title: "Grand Openings",
		images: [
			"https://images.unsplash.com/photo-1567967127991-cd0814e55cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYW5kJTIwb3BlbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1606617556970-b9cddf4c1319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1567449303078-57ad995bd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			// Add more images here as needed
		],
	},
};

const ServiceCard = (props) => {
	const { title, description, imageUrl } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	console.log(events[title.replaceAll(" ", "").toLowerCase()]);
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
				onOpen();
			}}
			height={320}
			width={300}
		>
			<Modal
				isOpen={isOpen}
				closeOnEsc
				closeOnOverlayClick
				isCentered
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent backgroundColor="transparent">
					<ModalCloseButton />
					<ModalBody backgroundColor="transparent">
						{isOpen && (
							<Carousel
								showArrows
								showIndicators
								showThumbs
								showStatus
							>
								{events[
									title.replaceAll(" ", "").toLowerCase()
								].images.map((im, i) => {
									return (
										<div
											height="300px"
											width="300px"
											key={i}
										>
											<img
												height="300px"
												width="300px"
												src={im}
											/>
											{/* <p className="legend">Legend 1</p> */}
										</div>
									);
								})}
								{/* <div>
								<img src="assets/1.jpeg" />
								<p className="legend">Legend 1</p>
							</div>
							<div>
								<img src="assets/2.jpeg" />
								<p className="legend">Legend 2</p>
							</div>
							<div>
								<img src="assets/3.jpeg" />
								<p className="legend">Legend 3</p>
							</div> */}
							</Carousel>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
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
				<Text fontWeight="black" fontSize="2xl" fontFamily="Poppins">
					{title} <ArrowForwardIcon />
				</Text>
				{/* <Text fontWeight="bold">{description}</Text> */}
			</Box>
		</Box>
	);
};

export default ServiceCard;
