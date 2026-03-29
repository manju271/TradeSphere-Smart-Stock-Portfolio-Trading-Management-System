import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const primeColor = "#5E35B1"; // Deep Purple matching your Login page

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    setIsSubmitted(true);
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card border-0 shadow-lg p-4 p-md-5"
        style={{ maxWidth: "450px", width: "95%", borderRadius: "15px" }}
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#EDE7F6",
                    borderRadius: "50%",
                  }}
                >
                  <i
                    className="bi bi-key-fill fs-3"
                    style={{ color: primeColor }}
                  >
                    TradeSphere
                  </i>
                </div>
                <h2 className="fw-bold">Forgot Password?</h2>
                <p className="text-muted small">
                  No worries, we'll send you reset instructions.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label small fw-semibold text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-2 shadow-sm border-0 bg-light"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Link to="/ResetPasswordFlow">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn w-100 text-white py-2 shadow mb-3"
                    style={{ backgroundColor: primeColor }}
                  >
                    Reset Password
                  </motion.button>
                </Link>
              </form>

              <div className="text-center mt-3">
                <Link
                  to="/login"
                  className="text-decoration-none small fw-bold"
                  style={{ color: primeColor }}
                >
                  <i className="bi bi-arrow-left me-2"></i>Back to log in
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-3"
            >
              <div
                className="d-inline-flex align-items-center justify-content-center mb-4"
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#E8F5E9",
                  borderRadius: "50%",
                }}
              >
                <i className="bi bi-envelope-check-fill fs-2 text-success"></i>
              </div>
              <h2 className="fw-bold mb-3">Check your email</h2>
              <p className="text-muted mb-4">
                We've sent a password reset link to <br />
                <span className="fw-bold text-dark">{email}</span>
              </p>

              <Link
                to="/login"
                className="btn w-100 text-white py-2 mb-3 shadow"
                style={{ backgroundColor: primeColor }}
              >
                Return to Login
              </Link>

              <p className="small text-muted">
                Didn't receive the email?{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-link p-0 small text-decoration-none fw-bold"
                  style={{ color: primeColor }}
                >
                  Click to resubmit
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ResetPassword;
