import { Instagram, Linkedin } from "lucide-react"
import { NavLink } from "react-router-dom"

const ProfilePage = () => {
  return (
    <>
      <div className="flex pt-20">
        <div className="flex-1 pl-5 text-white">
          <h1 className="text-4xl font-bold pt-5 text-white">Jessica Alvina Luwia</h1>
          <p className="text-2xl pt-4 pr-11"> I am a fifth-semester student at Maranatha Christian University majoring in
          informatics engineering. I am interested in front-end and data analyst. </p>

          <div className="pt-3 flex space-x-4">
            <NavLink to={'https://www.instagram.com/jssicalvina?igsh=ZzI5dW9kZ3Rja3I4'} target="_blank">
              <Instagram className="text-lime"/>
            </NavLink>
            
            <NavLink to={'https://www.linkedin.com/in/jessicaalvinaluwia'} target="_blank">
              <Linkedin className="text-lime"/>
            </NavLink>
          </div>
        </div>


        <div className="flex-none">
          <div className="avatar pr-5 ">
            <div className="relative w-60 h-60">
              <div className="absolute inset-0 rounded-full border-2 border-lime"></div>
              <div className="w-56 h-56 rounded-full overflow-hidden absolute inset-2">
                <img src="jejes.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage