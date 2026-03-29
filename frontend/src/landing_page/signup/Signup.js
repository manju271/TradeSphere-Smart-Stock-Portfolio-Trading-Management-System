
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Signup() {
  const primeColor = "#5E35B1"; // Deep Purple
  const accentColor = "#00E676"; // Stock Green (Bullish)
  const bearishColor = "#FF5252"; // Stock Red (Bearish)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0 overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* LEFT SIDE: Signup Form */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="col-md-5 d-flex align-items-center justify-content-center bg-white shadow-lg z-1"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "400px", width: "90%" }}
        >
          <motion.div variants={itemVariants} className="mb-4">
             <h2 className="fw-bold display-6" style={{ color: primeColor }}>Join TradeSphere</h2>
             <p className="text-muted small">Start your journey into the world of smart trading.</p>
          </motion.div>

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center mb-4 py-2 border-secondary-subtle"
          >
            <img src="https://img.icons8.com" alt="google" className="me-2" />
            <small className="fw-semibold">Sign up with Google</small>
          </motion.button>

          <motion.div variants={itemVariants} className="text-center text-muted mb-4 small fw-bold">
             OR CREATE ACCOUNT WITH EMAIL
          </motion.div>

          {/* Form Fields */}
          <div className="row g-2 mb-3">
             <motion.div variants={itemVariants} className="col-md-6">
                <label className="form-label small fw-bold text-muted">FIRST NAME</label>
                <input type="text" className="form-control py-2 bg-light border-0" placeholder="firstname" />
             </motion.div>
             <motion.div variants={itemVariants} className="col-md-6">
                <label className="form-label small fw-bold text-muted">LAST NAME</label>
                <input type="text" className="form-control py-2 bg-light border-0" placeholder="lastname" />
             </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-3">
            <label className="form-label small fw-bold text-muted">EMAIL ADDRESS</label>
            <input type="email" className="form-control py-2 bg-light border-0" placeholder="example@tradesphere.com" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <label className="form-label small fw-bold text-muted">PASSWORD</label>
            <input type="password" className="form-control py-2 bg-light border-0" placeholder="Min. 8 characters" />
          </motion.div>

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "#4527A0" }}
            className="btn w-100 text-white py-2 fw-bold shadow"
            style={{ backgroundColor: primeColor, borderRadius: "8px" }}
          >
            Create Free Account
          </motion.button>

          <motion.p variants={itemVariants} className="mt-4 text-center small text-muted">
            Already a trader? <Link to="/login" style={{color: primeColor, textDecoration: 'none', fontWeight: 'bold'}}>Log in here</Link>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: Animated Market Visualization */}
      <div className="col-md-7 d-none d-md-flex position-relative align-items-center justify-content-center" 
           style={{ background: `linear-gradient(135deg, #1A237E 0%, #311B92 100%)`, overflow: 'hidden' }}>
        
        {/* Background "TradeSphere" Text */}
        <motion.h1 
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', fontSize: '8rem', fontWeight: '900', color: 'rgba(255,255,255,0.03)', whiteSpace: 'nowrap' }}
        >
          GLOBAL MARKET
        </motion.h1>

        <div className="text-center z-1">
          {/* Animated Candlesticks (Stock Market Bars) */}
          <div className="d-flex align-items-end justify-content-center gap-2 mb-4" style={{ height: '120px' }}>
            {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                  width: '12px',
                  backgroundColor: i % 2 === 0 ? accentColor : bearishColor,
                  borderRadius: '4px 4px 0 0'
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white px-5"
          >
            <h3 className="fw-bold">Experience the Bull Run</h3>
            <p className="opacity-75">Trade like a pro with expert insights and lightning-fast execution.</p>
          </motion.div>

          {/* Floating Feature Tags */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4 px-5">
            {["Zero Commission", "Real-time Data", "Advanced Analytics"].map((tag, idx) => (
              <motion.span 
                key={idx}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, delay: idx * 0.5, repeat: Infinity }}
                className="badge rounded-pill border border-light border-opacity-25 px-3 py-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Dynamic Light Rays */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(94,53,177,0.3) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
      </div>

    </div>
  );
}

export default Signup;