import React from 'react'
import Card from '../component/Card'
import "./team.css"
import cr7 from '../assests/cr7.jpg'

const Team = () => {
    return (
        <div className='team-section'>
            <h2>Engineers behind this project : </h2>
            <div className="card-section">
                <Card name="Sagar Regmi" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo ipsa nulla quibusdam id iste nam, aliquam non animi accusamus minima est optio tempore ipsum aperiam vero omnis tenetur impedit velit corrupti." photoURL={cr7} />
                <Card name="Sagar Regmi" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
                <Card name="Sagar Regmi" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
                <Card name="Sagar Regmi" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
            </div>
        </div>
    )
}

export default Team

