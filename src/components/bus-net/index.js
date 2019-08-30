import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss'
import Bus from "../bus";
import * as LIST from '../../contants'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

class BusNet extends Component {


    listBus=()=>{
        return(
            LIST.BUS_NET.map((item,key)=>{
                return(
                    <Bus key={key} img={item.IMG} name={item.HANG_XE}></Bus>
                )
            })

        )
    }


    render() {
        return (
            <>
                <div id="bus-net">
                    <div className="container">
                        <Carousel responsive={responsive}>
                            {this.listBus()}
                        </Carousel>
                    </div>
                </div>

            </>
        );
    }
}

BusNet.propTypes = {};

export default BusNet;