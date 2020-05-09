import React, { Component } from 'react';
import {galleryData } from './gallerysliderdata';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {Link} from 'gatsby';
import gallerySliderStyles from './styles.module.scss';

class GallerySlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: galleryData,
            index: 0,
            isClicked: false

        }
    }

    goToNext = () => {
       if(this.state.index === this.state.gallery.length -1) {
           this.setState({index: 0})
       } else {
           this.setState({index: this.state.index + 1, isClicked: true})
       }

    }

    goToPrevious = () => {
        if(this.state.index === 0) {
            console.log('index is 0')
            this.setState({index: this.state.gallery.length -1})
        } else {
            this.setState({index: this.state.index - 1, isClicked: true})
        }
 
     }

    render() {
        console.log(this.state.gallery)
        let {index, gallery} = this.state


        
        return (
            <div className={gallerySliderStyles.container}>
                <Link to={gallery[index].link}>
                    <img src={gallery[index].img} alt={gallery[index].description} className={gallerySliderStyles.image} width='941' height='549'/></Link>
                <div className={gallerySliderStyles.navContainer}>
                <Link to={gallery[index].link}
                className={gallerySliderStyles.pageLink}>
                <h2 className={gallerySliderStyles.title}>{gallery[index].description}</h2>
                </Link>

                <div className={gallerySliderStyles.buttonsContainer}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} onClick={this.goToPrevious} className={gallerySliderStyles.icon}/><span>Prev</span>
                    <span>Next</span><FontAwesomeIcon icon={faLongArrowAltRight} onClick={this.goToNext} className={gallerySliderStyles.icon}/>

                </div>
                </div>
            </div>
        )
    }
}

export default GallerySlider;
