import React from 'react'

const ProjectPage = () => {
  return (
    <>
      <div className="columns-3">
        <div className=" rounded-2xl w-80 p-3 bg-black shadow-xl">
            <div className=" rounded-lg overflow-hidden">
              <img src="logoavl.png" alt="Shoes" className="object-cover h-48 w-auto rounded-lg"/>
              <div className="p-4">
                <h2 className="text-lime font-bold text-xl">Avl Catering</h2>
                <p className="text-white pt-2">
                  Mobile app for catering applications. 
                  There is an admin who can add food menus and view orders and also users to buy food.
                </p>
              </div>
              <div className='p-3'>
                <a href="https://github.com/Jssicalvina/Avl-Catering" target="_blank" class="inline-flex items-center justify-center w-full  font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-lg cursor-pointer select-none hover:text-lime hover:border-lime focus:shadow-xs focus:no-underline">
                    View
                </a>
              </div>
            </div>
        </div>

        <div className=" outline-2 rounded-2xl w-80 p-3 bg-black shadow-xl">
          <div className=" rounded-lg overflow-hidden">
            <img src="logomarnatstore.png" alt="Shoes" className="object-cover h-48 w-auto rounded-lg"/>
            <div className="p-4">
              <h2 className="text-lime font-bold text-xl">Maranatha Store</h2>
              <p className="text-white pt-2">
                E-commerce website for Maranatha Store. The purpose of this e-commerce is to reduce the
                cashier queue during peak hours.
              </p>
            </div>
            <div className='p-3'>
              <a href="https://github.com/Jssicalvina/maranatha_store" target="_blank" class="inline-flex items-center justify-center w-full  font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-lg cursor-pointer select-none hover:text-lime hover:border-lime focus:shadow-xs focus:no-underline">
                  View
              </a>
            </div>
          </div>
        </div>


        <div className=" outline-2 rounded-2xl w-80 p-3 bg-black shadow-xl">
          <div className=" rounded-lg overflow-hidden">
            <img src="midnightmaze.png" alt="Shoes" className="object-cover h-48 w-auto rounded-lg"/>
            <div className="p-4">
              <h2 className="text-lime font-bold text-xl">Midnight Maze</h2>
              <p className="text-white pt-2">
                Midnight Maze is a game made using godot. 
                It has a thriller genre where players must escape the maze and meet enemies.
              </p>
            </div>
              <div className='p-3'>
                <a href="https://github.com/Jssicalvina/midnight_maze" target="_blank"  class="inline-flex items-center justify-center w-full  font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white border-solid rounded-lg cursor-pointer select-none hover:text-lime hover:border-lime focus:shadow-xs focus:no-underline">
                    View
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPage