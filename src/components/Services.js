
import Image from "next/image"
import reactImage from "@/images/react.png"
import nodeImage from "@/images/node.png"
import mongoImage from "@/images/mongo.png"
import reduxImage from "@/images/redux.png"
import nextjsImage from "@/images/nextjs.png"
import javascriptImage from "@/images/javascript.png"
import cssImage from "@/images/css.png"
import expressImage from "@/images/express.png"
import vector from "@/images/vector 28.png"
function Services() {
  return (
    <div>
      <p className="text-right mr-96 mt-36" style={{ fontFamily: "Sevillana cursive", fontSize: "30px" }}>I'm currently looking to join a <span style={{ color: "#7127BA" }}>cross-functional</span>  team <br />
        <span style={{ fontFamily: "Sevillana cursive", fontSize: "25px" }}>that values improving people's lives through accessible design</span>  </p>

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

        <div className="box">
          <Image className="vector" alt="Vector" src={vector} width="123" height="123"/>
        </div>
        </ul>

    </div>
  )
}

export default Services
