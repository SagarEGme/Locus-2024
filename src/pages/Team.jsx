import React from 'react'
import Card from '../component/Card'
import "./team.css"
import cr7 from '../assests/cr7.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Team = () => {
    return (
        <div className='team-section'>
            <h2>Meet our Team : </h2>
            <div className="card-section">
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView='4'
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <Card fb="https://www.facebook.com/dragonlord1129" lk="https://www.linkedin.com/in/bibhav-jha-9a84b8210/?fbclid=IwAR2QfKTfpNDRlbDsa8XIBHuBzRkEHFW-ZfyQ7HoGpalVsSMKNbp2cLyoE08" name="Bibhav Jha" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo ipsa nulla quibusdam id iste nam, aliquam non animi accusamus minima est optio tempore ipsum aperiam vero omnis tenetur impedit velit corrupti." photoURL={cr7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card gh="https://github.com/SagarEGme" lk="https://www.linkedin.com/in/sagar-regmi-5037991a5/" fb="https://www.facebook.com/sagar07regmi/" name="Sagar Regmi" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />

                    </SwiperSlide>
                    <SwiperSlide>

                        <Card fb="https://www.facebook.com/pro le.php?id=100056938837090" lk="https://www.linkedin.com/in/roshan-sharma-4a6729295/" name="Roshan Sharma" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
                    </SwiperSlide>
                    <SwiperSlide>

                        <Card lk="https://www.linkedin.com/in/the-laughing-tree-93b454274/" fb="https://www.facebook.com/shishir.dahal.18/" name="Shishir Dahal" area="FrontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, sapiente iure a error adipisci nihil repellat aliquid minus voluptate deserunt nam dolore temporibus accusamus culpa iste fugit praesentium! Ipsa, minima corrupti.
" photoURL={cr7} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Team

