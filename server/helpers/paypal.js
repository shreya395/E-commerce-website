const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "live",
  client_id: "",
  client_secret: "",
});

module.exports = paypal;


// key_id: "rzp_test_M26euxEYAUYTw1", // Replace with your Razorpay Key ID
// key_secret: "75dsU9ZMvSstF82kKSae4eAS", // Replace with your Razorpay Key Secret
