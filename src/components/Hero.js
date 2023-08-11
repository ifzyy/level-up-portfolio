
"use client";
import Image from "next/image"
import heroImage from "@/AR Emoji/Hi.gif"
import arrow from "@/images/arrow.png"
import logo from "@/images/logo.png"
import Typewriter from "typewriter-effect"

function Hero() {

  <Typewriter
    options={{
      strings: ['Hello', 'World'],
      autoStart: true,
      loop: true,
    }}
  />
  return (
    <div className="">
      <div className="hero-section-one flex items-center gap-5 " style={{ marginTop: "60px" }}>
        <div className="hero-image flex justify-center items-center ml-100px">
          <Image
            src={heroImage}

            style={{ width: "290px" }}
            alt="hero image" />

        </div>
        <div className="hero-section-one-text ">
          <Image
            src={arrow}
            alt="hero image" />
          <p>Hello i am <span className="john">Johnson Emmanuel</span></p>
        </div>
        <div className="hero-section-two">
          <p className=" Preahvihear underline">A web developer who</p>
          <h2 className="Preahvihear-two">Judges a Book <br /> by its <span className="cover"> cover</span>...</h2>
          <p className="Preahvihear-three">because if the cover does not impress you what can</p>
        </div>
      </div>



      <h2 style={{marginLeft: "20%", marginTop: "3%"}} className="text-5xl  ml-6 flex  mb-4  gap-5" >I am a <span >
        <Typewriter
          options={{
            strings: ['Ruby developer.', 'Node js developer.', "Fullstack developer.", "Musician."],
            autoStart: true,
            loop: true,
          }}
        />
      </span></h2>
      <p className="web flex  gap-3 " style={{ marginLeft: "20%"}}>Currently i am a student mentor at  <span className="flex items-center gap-1" style={{ color: "#7127BA;" }} > < Image src={logo} width="20" alt="hero image" />Microverse.</span> </p>

      <div className="hero-section-three mt-8 flex flex-col gap-14 ">

        <p className=" one mt-5" style={{
          color: "#FFF",
          fontSize: " 22px",
          lineHeight: " 30px",
          letterSpacing: "1.44px",
          marginLeft: "20%"
        }}>
          A full stack web developer, functioning in the industry for 2+ years now.<br />
          I make meaningful and delightful digital product that creates an equilibrum <br />between userneeds and business goals
        </p>
      </div>
    </div>
  )
}

export default Hero
