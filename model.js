window.onload = function() {
	  var c = document.getElementById("myCanvas");
	  var ctx = c.getContext("2d");
	  var img = document.getElementById("img");
	  ctx.canvas.width = window.innerWidth;
	  ctx.canvas.height = window.innerHeight;
	  ctx.drawImage(img,0,0,600,600);
	};
  const img = document.getElementById('img');
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  


  // Load the model.
  cocoSsd.load().then(model => {
    // detect objects in the image.
    model.detect(img).then(predictions => {
      console.log('Predictions: ', predictions);
	  predictions.forEach(function(p) {
		ctx.beginPath();
		ctx.font = "bold 30px Arial";
		ctx.strokeStyle = "#000";
		ctx.rect(p.bbox[0], p.bbox[1],p.bbox[2],p.bbox[3]);
		ctx.strokeStyle="#0000FF";
		ctx.stroke();
		ctx.fillStyle = "#0000FF";
		ctx.fillText(p.class, (p.bbox[0]), p.bbox[1]);
	  });
	
    });
  });
  