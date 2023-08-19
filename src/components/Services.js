
import Image from "next/image"
import reactImage from "@/images/react.png"
import nodeImage from "@/images/node.png"
import mongoImage from "@/images/mongo.png"
import reduxImage from "@/images/redux.png"
import nextjsImage from "@/images/nextjs.png"
import javascriptImage from "@/images/javascript.png"
import cssImage from "@/images/css.png"
import expressImage from "@/images/express.png"
import vector30 from "@/images/vector 30.png"
import vector29 from "@/images/vector 29.png"
import vector28 from "@/images/vector 28.png"
import vector27 from "@/images/vector 27.png"
import vector26 from "@/images/vector 26.png"
import vector25 from "@/images/vector 25.png"
function Services() {
  return (
    <div>
      <p className="text-right mr-96 mt-36" style={{ fontFamily: "Sevillana, cursive", fontSize: "30px" }}>I'm currently looking to join a <span style={{ color: "#7127BA" }}>cross-functional</span>  team <br />
        <span style={{ fontFamily: "Sevillana, cursive", fontSize: "25px" }}>that values improving people's lives through accessible design</span>  </p>

        <ul className="flex justify-center items-center gap-4">
        <li className="p-4 rounded-full bg-[#251C31]"><Image  src={ reactImage}/></li>
        <li className="p-4 rounded-full bg-[#251C31]"><Image src={nodeImage } /></li>
        <li className="p-4 rounded-full bg-[#251C31] "><Image src={mongoImage } /></li>
        <li className="p-4 rounded-full bg-[#251C31]"><Image src={reduxImage } /></li>
        <li className="p-4 rounded-full bg-[#251C31]"><Image src={nextjsImage } /></li>
        <li className="p-4 rounded-full bg-[#251C31]"><Image src={ javascriptImage} /></li>
        <li className="p-4 rounded-full bg-[#251C31]"><Image src={ cssImage} /></li>
        <li className="p-4 rounded-full bg-[#251C31]"><Image  src={expressImage}/></li>    
        </ul>

      <ul className="flex justify-center items-center text-center  mt-4">

        <li className="flex flex-col justify-center items-center text-center "><div className="p-4 rounded-full bg-[#251C31] mr-[100px] mt-[20px]"><Image src={reactImage} /></div>  <div className="mt-[-10px] z-[-10]"><Image src={vector28} /></div></li>
        <li className="flex flex-col justify-center items-center"><div className="p-4 rounded-full bg-[#251C31] ml-[-50px] mt-[20px]"><Image src={reactImage} /></div>  <div className="mt-[-10px] z-[-10] "><Image src={vector29} /></div></li>
        <li className="flex flex-col justify-center items-center"><div className="p-4 rounded-full bg-[#251C31]  mr-[20px] mt-[20px]"><Image src={reactImage} /></div>  <div className="mt-[-10px] z-[-10]"><Image src={vector30} /></div></li>
        <li className="flex flex-col justify-center items-center"><div className="p-4 rounded-full bg-[#251C31]  ml-[40px] mt-[20px]"><Image src={reactImage} /></div>  <div className="mt-[-10px] z-[-10]"><Image src={vector27} /></div></li>
        <li className="flex flex-col justify-center items-center"><div className="p-4 rounded-full bg-[#251C31]  mr-[-50px] mt-[20px]"><Image src={reactImage} /></div>  <div className="mt-[-10px] z-[-10]"><Image src={vector26} /></div></li>
        <li className="flex flex-col justify-center items-center"><div className="p-4 rounded-full bg-[#251C31]  mr-[-110px] mt-[20px]"><Image src={reactImage} /></div>  <div className="mt-[-10px] z-[-10]"><Image src={vector25} /></div></li>
        </ul>

    </div>
  )
}

export default Services
