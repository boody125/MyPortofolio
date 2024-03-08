import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import {styles} from '../style'
import {github} from "../assets"
import { SectionWrapper } from "../hoc"
import {projects} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'


const ProjectCard =({ index, name, description, tags, image, source_code_link })=>{
  return(
    <motion.div variants={fadeIn('up','spring', index*0.5, 0.75)}>
      <Tilt 
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end gap-1
              m-3 card-img_hover">

                <div 
                  onClick={()=>window.open 
                  (source_code_link[0],'_blank')}
                  className="black-gradient w-10 h-10
                  rounded-full flex justify-center 
                  items-center cursor-pointer"
                  >
                    
                    
                    <img src={github} alt="github" />
                </div>
                {source_code_link.length>1 && (
                  <div 
                    onClick={()=>window.open 
                    (source_code_link[1],'_blank')}
                    className="black-gradient w-10 h-10
                    rounded-full flex justify-center 
                    items-center cursor-pointer"
                    >
                      
                      
                      <img src={github} alt="github" />
                  </div>
                )}

              </div>
              
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrapp gap-2">
            {tags.map((tag)=>(
              <p 
                key={tag.name} 
                className={` text-[14px] ${tag.color}`}>
                  
                  #{tag.name}
              </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>

      </motion.div>

      <div className="w-full flex">

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            As a dedicated web developer, I specialize in crafting dynamic and responsive websites by 
            leveraging cutting-edge technologies. My toolkit includes React for building interactive
             user interfaces, MongoDB for robust and scalable database solutions, Tailwind CSS for 
             streamlined and efficient styling, and Node.js for powering the backend. By seamlessly 
             integrating these technologies, I create seamless and performant web applications that 
             not only meet but exceed user expectations. Whether it's designing intuitive user 
             experiences with React or optimizing backend functionality with Node.js, I am committed    
             to delivering high-quality solutions that showcase the power and versatility of modern web development.
        </motion.p>

          

      </div>
      <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project,index)=>(
              <ProjectCard 
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}

        </div>
    </>
  )
}

export default SectionWrapper(Works,"")