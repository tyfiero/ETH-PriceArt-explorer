function draw() {


    if (mouseIsPressed) {
        if (mouseButton === CENTER) {
            if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
                dragX = 0;
                dragY = 0;
                rotX = 0;
                rotY = 0;
                zoomScale = 1;
            }
        }
    }


    let sel = document.querySelector("#info-one")
    sel.style.display = "block";


    // Scale canvas
    if (window.innerWidth > 1000) {
        if (window.innerWidth < 1300) {
            document.querySelector('#settings').style.margin = "0px 0px 0px 12px";
            let r = document.querySelector(':root');
            r.style.setProperty('--left', '6px');
            let sel = document.querySelector("#info-one")
            sel.style.left = "73px"





        } else {
            document.querySelector('#settings').style.margin = "0px 0px 0px 100px";
            sel.style.left = "160px"

        }
        if (window.innerHeight > 680 && window.innerWidth < 1300) {
            document.querySelector('canvas').style.height = `${innerWidth  - 5}px`;
            document.querySelector('canvas').style.width = `${innerWidth  - 5}px`;
        }
        document.querySelector('canvas').style.height = `${innerHeight - 10}px`;
        document.querySelector('canvas').style.width = `${innerHeight - 10}px`;

    } else if (window.mobileCheck()) {
        pixelDensity(1);
        document.querySelector('canvas').style.height = `${innerWidth - 10}px`;
        document.querySelector('canvas').style.width = `${innerWidth - 10}px`;
        audio.volume = 0;
        audio2.volume = 0;
        sel.style.top = `${(innerWidth  - 10)+130}px`;
        sel.style.left = `${(innerWidth  /2)-80}px`;
    } else {
        buttonReset.removeClass('tip-reset');
        buttonRefresh.removeClass('tip-refresh');
        buttonZoom.removeClass('tip-zoom');
        nightButton.removeClass('tip-night');




        if (window.innerHeight > 680) {
            document.querySelector('canvas').style.height = `${innerWidth  - 5}px`;
            document.querySelector('canvas').style.width = `${innerWidth  - 5}px`;
            sel.style.top = `${(innerWidth  - 5)+133}px`;
            sel.style.left = `${(innerWidth  /2)-73}px`;


        } else {
            document.querySelector('canvas').style.height = `${innerHeight  - 170}px`;
            document.querySelector('canvas').style.width = `${innerHeight  - 170}px`;
            sel.style.top = `${(innerWidth  - 170)+183}px`;
            sel.style.left = `${(innerWidth  /2)-73}px`;
        }

    }

    noStroke();
    if (night) {
        stroke(255);
        textSat = 0;
        numTextBright = 40;
    } else {
        stroke(0);
        textSat = 100;
        textBright = 0;
        numTextBright = 50;
    }

    dO = priceData[0];
    dC = priceData[priceData.length - 1]
    dL = Math.min.apply(Math, priceData);
    dH = Math.max.apply(Math, priceData);

    var deltaUp = dC - dO;
    var deltaRoundUp = deltaUp.toFixed(3);
    var deltaDown = dO - dC;
    var deltaRoundDown = deltaDown.toFixed(3);
    var percentUp = ((dC - dO) / dO) * 100;
    var percentRoundUp = percentUp.toFixed(2);
    var percentDown = ((dC - dO) / dO) * 100;
    var percentRoundDown = percentDown.toFixed(2);
    var percentHL = ((dH - dL) / dL) * 100;
    var percentRoundHL = percentHL.toFixed(2);

    var yMin = Math.min(...[dH, dO, dC, dL]);
    var yMax = Math.max(...[dH, dO, dC, dL]);
    var yH = map(dH, yMin, yMax, 450, -450);
    var yO = map(dO, yMin, yMax, 450, -450);
    var yC = map(dC, yMin, yMax, 450, -450);
    var yL = map(dL, yMin, yMax, 450, -450);
    var direction = dC - dO;
    if (direction > 0) {
        ratioPercent = (percentRoundUp / percentRoundHL);
    } else {
        ratioPercent = (percentRoundDown / percentRoundHL) * -1;
    }
    if (ratioPercent < 0) {
        ratioPercent = ratioPercent * -1;
    }

    pickr.on('init', instance => {
        console.log('Event: "init"', instance);



    })
    pickr.on('change', (color) => {
        pickrChange = color;

        return pickrChange;
    });

    if (frameCount === 1) {
        pickrChange = {
            "h": dColor,
            "s": 100,
            "v": 100,
            "a": 1
        }
    } else {
        hHSV = pickrChange.h;
        sHSV = pickrChange.s;
        vHSV = pickrChange.v;
        aHSV = pickrChange.a;
    }




    if (dColor === 'rainbow') {
        startColor = 0;
        endColor = 359;
    } else if (dColor === 'blue') {
        startColor = 180;
        endColor = 280;
    } else if (dColor === 'green') {
        startColor = 80;
        endColor = 169;
    } else {
        startColor = 281;
        if (startColor = 359) {
            startColor = 0;
        }
        endColor = 49;
    }
    colorAttribute = map(cos(frameCount * 0.01), -1, 1, startColor, endColor);
    textColor = 215;
    textSat = 80;
    textBright = 100;










    //Line graph stuff
    time = priceData.length; // number of x tick values
    step = width / time;

    //-----------------------0------------------------------
    if (image) {
        push()
        // background(image);
        texture(image);
        translate(0, 0, -3000);
        scale(4.48);
        plane(width, height);
        pop()
    } else {
        if (night) {
            background(0);

        } else {
            background(255);
        }
    }


    if (starNum && !image) {

        starSpeed = 3;
        for (let i = 0; i < starsObject.length; i += 1) {

            starsObject[i].update();
            starsObject[i].display();
        }
    }

    if (rKey === 1 || rKey === 2) {

        if (night) {
            textSat = 0;
            numTextBright = 40;
        } else {
            textSat = 100;
            textBright = 0;
            numTextBright = 50;

        }
        if (rKey === 2) {
            if (direction > 0) {
                fill(textColor, 0, numTextBright);
                textSize(35);
                text(`+${percentRoundUp}%`, -480, 435);
                textSize(25);
                text(`+$${deltaRoundUp}`, -477, 400);
            } else {
                fill(textColor, 0, numTextBright);
                stroke(0, 0, 0);
                textSize(35);
                text(`${percentRoundDown}%`, -480, 435);
                textSize(25);
                text(`-$${deltaRoundDown}`, -477, 400);
            }
        }



        push();
        textSize(50);
        stroke(0, 100, 0);
        fill(textColor, textSat, textBright);
        text(`${pair}`, -490, -450);


        push();

        stroke(0);
        strokeWeight(10);
        fill(textColor, textSat, textBright);
        text(`${dDate}`, -480, 480);

        if (dDate === "2021") {
            textSize(18);
            fill(textColor, textSat, 60);

            text('(1.1.21 - 11.30.21)', -385, 480);

        }
        pop();
        pop();
    }

    if (rKey === 2 || rKey === 1) {
        push();
        scale(0.65);

        translate(660, -630, 10);
        rotateX(3.0);
        // rotateZ(-0.2)
        // rotateY(-0.4);
        // noStroke();
        // if (logoLocale > 0.6 || logoLocale < -0.1) {
        //     logoSpeed = logoSpeed * -1;
        // }
        logoLocale = logoLocale + logoSpeed;

        rotateY(logoLocale);
        // rotateY(0.12);

        if (night) {
            stroke(20);
            specularMaterial(220, 0, 20);

        } else {
            stroke(0);
            specularMaterial(220, 0, 38);

        }
        strokeWeight(0.5)
        var locX = mouseX - width / 2;
        var locY = mouseY - height / 2;
        var locRX = 100;
        var locRY = noise(0, 1000)
        lights();
        pointLight(hHSV, sHSV, 100, locX, locY, 0);
        pointLight(hHSV, sHSV, 100, locX, locY, 200);



        pointLight(hHSV, sHSV, vHSV, locRX, locRY, 200);

        shininess(1000);


        model(logo3D);
        pop();
        rotateLogo = rotateLogo - 0.01;
    }


    rotateY(rotX);
    rotateX(rotY);

    scale(zoomScale);

    push()


    s1 = slider1.value;
    s2 = slider2.value;
    s3 = slider3.value;
    s4 = slider4.value;
    s5 = slider5.value;
    s6 = slider6.value;
    s7 = slider7.value;
    s9 = slider9.value;
    s10 = slider10.value;



    push()
    scale(s1)
    strokeWeight(10)



    fill(s8, 100, 100)



    dots = true;
    var yAdd = -1;
    var xAdd = -5
    var zAdd = -5
    var strokeAdd = 6;
    var brightAdd = 20;
    var scaleAdd = 0.98
    dots = false;
    var yMin = Math.min.apply(Math, priceData);

    var yMax = Math.max.apply(Math, priceData);
    var yClose = priceData[priceData.length - 1]

    var yOpen = priceData[0];

    var yHi = map(yMax, yMin, yMax, 450, -450);
    var yOp = map(yOpen, yMin, yMax, 450, -450);
    var yCl = map(yClose, yMin, yMax, 450, -450);
    var yLo = map(yMin, yMin, yMax, 450, -450);


    if (rKey === 2) {
        var x = -498 + (i * step);
        var y = priceData[i];
        var iInc = i + 1;
        var ymap = map(y, yMin, yMax, ((height / 2) - 50), ((-height / 2) + 50));
        var x1 = -498 + ((iInc) * step);
        var y1 = priceData[iInc];
        var y1map = map(y1, yMin, yMax, ((height / 2) - 50), ((-height / 2) + 50));

        var highIndex = priceData.indexOf(yMax);
        var highXValue = -498 + (highIndex * step);
        var lowIndex = priceData.indexOf(yMin);
        var lowXValue = -498 + (lowIndex * step);
        var closeX = -498 + ((priceData.length - 1) * step)
        var yAxis = 600;
        var yAxisLabelDist = 550;
        var wordDist = 630;
        textSize(25);
        fill(textColor, textSat, textBright);

        push()
        // rotateZ(s9);
        stroke(hHSV, 40, 100)
        strokeWeight(5);
        if (night) {
            fill(hHSV, 0, 100)

        } else {
            fill(hHSV, 100, 0)

        }

        push()
        if (yOpen === yMax && yClose === yMin) {

            line(-630, yOp, -498, yOp);

            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open + High`, -632, yOp - 8);

            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close + Low`, closeX + 5, yCl - 8);

        } else if (yOpen === yMin && yClose === yMax) {
            line(-630, yOp, -498, yOp);
            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open + Low`, -629, yOp - 8);

            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close + High`, closeX, yCl - 8);

        } else if (yOpen === yMax) {
            line(-630, yOp, -498, yOp);

            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open + High`, -632, yOp - 8);

            line((lowXValue - 80), (yLo + 60), (lowXValue + 52), (yLo + 60));
            line((lowXValue - 14), yLo, (lowXValue - 14), yLo + 28);
            text(`$${yMin}`, (lowXValue - 64), yLo + 85);
            text(`Low`, (lowXValue - 34), yLo + 50);

            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close`, closeX + 39, yCl - 8);
        } else if (yOpen === yMin) {
            line(-630, yOp, -498, yOp);
            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open + Low`, -629, yOp - 8);

            line((highXValue - 66), (yHi - 60), (highXValue + 66), (yHi - 60));
            line(highXValue, yHi, highXValue, yHi - 28);
            text(`$${yMax}`, (highXValue - 50), yHi - 34);
            text(`High`, (highXValue - 20), yHi - 70);

            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close`, closeX + 39, yCl - 8);
        } else if (yClose === yMax) {
            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close + High`, closeX, yCl - 8);

            line((lowXValue - 80), (yLo + 60), (lowXValue + 52), (yLo + 60));
            line((lowXValue - 14), yLo, (lowXValue - 14), yLo + 28);
            text(`$${yMin}`, (lowXValue - 64), yLo + 85);
            text(`Low`, (lowXValue - 34), yLo + 50);

            line(-630, yOp, -498, yOp);
            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open`, -595, yOp - 8);
        } else if (yClose === yMin) {
            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close + Low`, closeX + 5, yCl - 8);

            line((highXValue - 66), (yHi - 60), (highXValue + 66), (yHi - 60));
            line(highXValue, yHi, highXValue, yHi - 28);
            text(`$${yMax}`, (highXValue - 50), yHi - 34);
            text(`High`, (highXValue - 20), yHi - 70);

            line(-630, yOp, -498, yOp);
            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open`, -595, yOp - 8);
        } else {



            line((closeX + 132), yCl, closeX, yCl);
            text(`$${yClose}`, closeX + 19, yCl + 25);
            text(`Close`, closeX + 39, yCl - 8);

            line(-630, yOp, -498, yOp);
            text(`$${yOpen}`, -620, yOp + 25);
            text(`Open`, -595, yOp - 8);

            line((highXValue - 66), (yHi - 60), (highXValue + 66), (yHi - 60));
            line(highXValue, yHi, highXValue, yHi - 28);
            text(`$${yMax}`, (highXValue - 50), yHi - 34);
            text(`High`, (highXValue - 20), yHi - 70);

            line((lowXValue - 80), (yLo + 60), (lowXValue + 52), (yLo + 60));
            line((lowXValue - 14), yLo, (lowXValue - 14), yLo + 28);
            text(`$${yMin}`, (lowXValue - 64), yLo + 85);
            text(`Low`, (lowXValue - 34), yLo + 50);

        }
        pop()
        pop()
    }


    translate(dragX, dragY, 0);

    var scaleInc = 0.01;
    var transInc = 10;

    //DEFAULT. back lines

    for (var i = 0; i < s3; i++) {
        if (night) {
            stroke(hHSV, (sHSV + brightAdd), vHSV, aHSV);
            fill(hHSV, (sHSV + brightAdd), vHSV, aHSV);

        } else {
            stroke(hHSV, sHSV, (vHSV + brightAdd), aHSV);

            fill(hHSV, sHSV, (vHSV + brightAdd), aHSV);

        }

        rotateZ(s9);
        push();
        scale(scaleAdd)
        strokeWeight(strokeAdd)
        translate(xAdd, yAdd, zAdd)



        if (lineOff === 0) {
            var rotSin = sin(0.01 * frameCount);
            var rotMap = map(rotSin, 0, 1, 0.87, 1.03)
            var transMap = map(rotSin, 0, 1, -10, 10)
            scaleInc = 0.001;
            transInc = 10;
            scale(rotMap + scaleInc);
            translate(0, transMap + transInc, transMap + transInc)
        } else if (lineOff === 1) {
            var rotSin = sin(0.012 * frameCount);
            var rotMap = map(rotSin, 0, 1, 0.47, 1.13)
            var transMap = map(rotSin, 0, 1, -100, 100)

            scale(rotMap + scaleInc);
            translate(0, transMap + transInc, transMap + transInc)
        } else if (lineOff === 2) {
            var rotSin = sin(0.01 * frameCount);
            var rotMap = map(rotSin, 0, 1, 0.87, 1.03)
            var transMap = map(rotSin, 0, 1, -10, 10)


        }

        //-------------------lgstart


        for (let i = 0; i < (priceData.length - 1); i++) {

            x = -498 + (i * step);
            y = priceData[i];
            iInc = i + 1;

            ymap = map(y, yMin, yMax, ((height / 2) - 50), ((-height / 2) + 50));


            x1 = -498 + ((iInc) * step);
            y1 = priceData[iInc];
            y1map = map(y1, yMin, yMax, ((height / 2) - 50), ((-height / 2) + 50));
            line(x, ymap, x1, y1map)
            strokeWeight(strokeAdd)

            point(x, ymap)

            push();
            noStroke()
            pop();
        }
        //-----------------lgend
        yAdd = yAdd - s4;
        xAdd = xAdd + (2 * s5);
        zAdd = zAdd + (s6 / 8);

        strokeAdd = strokeAdd * s10;
        brightAdd = brightAdd - s7;
        scaleAdd = scaleAdd - s2;
        if (lineOff === 0) {
            scaleInc = scaleInc - 0.1;
            transInc = transInc + 40;
        } else {
            scaleInc = scaleInc - 0.15;
            transInc = transInc + 40;
        }

        pop();
    }


    pop();






    if (frameCount && night) {
        settingsDiv = document.getElementById('settings');
        settingsDiv.style.backgroundColor = "#c0c0c0";
        sliderDiv.style.backgroundColor = "#c0c0c0";

    } else {
        settingsDiv = document.getElementById('settings');
        settingsDiv.style.backgroundColor = "black";
    }



    let selectorChanged = selectorValue;

    selectorValue = selector.value;

    if (selectorChanged !== selectorValue) {
        audio.play();



        ethData = data['eth']['ethData'][0][selectorValue];

        // for explorer
        dDate = ethData.date;
        dColor = ethData.color;
        scaleAmount = ethData.scaleAmount;
        NFTnum = ethData["NFT #"];
        timeType = ethData.timeType;
        numLinesDefault = ethData["#lines"];
        scaleDefault = ethData.scale;
        rotationDefault = ethData.rotation;
        xOffsetDefault = ethData.xOffset;
        yOffsetDefault = ethData.yOffset;
        zOffsetDefault = ethData.zOffset;
        lineWeight = ethData.weight;
        priceData = ethData.data;
        saturation = ethData.saturation;


        pickrChange = {
            "h": dColor,
            "s": 100,
            "v": 100,
            "a": 1
        }

        document.getElementById('slider-1').value = '0.7';
        document.getElementById('slider-10').value = lineWeight;
        document.getElementById('slider-2').value = scaleDefault;
        document.getElementById('slider-3').value = numLinesDefault;
        document.getElementById('slider-9').value = rotationDefault;
        document.getElementById('slider-4').value = yOffsetDefault;
        document.getElementById('slider-5').value = xOffsetDefault;
        document.getElementById('slider-6').value = zOffsetDefault;
        document.getElementById('slider-7').value = saturation;

        selectorChanged = selectorValue;

    }





}