// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // पेज स्विच करने के लिए

// function Login() {
//   const primeColor = "#5E35B1";

//   // Animations configuration
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { x: 20, opacity: 0 },
//     visible: { x: 0, opacity: 1 }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex p-0 overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>

//       {/* LEFT SIDE: Animated Background (Now on the left) */}
//       <div className="col-md-7 d-none d-md-block position-relative" style={{
//         background: `linear-gradient(135deg, #4B2896 0%, #7B1FA2 100%)`,
//         overflow: 'hidden'
//       }}>
//         {/* Animated Shapes */}
//         <motion.div
//            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
//            transition={{ duration: 18, repeat: Infinity }}
//            style={{
//              position: 'absolute',
//              top: '10%', right: '10%',
//              width: '60%', height: '60%',
//              borderRadius: '30%',
//              background: 'rgba(255, 255, 255, 0.04)',
//              filter: 'blur(50px)'
//            }}
//         />
//       </div>

//       {/* RIGHT SIDE: Login Form */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="col-md-5 d-flex align-items-center justify-content-center bg-white"
//       >
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           style={{ maxWidth: "400px", width: "90%" }}
//         >
//           {/* Logo */}
//           <motion.div variants={itemVariants} className="mb-5 d-flex align-items-center">
//              <div style={{width: '30px', height: '20px', background: primeColor, borderRadius: '4px', marginRight: '10px'}}></div>
//              <span className="fw-bold fs-5 text-dark">Himalayas</span>
//           </motion.div>

//           <motion.h2 variants={itemVariants} className="fw-bold mb-3">Welcome back</motion.h2>
//           <motion.p variants={itemVariants} className="text-muted mb-4 small">
//             Please enter your details to log in to your account.
//           </motion.p>

//           {/* Google Login */}
//           <motion.button
//             variants={itemVariants}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-4 py-2 border-secondary-subtle"
//           >
//             <img src="https://img.icons8.com" alt="google" className="me-2"/>
//             <small>Log in with Google</small>
//           </motion.button>

//           <motion.div variants={itemVariants} className="text-center text-muted mb-4 small">
//              OR LOGIN WITH EMAIL
//           </motion.div>

//           {/* Form Fields */}
//           <motion.div variants={itemVariants} className="mb-3">
//             <label className="form-label small fw-semibold text-muted">Email</label>
//             <input type="email" className="form-control py-2 shadow-sm border-0 bg-light" placeholder="email@example.com" />
//           </motion.div>

//           <motion.div variants={itemVariants} className="mb-4">
//             <div className="d-flex justify-content-between">
//                 <label className="form-label small fw-semibold text-muted">Password</label>
//                 <a href="#" className="small text-decoration-none" style={{color: primeColor}}>Forgot?</a>
//             </div>
//             <input type="password" className="form-control py-2 shadow-sm border-0 bg-light" placeholder="••••••••" />
//           </motion.div>

//           {/* Login Button */}
//           <motion.button
//             variants={itemVariants}
//             whileHover={{ scale: 1.01, backgroundColor: "#4527A0" }}
//             className="btn w-100 text-white py-2 shadow"
//             style={{ backgroundColor: primeColor, borderRadius: "5px" }}
//           >
//             Log in
//           </motion.button>

//           {/* Navigation to Signup */}
//           <motion.p variants={itemVariants} className="mt-4 text-center small text-muted">
//             Don't have an account? <Link to="/signup" style={{color: primeColor, textDecoration: 'none', fontWeight: '600'}}>Sign up</Link>
//           </motion.p>
//         </motion.div>
//       </motion.div>

//     </div>
//   );
// }

// export default Login;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const primeColor = "#5E35B1"; // Deep Purple
  const accentColor = "#00E676"; // Stock Green

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Stock Chart Line Animation
  const chartPath =
    "M0,100 L20,80 L40,90 L60,50 L80,60 L100,20 L120,40 L140,10 L160,30 L180,0";

  return (
    <div
      className="container-fluid vh-100 d-flex p-0 overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* LEFT SIDE: TradeSphere Animated Brand Section */}
      <div
        className="col-md-7 d-none d-md-flex position-relative align-items-center justify-content-center"
        style={{
          background: `linear-gradient(135deg, #2D1566 0%, #5E35B1 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Animated Background Text */}
        <motion.h1
          initial={{ opacity: 0.05, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          style={{
            position: "absolute",
            fontSize: "10rem",
            fontWeight: "900",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          TRADESPHERE
        </motion.h1>

        <div className="text-center text-white z-1 px-5">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="display-4 fw-bold mb-3">TradeSphere</h2>
            <p className="lead opacity-75">
              Master the Market with Real-time Intelligence.
            </p>
          </motion.div>

          {/* Animated Stock Chart Visualization */}
          <div
            className="mt-5 position-relative"
            style={{ height: "150px", width: "300px", margin: "0 auto" }}
          >
            <svg viewBox="0 0 180 100" width="100%" height="100%">
              <motion.path
                d={chartPath}
                fill="transparent"
                stroke={accentColor}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </svg>
            {/* Floating Price Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="badge bg-success position-absolute top-0 end-0 shadow-lg"
            >
              +12.5% ↑
            </motion.div>
          </div>

          <div className="d-flex justify-content-center gap-4 mt-5">
            <div className="text-center">
              <h4 className="fw-bold mb-0">24/7</h4>
              <small className="opacity-50">Support</small>
            </div>
            <div className="vr opacity-25"></div>
            <div className="text-center">
              <h4 className="fw-bold mb-0">0.01s</h4>
              <small className="opacity-50">Execution</small>
            </div>
          </div>
        </div>

        {/* Decorative Animated Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* RIGHT SIDE: Login Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="col-md-5 d-flex align-items-center justify-content-center bg-white shadow-lg"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "380px", width: "90%" }}
        >
          <motion.div variants={itemVariants} className="mb-4 text-center">
            <span className="fw-bold fs-3" style={{ color: primeColor }}>
              Login to TradeSphere
            </span>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center mb-4 py-2"
          >
            <img src="https://img.icons8.com" alt="google" className="me-2" />
            <small className="fw-semibold">Sign in with Google</small>
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="text-center text-muted mb-4 small fw-bold"
          >
            OR USE YOUR EMAIL
          </motion.div>

          <motion.div variants={itemVariants} className="mb-3">
            <label className="form-label small fw-bold text-muted">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="form-control py-2 bg-light border-0"
              placeholder="name@tradesphere.com"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <div className="d-flex justify-content-between">
              <label className="form-label small fw-bold text-muted">
                PASSWORD
              </label>
              <a
                href="ResetPassword"
                className="small text-decoration-none"
                style={{ color: primeColor }}
              >
                Reset?
              </a>
            </div>
            <input
              type="password"
              className="form-control py-2 bg-light border-0"
              placeholder="Example@123"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "#4527A0" }}
            className="btn w-100 text-white py-2 fw-bold shadow"
            style={{ backgroundColor: primeColor, borderRadius: "8px" }}
          >
            Access Dashboard
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-center small text-muted"
          >
            New to the market?{" "}
            <Link
              to="/signup"
              style={{
                color: primeColor,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Create Account
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
