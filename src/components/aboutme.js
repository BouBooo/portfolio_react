import React, { Component } from "react";
import { Grid } from 'react-mdl';

class Aboutme extends Component {
    render() {
        return (
                <Grid>
                    <div class="col--1 menu">
                        <h1>Menu</h1>
                        
                        <ul>
                            <li><a href="/">Item 1</a></li>
                            <li><a href="/">Item 2</a></li>
                        </ul>
                    </div>

                    <div class="col--5">
                        <h1>Body</h1>
                        
                        <h2>Basic 2-column layout with responsive divs.</h2>
                        
                        <p>This is as pretty basic placeholder layout, using <a href="http://bourbon.io/">Bourbon</a> & <a href="http://neat.bourbon.io/">Neat</a> for layout.</p>
                        
                        <p>Schlitz roof party aesthetic, Truffaut shabby chic chia mixtape seitan lomo Intelligentsia. Chillwave fashion axe Truffaut actually narwhal, locavore trust fund lomo. Ugh drinking vinegar typewriter Bushwick selfies, polaroid direct trade craft beer Wes Anderson viral kitsch whatever tote bag.</p>
                        
                        <h3><a id="item1">Item 1</a></h3>
                        <p>Bob Loblaw Lobs Law Bomb. Turn this skiff around! Let's see some bananas and nuts! So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. I deceived you, mom. Tricked makes it sound like we have a playful relationship.</p>
                        
                        <h3><a id="item2">Item 2</a></h3>
                        <p>Speaking of settling, How's Ann? George Michael, you want to put your head down there by his drainage shunt? I see you've wasted no time in filling my seat hole. I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense. And I am rock steady. No more dizzies. Turns out he ended up getting too friendly with the teddy bear. But where did the lighter fluid come from? With spicy club sauce.</p>
                    </div>
                    </Grid>
        )
    }
}

export default Aboutme;