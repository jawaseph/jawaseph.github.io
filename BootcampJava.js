
Rollimage = new Array();

Rollimage[1] = new Image(250,100);
Rollimage[1].src = "aboutbutton.jpg";

Rollimage[2] = new Image(250,100);
Rollimage[2].src = "aboutsel.jpg";

Rollimage[3] = new Image(250,100);
Rollimage[3].src = "frogbutton.jpg";

Rollimage[4] = new Image(250,100);
Rollimage[4].src = "frogsel.jpg";

Rollimage[5] = new Image(250,100); 
Rollimage[5].src = "birdbutt.jpg";

Rollimage[6] = new Image(250,100);
Rollimage[6].src = "birdsel.jpg";

Rollimage[7] = new Image(250,100); 
Rollimage[7].src = "specbutton.jpg";

Rollimage[8] = new Image(250,100); 
Rollimage[8].src = "specsel.jpg";

Rollimage[9] = new Image(700,300);
Rollimage[9].src = "c.jpg";

Rollimage[10] = new Image(700,300);
Rollimage[10].src = "main.jpg";

Rollimage[11] = new Image(700,300);
Rollimage[11].src = "a.jpg";

Rollimage[12] = new Image(700,300);
Rollimage[12].src = "b.jpg";

 function SwapOutAbout(){
    document.about.src = Rollimage[2].src;
    return true;
  }

  function SwapBackAbout(){
    document.about.src = Rollimage[1].src; 
    return true;
  }

   function SwapOutFrog(){
    document.frog.src = Rollimage[4].src;
     document.main.src = Rollimage[9].src;
    return true;
  }

  function SwapBackFrog(){
    document.frog.src = Rollimage[3].src; 
    document.main.src = Rollimage[10].src;
    return true;
  }

	function SwapOutBird(){
    document.bird.src = Rollimage[6].src;
    document.main.src = Rollimage[12].src;
    return true;
  }

  function SwapBackBird(){
    document.bird.src = Rollimage[5].src; 
    document.main.src = Rollimage[10].src;
    return true;
  }

 function SwapOutSpec(){
    document.spec.src = Rollimage[8].src;
    document.main.src = Rollimage[11].src;
    return true;
  }

  function SwapBackSpec(){
    document.spec.src = Rollimage[7].src; 
    document.main.src = Rollimage[10].src;
    return true;
  }

