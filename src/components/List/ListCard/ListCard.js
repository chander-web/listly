import PropTypes from 'prop-types';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaTachometerAlt } from 'react-icons/fa';
import './ListCard.scss';





function ListCard({ list }) {
    const { title, view, follower_count, image, curator_image, ranking } = list
    return (
        <>
                <div className="card_box card_top_border">
                        <h5>{title}</h5>
                        <ul className="list_status">
                            <li>< BsFillEyeFill /> {view}</li>
                            <li><AiFillHeart /> {follower_count}</li>
                            <li><FaTachometerAlt /> {ranking}</li>
                        </ul>
                        <div className="cardBody" >
                            <div className="imgBlock" style={{ 'backgroundImage': `url(${image})` }}> </div>
                        </div>

                        <div className="card_footer">
                            <button type="button" className="fav_icon">
                                <AiFillHeart />favorite
                            </button>

                            <div className="list_creater_img">
                                <img src={curator_image} alt='' />
                            </div>
                        </div>

                </div>

        </>
    )
}

ListCard.propTypes = {
    list: PropTypes.shape({
        title: PropTypes.string.isRequired,
        view: PropTypes.string.isRequired,
        follower_count: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        curator_image: PropTypes.string.isRequired,
        ranking: PropTypes.number.isRequired
    })
}

export default ListCard
