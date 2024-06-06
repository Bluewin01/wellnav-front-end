import React, { useState } from "react";
import Home from "../../Assets/Home.png";
import FiturPelacakan from "../../Assets/FiturPelacakan.png";
import FiturKalori from "../../Assets/FiturKalori.png";
import FiturNotifikasi from "../../Assets/FiturNotifikasi.png";
import String from "../../Assets/string.png";
import "./LandingPage.css";

function Recommendation() {
  return (
    <div className="App">
      <div className="Landing-Header">
        <h1>Wellnav</h1>
        <p>Home</p>
        <p>About</p>
        <p>Faq</p>
      </div>
      {/* PENGENALAN  */}
      <div className="spacing-br">
        <div className="Landing-Content">
          <img src={Home} alt="Home" className="Home-img" />

          <h1>
            Membimbing Anda Menuju
            <br /> Masa Depan yang Lebih Sehat.
          </h1>
          <p>
            Panduan khusus untuk pola makan sehat, <br />
            disesuaikan dengan kebutuhan kesehatan Anda
          </p>

          <button>Mulai</button>
        </div>
        {/* ABOUT US  */}
        <div className="Landing-About">
          <h1>About us</h1>
          <p>
            Halo teman-teman semua. <br />
            Perkenalkan kami tiga mahasiswa semester akhir <br />
            dari Universitas Bina Nusantara
          </p>
          <button>Lainnya...</button>
        </div>

        <div className="Landing-Why">
          <img
            src={String}
            alt="Landing-String"
            className="LString-img left-img"
          />
          <h1 className="Center-Why">
            Kenapa Memilih <br /> Wellnav
          </h1>
          <img
            src={String}
            alt="Landing-String"
            className="LString-img right-img"
          />
        </div>

        {/* PENJELASAN FITUR  */}
        <div className="Landing-Fitur">
          <div className="FiturContent-Left">
            <img
              src={FiturPelacakan}
              alt="FiturPelacakan"
              className="Pelacakan-img"
            />
            <div className="Text-Content">
              <h1>Pelacakan Nutrisi</h1>
              <p>
                Dapat melacak asupan nutrisi yang didapat sesuai dengan <br />
                jenis makanan yang dikonsumsi.
              </p>
            </div>
          </div>

          <div className="FiturContent-Right">
            <div className="Text-Content">
              <h1>Pengukuran Kalori</h1>
              <p>
                Informasi mengenai jumlah kalori, karbohidrat, dll. <br></br>
                yang bertujuan untuk melacak dampak makanan terhadap tubuh.
              </p>
            </div>
            <img src={FiturKalori} alt="FiturKalori" className="Kalori-img" />
          </div>

          <div className="FiturContent-Left">
            <img
              src={FiturNotifikasi}
              alt="FiturNotifikasi"
              className="Notifikasi-img"
            />
            <div className="Text-Content">
              <h1>Notifikasi dan Pengingat</h1>
              <p>
                Mendapat notifikasi jadwal harian yang disesuaikan <br />
                dengan kondisi kesehatan pengguna.
              </p>
            </div>
          </div>

          <div className="FiturContent-Right">
            <div className="Text-Content">
              <h1>Rekomendasi Makanan</h1>
              <p>
                Dapat merekomendasikan jenis makanan yang lebih baik <br />
                dikonsumsi oleh pengguna
              </p>
            </div>
            <img src={FiturKalori} alt="FiturKalori" className="Kalori-img" />
          </div>

          <div className="FiturContent-Left">
            <img
              src={FiturNotifikasi}
              alt="FiturNotifikasi"
              className="Notifikasi-img"
            />
            <div className="Text-Content">
              <h1>Pelacakan Jumlah Air Putih</h1>
              <p>
                Mendapat notifikasi jadwal harian yang disesuaikan <br />
                dengan kondisi kesehatan pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;