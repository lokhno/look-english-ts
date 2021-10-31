import React from "react";
import { Switch, Route } from "react-router-dom";

import { Navigation } from "../../components/Navigation";
import { TopPanel } from "../../components/TopPanel";
import { MyWords } from "./MyWords";

import "./Main.scss";

interface MainProps {}

export const Main: React.FC<MainProps> = () => {
    return (
        <div>
            <TopPanel />
            <div className="main-page">
                <Navigation />
                <div className="content">
                    <div className="content_container">
                        <Switch>
                            {/* <Route exact path="/categories" component={MyCategories} />
                            <Route exact path="/learnWords" component={LearnWords} />
                            <Route exact path="/comunitycategories" component={ComunityCategories} /> */}
                            <Route exact path="/words" component={MyWords} />
                            <Route exact path="/" component={MyWords} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};
