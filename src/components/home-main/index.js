import React, {Component} from 'react';
import './style.scss'

class Home_Main extends Component {
    render() {
        return (
            <>
                <main className="pageContent keel-agd">
                    <div className="SearchPage__FrontDoor">
                        <div className="base-front-door keel-agd">
                            <div className="coverPhotoContainer">
                                <div className="Common-Frontdoor-CoverPhoto challenger-cover-photo">
                                    <div className="background-wrapper">
                                        <div className="coverBackground"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

Home_Main.propTypes = {};

export default Home_Main;