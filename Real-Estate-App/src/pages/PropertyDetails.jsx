// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { styles } from "../styles/styles";


// const PropertyDetails = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPropertyDetails = async () => {
//       try {
//         const response = await axios.get(`https://mock-server-app-5gxy.onrender.com/properties/${id}`);
//         setProperty(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchPropertyDetails();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <>
//       <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
//         <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg">
//           <img src={property.photos[0]} alt={property.title} className="w-full h-96 object-cover" />
//           <div className="p-4">
//             <h1 className="text-3xl font-semibold">{property.title}</h1>
//             <p className="text-gray-600 mt-2">{property.description}</p>
//             <p className="text-lg font-semibold mt-2">Price: ₹{property.price}</p>
//             <p className="text-gray-500 mt-4">Location: {property.location}</p>
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold">Amenities</h2>
//               <ul className="list-disc list-inside">
//                 {property.amenities.map((amenity, index) => (
//                   <li key={index}>{amenity}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PropertyDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { styles } from "../styles/styles";

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchPropertyDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://mock-server-app-5gxy.onrender.com/properties/${id}`
//         );
//         setProperty(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchPropertyDetails();
//   }, [id]);

//   const handleSendMessage = () => {
//     // Handle sending message logic here
//     console.log("Message sent:", message);
//     onClose();
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <>
//       <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
//         <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg">
//           <img
//             src={property.photos[0]}
//             alt={property.title}
//             className="w-full h-96 object-cover"
//           />
//           <div className="p-4">
//             <h1 className="text-3xl font-semibold">{property.title}</h1>
//             <p className="text-gray-600 mt-2">{property.description}</p>
//             <p className="text-lg font-semibold mt-2">
//               Price: ₹{property.price}
//             </p>
//             <p className="text-gray-500 mt-4">Location: {property.location}</p>
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold">Amenities</h2>
//               <ul className="list-disc list-inside">
//                 {property.amenities.map((amenity, index) => (
//                   <li key={index}>{amenity}</li>
//                 ))}
//               </ul>
//             </div>
//             <Button
//               mt={4}
//               // colorScheme="yellow"
//               style={{ backgroundColor: "#e9b308", color: "white" }}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent navigation on button click
//                 onOpen();
//               }}
//             >
//               Contact
//             </Button>
//           </div>
//         </div>
//       </div>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Contact {property.agentName}</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl mb={4}>
//               <FormLabel>Agent Name</FormLabel>
//               <Input value={property.agentName} isReadOnly />
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel>Agent Email</FormLabel>
//               <Input value={property.agentEmail} isReadOnly />
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel>Agent Phone</FormLabel>
//               <Input value={property.agentPhone} isReadOnly />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Message</FormLabel>
//               <Textarea
//                 placeholder="Type your message here..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </FormControl>
//             <Button
//               mt={4}
//               colorScheme="teal"
//               onClick={handleSendMessage}
//               style={{ backgroundColor: "#e9b308", color: "white" }}
//             >
//               Send Message
//             </Button>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default PropertyDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { styles } from "../styles/styles";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(
          `https://mock-server-app-5gxy.onrender.com/properties/${id}`
        );
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  const handleSendMessage = () => {
    // Handle sending message logic here
    console.log("Message sent:", message);
    onClose();
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="lg" />
      </Center>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
        <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg">
          <img
            src={property.photos[0]}
            alt={property.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <h1 className="text-3xl font-semibold">{property.title}</h1>
            <p className="text-gray-600 mt-2">{property.description}</p>
            <p className="text-lg font-semibold mt-2">
              Price: ₹{property.price}
            </p>
            <p className="text-gray-500 mt-4">Location: {property.location}</p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Amenities</h2>
              <ul className="list-disc list-inside">
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <Button
              mt={4}
              style={{ backgroundColor: "#e9b308", color: "white" }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigation on button click
                onOpen();
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact {property.agentName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Agent Name</FormLabel>
              <Input value={property.agentName} isReadOnly />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Agent Email</FormLabel>
              <Input value={property.agentEmail} isReadOnly />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Agent Phone</FormLabel>
              <Input value={property.agentPhone} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={handleSendMessage}
              style={{ backgroundColor: "#e9b308", color: "white" }}
            >
              Send Message
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PropertyDetails;
