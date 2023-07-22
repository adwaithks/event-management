import { Box } from "@chakra-ui/react";
import { WhatsAppOutlined } from "@ant-design/icons";

const Whatsapp = () => {
	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 5,
				right: 5,
				height: 55,
				width: 55,
				zIndex: 10,
				display: "flex",
				cursor: "pointer",
				alignItems: "center",
				justifyContent: "center",
				bgColor: "darkgreen",
				borderRadius: "50%",
			}}
			onClick={() => {
				window.open(
					"https://api.whatsapp.com/send?phone=+919895228089&text=Enquiring%20for%20available%20services",
					"_blank"
				);
			}}
		>
			<WhatsAppOutlined
				style={{
					color: "white",
					fontSize: 40,
				}}
			/>
		</Box>
	);
};

export default Whatsapp;
