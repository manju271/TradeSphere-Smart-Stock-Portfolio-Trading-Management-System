import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function ResetPasswordFlow() {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const primeColor = "#5E35B1"; // Deep Purple
  const accentColor = "#00E676"; // TradeSphere Green

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  // Common Animation Settings
  const fadeVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f4f7fe" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="card border-0 shadow-lg p-4 p-md-5"
        style={{ maxWidth: "450px", width: "90%", borderRadius: "20px" }}
      >
        {/* TradeSphere Logo Section */}
        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: primeColor }}>
            TradeSphere
          </h3>
          <div className="progress mt-2" style={{ height: "4px" }}>
            <div
              className="progress-bar"
              style={{
                width: `${(step / 3) * 100}%`,
                backgroundColor: primeColor,
              }}
            ></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Enter Email */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h4 className="fw-bold mb-2">Reset Password</h4>
              <p className="text-muted small mb-4">
                Enter your registered email to receive an OTP.
              </p>
              <form onSubmit={handleNext}>
                <div className="mb-4">
                  <label className="form-label small fw-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control py-2 bg-light border-0 shadow-sm"
                    placeholder="name@company.com"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 shadow"
                  style={{ backgroundColor: primeColor }}
                >
                  Send OTP
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 2: Enter OTP */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h4 className="fw-bold mb-2">Verify OTP</h4>
              <p className="text-muted small mb-4">
                We've sent a 6-digit code to <b>{formData.email}</b>
              </p>
              <form onSubmit={handleNext}>
                <div className="mb-4">
                  <label className="form-label small fw-bold text-center w-100">
                    Enter Code
                  </label>
                  <input
                    type="text"
                    maxLength="6"
                    className="form-control text-center fs-4 fw-bold border-0 bg-light shadow-sm"
                    placeholder="0 0 0 0 0 0"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, otp: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 shadow"
                  style={{ backgroundColor: primeColor }}
                >
                  Verify Code
                </button>
                <p className="text-center mt-3 small text-muted">
                  Didn't get it?{" "}
                  <span style={{ color: primeColor, cursor: "pointer" }}>
                    Resend Code
                  </span>
                </p>
              </form>
            </motion.div>
          )}

          {/* STEP 3: New Password */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h4 className="fw-bold mb-2">Secure Your Account</h4>
              <p className="text-muted small mb-4">
                Create a new strong password for TradeSphere.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Password Changed Successfully!");
                }}
              >
                <div className="mb-3">
                  <label className="form-label small fw-bold">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-light border-0 shadow-sm"
                    placeholder="••••••••"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-light border-0 shadow-sm"
                    placeholder="••••••••"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 shadow"
                  style={{ backgroundColor: accentColor }}
                >
                  Update Password
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-4">
          <Link to="/login" className="text-decoration-none small text-muted">
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ResetPasswordFlow;
