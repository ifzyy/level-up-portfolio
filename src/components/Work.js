import Image from "next/image"
import logo from "@/images/logo.png"
function Work() {
  return (
    <div className="glow">
      <h2 style={{ marginLeft: "20%", fontFamily: "Sevillana,Cursive" }} className='text-6xl mt-36'>Work experience</h2>
      <ul style={{ marginLeft: "20%" }} className='grid  gap-6'>
        <li className='list__item flex items-center gap-8  p-5'><Image width="100" src={logo} /><div> <h2 className="" style={{ fontFamily: "Sevillana, cursive", fontSize: "33px", lineHeight: "40px", fontWeight: "bold" }}>Mentor</h2> <p style={{ fontFamily: "Sevillana, cursive", fontSize: "15px" }}>Proposed improvements to a lot of code organizations to improve code quality and overall
          performance.</p>
          <button className="learn__more">Learn more</button></div></li>
      </ul>
    </div>
  )
}

export default Work
