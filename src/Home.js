import React from "react";
import "./Home.css";
import Navigation from "./Navigation";
import AppBody from "./AppBody";

import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [roomId, setroomId] = useState("");

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }
//   const getRoomID = (event) => {
//     event.preventDefault();
//   };
//   // const socket = io("http://localhost:8000");

//   // socket.on("connect", () => {
//   //   console.log("Socket connected");
//   // });

//   const navigate = useNavigate();
//   async function joinRoom() {
//     await axios
//       .get("http://localhost:5000/join", {
//         params: {
//           roomId: roomId,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         navigate("room=/" + `${res.data}`);
//       });
//   }

//   async function createRoom(e) {
//     await axios.get("http://localhost:5000/room").then((res) => {
//       navigate("room=/" + `${res.data.room}`);
//     });
//   }

const Home = () => {
  return (
    <div className="Title">
      <Navigation />
      <AppBody />
    </div>
  );
};
// };
export default Home;
