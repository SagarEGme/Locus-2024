import React from 'react'
import Card from '../component/Card'
import "./team.css"
import cr7 from '../assests/cr7.jpg'

const Team = () => {
    return (
        <div className='team-section'>
            <h2>Engineers behind this project : </h2>
            <div className="card-section">
                <Card fb="https://www.facebook.com/dragonlord1129" lk ="https://www.linkedin.com/in/bibhav-jha-9a84b8210/?fbclid=IwAR2QfKTfpNDRlbDsa8XIBHuBzRkEHFW-ZfyQ7HoGpalVsSMKNbp2cLyoE08" name="Bibhav Jha" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo ipsa nulla quibusdam id iste nam, aliquam non animi accusamus minima est optio tempore ipsum aperiam vero omnis tenetur impedit velit corrupti." photoURL={cr7} />
                <Card gh="https://github.com/SagarEGme" lk="https://www.linkedin.com/in/sagar-regmi-5037991a5/" fb="https://www.facebook.com/sagar07regmi/" name="Sagar Regmi" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
                <Card fb="https://www.facebook.com/pro le.php?id=100056938837090" lk="https://www.linkedin.com/in/roshan-sharma-4a6729295/" name="Roshan Sharma" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
                <Card lk="https://www.linkedin.com/in/the-laughing-tree-93b454274/" fb="https://www.facebook.com/shishir.dahal.18/" name="Shishir Dahal" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
            </div>
        </div>
    )
}

export default Team

