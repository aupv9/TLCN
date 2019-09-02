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
                                        <div className="coverBackground">
                                            <div className={"primary-content"}>
                                               <section className="title-section">
                                                    <div className="section-container ">
                                                        <h1 className="title">Book [ flights ] online</h1>
                                                        <h2 className="subTitle">Search and compare hundreds of travel
                                                            sites at once</h2>
                                                    </div>
                                               </section>
                                            </div>
                                        </div>
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