const ProfilePage = () => {
  return (
    <>
      <div className="flex pt-20">
        <div className="flex-1">
          <h1 className="text-4xl font-bold pt-7">Jessica Alvina Luwia</h1>
          <p className="text-2xl pt-4"> I am a fifth-semester student at Maranatha Christian University majoring in
          informatics engineering. I am interested in front-end and data analyst. </p>
        </div>

        <div className="flex-none">
          <div className="avatar">
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