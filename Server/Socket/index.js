const io = require("socket.io")(8800, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let activeusers = [];
//lets establish a connection event
io.on("connection", (socket) => {
  //lets now make custom events
  //lets add a user
  socket.on("new-user_add", (newuserid) => {
    //what if the user is not previously added
    if (
      !activeusers.some((user) => {
        user.userid === newuserid;
      })
    ) {
      activeusers.push({ userid: newuserid, socketId: socket.id });
      console.log("new user connected", activeusers);
    }
    //event handler fro showing active users
    socket.emit("get-users", activeusers);
  });
  //disconnecting user
  socket.on("disconnect", () => {
    activeusers = activeusers.filter((user) => {
      user.socketId !== socket.id;
    });
    console.log("user dsiconnected", activeusers);
    io.emit(activeusers);
  });
  //send the message to a specific user
  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = activeusers.find((user) => user.userId === receiverId);
    console.log("Sending from socket to :", receiverId);
    console.log("Data: ", data);
    if (user) {
      io.to(user.socketId).emit("recieve-message", data);
    }
  });
});
