


import React, { useState } from 'react'

function Dag() {

  const [bird, setbird] = useState({
    x: 50,
    y: 100,
    radius: 20
  });


  const draw = () => {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = this.refs.canvas.getContext("2d");
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.arc(
        this.state.bird.x,
        this.state.bird.y,
        this.state.bird.radius,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.stroke();
      console.log("yes");
    } else {
      console.log("nope");
    }
  };
    return (
      <div>
        <canvas ref="canvas" id="canvas" width={450} height={650} />
      </div>
    )
}

export default Dag;