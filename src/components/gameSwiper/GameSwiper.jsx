import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {EffectCoverflow, Navigation, Autoplay} from "swiper/modules";

import {useState} from "react";
import './gameSwiper.css';
import GameSlide from "./GameSlide.jsx";

function GameSwiper({games}) {
    const [active ,setActive] = useState(false);

    const handleToggleVideo=()=>{
        setActive(!active);
    }
    return (
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate:35,
            stretch:200,
            depth:250,
            modifier:1,
            slideShadows:true,
        }}
        // autoplay={{
        //     delay:2500,
        //     disableOnInteraction:false,
        // }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="gameSwiper"
        >
            {games.map(game=>(
                <SwiperSlide>
                    <GameSlide key={game._id} toggleVideo={handleToggleVideo} game={game} active={active}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default GameSwiper;