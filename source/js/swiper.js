
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'

export function swiper() {
    const swiper = new Swiper('.slider__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            vertical: true,
            renderBullet: function (index) {
                return '<span class="swiper-pagination-bullet">' + (index + 1) + '</span>';
            }



        }
    });
}