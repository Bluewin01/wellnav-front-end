import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CollapseSideBar from "../../components/CollapseSideBar/CollapseSideBar";
import Header from "../../components/Header/Header";
import Air from "../../Assets/Air.png";
import "./WaterTracking.css";

const WaterTracking = () => {
  const [waterIntakes, setWaterIntakes] = useState([]);
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [totalIntake, setTotalIntake] = useState(0);
  const dailyTarget = 2000;

  const handleSubmit = (e) => {
    e.preventDefault();
    const intakeAmount = parseInt(amount);
    const newTotalIntake = totalIntake + intakeAmount;

    const newIntake = {
      amount: intakeAmount,
      time,
    };

    setWaterIntakes([...waterIntakes, newIntake]);
    setTotalIntake(newTotalIntake);
    setAmount("");
    setTime("");
  };

  return (
    <div className="App">
      <CollapseSideBar />
      <div className="Water-Container">
        <Header />
        <div className="daily-target">
          <p>Target Hidrasi </p>
          <h3>{dailyTarget} ml</h3>
        </div>

        <div className="Water-content">
          <div className="left-section">
            <div className="form-section">
              {/* <h2>Water Intake Tracker</h2> */}

              {/* Input */}
              <form onSubmit={handleSubmit}>
                <label className="Amount">
                  Jumlah air (ml) :
                  <input
                    className="no-arrows"
                    type="number"
                    value={amount}
                    placeholder="Masukkan Jumlah Air"
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Waktu
                  <div className="Waktu">
                    <p>:</p>
                  </div>
                  <input
                    className="custom-time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </label>
                <button type="submit">Tambah</button>
              </form>
            </div>
            <img src={Air} alt="Air" className="Air-img" />
          </div>
          {/* Glass */}
          <div className="right-section">
            <div className="water-glass-section">
              <div className="water-glass">
                <div
                  className="water-level"
                  style={{
                    height: `${Math.min(
                      (totalIntake / dailyTarget) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>

              <div className="total-intake">
                <p>Total</p> <h3>{totalIntake} ml</h3>
              </div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="log-section">
          <div className="log-water">
            <h3>Minuman Hari ini</h3>
            <table>
              <thead>
                <tr>
                  <th>Jumlah (ml)</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                {waterIntakes.map((intake, index) => (
                  <tr key={index}>
                    <td>{intake.amount}</td>
                    <td>{intake.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalIntake >= dailyTarget && (
            <p className="congratulations">
              Selamat!! Anda sudah mencapai target harian
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaterTracking;
