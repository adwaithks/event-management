import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import { useEffect, useRef, useState } from "react";

const events = [
	{
		title: "Weddings",
		description:
			"Celebrate the union of love with our exquisite wedding planning and coordination services. We create magical moments and ensure a memorable experience for the couple and their guests.",
		imageUrl:
			"https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		title: "Birthdays",
		description:
			"Make your special day even more extraordinary with our birthday event services. From themed decorations to fun-filled activities, we create a joyful and memorable celebration for all ages.",
		imageUrl:
			"https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1264&q=80",
	},
	{
		title: "Family Events",
		description:
			"Gather your loved ones and create unforgettable memories with our family event planning services. We design personalized experiences that bring families closer together.",
		imageUrl:
			"https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		title: "Baptisms",
		description:
			"Mark the beginning of a spiritual journey with our baptism event services. We offer a sacred and meaningful ceremony that honors your faith and the significance of this milestone.",
		imageUrl:
			"https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		title: "Corporate Events",
		description:
			"Host successful corporate events that leave a lasting impression on clients, partners, and employees. Our corporate event planning and management services ensure smooth execution and a professional atmosphere.",
		imageUrl:
			"https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
	},
	{
		title: "Baby Showers",
		description:
			"Welcome the arrival of a precious little one with our baby shower event services. We create a heartwarming and joyful celebration to honor the expecting parents and their bundle of joy.",
		imageUrl:
			"https://images.unsplash.com/photo-1625990462521-a09e6b880d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1037&q=80",
	},
	{
		title: "Festive Celebrations",
		description:
			"Experience the joy and spirit of festive seasons with our celebration services. From Christmas to Diwali, we create festive atmospheres filled with happiness, traditions, and cultural richness.",
		imageUrl:
			"https://images.unsplash.com/photo-1634038036367-7c0e7a95fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
	},
	{
		title: "Luncheons",
		description:
			"Host elegant and delightful luncheons with our event planning and catering services. Whether it's a business luncheon or a social gathering, we ensure a tasteful experience for all guests.",
		imageUrl:
			"https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	},
	{
		title: "Conventions",
		description:
			"Organize impactful and successful conventions with our professional event management services. We provide comprehensive solutions, including venue selection, logistics, program coordination, and more.",
		imageUrl:
			"https://images.unsplash.com/photo-1599706747273-8e6caa20d436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		title: "Life Celebrations",
		description:
			"Honor the milestones and achievements in life with our celebration services. From graduations to anniversaries, we create memorable moments that reflect the importance of these special occasions.",
		imageUrl:
			"https://images.unsplash.com/photo-1503847977400-9b90e320db5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1245&q=80",
	},
	{
		title: "Grand Openings",
		description:
			"Launch your new venture with a grand opening event that captivates the audience and generates excitement. Our event planning services help you create a remarkable introduction to your business.",
		imageUrl:
			"https://images.unsplash.com/photo-1593238404535-cda7ae2fe50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
	},
];

const Services = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				alignItems: "center",
				py: 40,
			}}
		>
			<Box sx={{ textAlign: "center", mr: 2, mb: 5 }}>
				<Heading fontWeight="extrabold" fontFamily="DM Serif Display">
					Our Services
				</Heading>
				<Container>
					<Text color="gray">
						We offer a plethora of services. Leading Event
						Management Company In Kochi, Kerala
					</Text>
				</Container>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					width: "100%",
					gap: 1,
				}}
			>
				{events.map((event, index) => {
					return (
						<ServiceCard
							key={index}
							imageUrl={event.imageUrl}
							title={event.title}
							description={event.description}
						/>
					);
				})}
				{/* <ServiceCard
					imageUrl="https://img1.wsimg.com/isteam/stock/52957/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
					title="Healthy Options"
					description="Great taste is the name of the game and we're committed to stepping up to the plate. Our goal is provide delicious, natural options. That's why we prepare all of our meals with fresh, locally sourced ingredients. "
				/>
				<ServiceCard
					imageUrl="https://img1.wsimg.com/isteam/stock/YO2jWwk/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
					title="Catering"
					description="Are you looking for someone to provide the food at your next event? Large or small, we do it all! Get in touch to start planning the perfect meal for a business lunch, wedding, cocktail reception, and more!"
				/>
				<ServiceCard
					imageUrl="https://img1.wsimg.com/isteam/stock/lbAeg08/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
					title="Destination Events"
					description="In today's culture of unhealthy fast food, eating well can be difficult. Don't know where to start? Let us help with our tailored menu program. Get in touch so we can work together to plan something that's right for you."
				/>
				<ServiceCard
					imageUrl="https://img1.wsimg.com/isteam/stock/52957/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
					title="Transportation"
					description="Great taste is the name of the game and we're committed to stepping up to the plate. Our goal is provide delicious, natural options. That's why we prepare all of our meals with fresh, locally sourced ingredients. "
				/>
				<ServiceCard
					imageUrl="https://img1.wsimg.com/isteam/stock/YO2jWwk/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
					title="Music"
					description="Are you looking for someone to provide the food at your next event? Large or small, we do it all! Get in touch to start planning the perfect meal for a business lunch, wedding, cocktail reception, and more!"
				/>
				<ServiceCard
					imageUrl="https://img1.wsimg.com/isteam/stock/lbAeg08/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
					title="Decorations"
					description="In today's culture of unhealthy fast food, eating well can be difficult. Don't know where to start? Let us help with our tailored menu program. Get in touch so we can work together to plan something that's right for you."
				/> */}
			</Box>
		</Box>
	);
};

export default Services;
