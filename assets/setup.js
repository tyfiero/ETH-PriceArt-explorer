var pair = "ETH/USD";
var colorAttribute;
var startColor, endColor;
var dO, dH, dL, dC, dDate, numLinesDefault, lineWeight, scaleDefault, rotationDefault, xOffsetDefault, yOffsetDefault, zOffsetDefault, NFTnum, timeType, rank;
var dColor;
var saturation;

var emitter;
var img;

var gentleMove = 0;
var inc = 0.0001
var kMax = 10;
var scaleMax = 2;
var r1Min;
var logo;
var logoLocale = -0.004;
var logoSpeed = 0.004;
var logoTrademark;
var button;
var buttonZoom;
var buttonRefresh;
var buttonAlpha;
var buttonPause;
var buttonReset;
var buttonQuestion;
var nightButton;
var sliderButtons
var selectorValue;
var buttonLines;
var sizeButton = false;
var logo3D;
var rotateLogo = 1;
var myFont;
var clickState;
var clicked;
var spinSpeed;
var clickedMap;
var released;
var clickAlpha;
var clickStroke;
var bigLogo = false;
var transCand = false;
var paused = false;
var help = false;

var textColor;
var textSat;
var textBright;
var dirColor;
var isRecording = false;
var message = false;
var timeToWait;
var sliderDiv;
var stars = 200;
var hHSV;
var sHSV;
var vHSV;
var aHSV;
var swapButton = 0;
var rKey = 1;
var lineOff = 0;

var ethData;
var time, timeData, priceData, step;
var starsObject = [];
let starSpeed;
var dots;
var slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9;
var s1, s2, s3, s4, s5, s6, s7, s8, s9;
var selector;
let input;
let image;
var night = true;
var starNum = true;
var uploadState = false;

var lineBright;


var rotX = 0;
var rotY = 0;
var dragX = 0;
var dragY = 0;

var zoomScale = 1;

var drop = [];

var loopSize; //between 10-200
var zDistance; //between 0.1 - 5
var colorMax = 360
var colorMin = 0;
var radSize; // between 1 - 20

var data;
var audio;
var audio2;

p5.disableFriendlyErrors = true; // disables p5 FES
function preload() {
    data = {
        "eth": loadJSON("./alldata.json")

    };




    timeType = dataFile.timeType;

    myFont = loadFont("https://arweave.net/-hnQ1l6qi8W82XdVBX0-cWatpQcLbN5TZ6-MRKHilRc");
    logo3D = loadModel("assets/ethereum.obj", true);



}
var metaDataNames = ['NFT #', 'Type', 'Date', '% Rank', 'Color', 'Loop Mod', 'Shape Mod'];

var isIPadPro = /Macintosh/.test(navigator.userAgent) && 'ontouchend' in document;
window.mobileCheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var cnv;

dColor = dataFile.color;

function setup() {

    cnv = createCanvas(1000, 1000, WEBGL)
    cnv.mouseWheel(changeSize);


    // frameRate(10);
    document.oncontextmenu = function () {
        return false;
    }



    cnv.parent(document.querySelector('#canvas-and-metadata'));
    colorMode(HSB, 359, 100, 100, 1);
    textFont(myFont);
    // setTimeout(timeOutPause, 300000);



    if (window.mobileCheck()) {
        audio = new Audio('assets/silence.mp3');
        audio.volume = 0;
        audio2 = new Audio('assets/silence.mp3');
        audio2.volume = 0;
        audio.muted = true;
        audio2.muted = true;
    } else {
        audio = new Audio('assets/pen.wav');
        audio.volume = 0.2;
        audio2 = new Audio('assets/pen1.wav');
        audio2.volume = 0.2;
    }


    selector = document.querySelector("#date-selector");
    selectorValue = selector.value;

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
    //for individual NFTS!!!!!!
    // dDate = dataFile.date;
    // dColor = dataFile.color;
    // scaleAmount = dataFile.scaleAmount;
    // NFTnum = dataFile["NFT#"];
    // timeType = dataFile.timeType;
    // numLinesDefault = dataFile["#lines"];
    // scaleDefault = dataFile.scale;
    // rotationDefault = dataFile.rotation;
    // xOffsetDefault = dataFile.xOffset;
    // yOffsetDefault = dataFile.yOffset;
    // zOffsetDefault = dataFile.zOffset;
    // lineWeight = dataFile.weight;
    // priceData = dataFile.data;
    // saturation = dataFile.saturation;

    // numLinesDefault = dataFile["#lines"]; 5-15
    // scaleAmount = dataFile.scaleAmount; dont need to change, but would be 0.55-0.7

    // scaleDefault = dataFile.scale; 0-0.075
    // rotationDefault = dataFile.rotation; 0 - 0.2 Stay on low range tho. .13-2 should be super rare.
    // xOffsetDefault = dataFile.xOffset; -30 - 30
    // yOffsetDefault = dataFile.yOffset; -60 - 60
    // zOffsetDefault = dataFile.zOffset; -1000 - -100
    // lineWeight = dataFile.Weight; 0.5 - 1.1
    //saturation? 1.5 - 10 stay on low range tho

    document.getElementById('slider-1').value = '0.7';
    document.getElementById('slider-10').value = lineWeight;
    document.getElementById('slider-2').value = scaleDefault;
    document.getElementById('slider-3').value = numLinesDefault;
    document.getElementById('slider-9').value = rotationDefault;
    document.getElementById('slider-4').value = yOffsetDefault;
    document.getElementById('slider-5').value = xOffsetDefault;
    document.getElementById('slider-6').value = zOffsetDefault;
    document.getElementById('slider-7').value = saturation;













    var parentElement = document.querySelector('#settings');



    buttonReset = createButton("<span class='material-icons'>home</span>");
    buttonReset.mousePressed(pageRefresh);
    buttonReset.style("font-size", "15px");
    buttonReset.style("background-color", 100);
    buttonReset.addClass('button-reset');
    buttonReset.addClass('tip-reset');




    buttonReset.parent(parentElement);
    if (window.innerWidth > 1000 && !isIPadPro) {
        button = createButton("<span class='material-icons'>file_download</span>");
        button.mousePressed(saveImage);
        button.style("font-size", "15px");
        button.style("background-color", 100);
        button.parent(parentElement);
        button.addClass('button-download');
        button.addClass('tip-download');


    }

    nightButton = createButton("<span class='material-icons'>nights_stay</span>");
    nightButton.mousePressed(nightMode);
    nightButton.parent(parentElement);
    nightButton.addClass('button-night');
    nightButton.addClass('tip-night');


    // buttonPause = createButton("<span class='material-icons'>pause</span>");
    // buttonPause.mousePressed(pause);
    // buttonPause.addClass('button-pause');
    // buttonPause.style("font-size", "15px");
    // buttonPause.style("background-color", 100);
    // buttonPause.parent(parentElement);


    buttonZoom = createButton("<span class='material-icons'>star</span>");
    buttonZoom.mousePressed(starsToggle);
    buttonZoom.style("font-size", "15px");
    buttonZoom.style("background-color", 100);
    buttonZoom.parent(parentElement);
    buttonZoom.parent(parentElement);
    buttonZoom.addClass('button-zoom');
    buttonZoom.addClass('tip-zoom');


    buttonRefresh = createButton("<span class='material-icons'>layers</span>");
    buttonRefresh.mousePressed(rButton);
    buttonRefresh.style("font-size", "15px");
    buttonRefresh.style("background-color", 100);
    buttonRefresh.parent(parentElement);
    buttonRefresh.addClass('button-refresh');
    buttonRefresh.addClass('tip-refresh');







    // buttonQuestion = document.querySelector('#help-button')
    document.getElementById("help-button").style.display = "flex";




    sliderDiv = document.querySelector('.sliders');
    sliderButtons = document.querySelector(".slider-buttons");

    slider1 = document.getElementById('slider-1');
    slider2 = document.getElementById('slider-2');
    slider3 = document.getElementById('slider-3');
    slider4 = document.getElementById('slider-4');
    slider5 = document.getElementById('slider-5');
    slider6 = document.getElementById('slider-6');
    slider7 = document.getElementById('slider-7');
    slider8 = document.getElementById('slider-8');
    slider9 = document.getElementById('slider-9');
    slider10 = document.getElementById('slider-10');

    buttonLines = createButton("<span class='material-icons'>fast_forward</span>");
    buttonLines.mousePressed(linesDisable);
    buttonLines.style("font-size", "15px");
    buttonLines.style("background-color", 100);
    buttonLines.parent(sliderButtons);
    buttonLines.addClass('button-lines');

    buttonRandom = createButton("<span class='material-icons'>casino</span>");
    buttonRandom.mousePressed(randomize);
    buttonRandom.style("font-size", "15px");
    buttonRandom.style("background-color", 100);
    buttonRandom.parent(sliderButtons);
    buttonRandom.addClass('button-random');

    buttonUpload = createButton("<span class='material-icons'>add_photo_alternate</span>");
    buttonUpload.mousePressed(uploadFunction);
    // buttonUpload.onClick(document.getElementById('file-input').click());
    buttonUpload.style("font-size", "15px");
    buttonUpload.style("background-color", 100);
    buttonUpload.parent(sliderButtons);
    buttonUpload.addClass('button-upload');









    hHex = 320;
    sHex = 100;
    lHex = 100;



    var settingsDiv = document.getElementById('settings');










    if (window.mobileCheck) {
        stars = 60;
    } else {
        stars = 200;
    }

    var width3D = width - 500
    var height3D = height - 500
    starSpeed = 0.01

    function makeStar() {
        this.x = random(-width3D, width3D);
        this.y = random(-height3D, height3D);
        this.z = random(width3D);
        this.randLength = random(3, 8);
        // display  
        this.update = function () {
            this.z -= starSpeed;
            this.lz = this.z + this.randLength * starSpeed;

            if (this.z < 1) {
                this.z = width3D;
                this.x = random(-width3D, width3D);
                this.y = random(-height3D, height3D);
                this.lz = this.z
            }
        }
        this.display = function () {
            width3D = width - 500
            height3D = height - 500
            let starMapX = map(this.x / this.z, 0, 1, 0, width3D);
            let starMapY = map(this.y / this.z, 0, 1, 0, height3D);
            let lineMapX = map(this.x / this.lz, 0, 1, 0, width3D)
            let lineMapY = map(this.y / this.lz, 0, 1, 0, height3D)

            let r = map(this.z, 0, width3D, this.randLength, 0);
            let sStarColor = map(this.z, 0, width3D, 180, 255)
            stroke(hHSV, sHSV - 30, vHSV - 20)
            strokeWeight(0.4)
            noFill();
            line(lineMapX, lineMapY, starMapX, starMapY)
            fill(255);

            ellipse(starMapX, starMapY, r, r);


        }

    }
    for (let i = 0; i < stars; i += 1) {
        starsObject[i] = new makeStar();
    }

}

function saveImage() {
    audio.play();
    save(`ETHUSD ${dDate}.png`);

}

function starsToggle() {
    if (!starNum) {
        audio2.play();


        starNum = !starNum
        document.querySelector('.button-zoom').innerHTML = '<span class="material-icons">star</span>';

    } else {


        audio.play();
        starNum = !starNum
        document.querySelector('.button-zoom').innerHTML = '<span class="material-icons">star_outline</span>';
    }
}

function pageRefresh() {
    audio2.play();

    setTimeout(() => {
        window.location.reload();
    }, 50);
    // }


}


function nightMode() {


    if (!night) {
        night = true;
        audio.play();


        document.getElementById('sliders-div').style.backgroundColor = '#c0c0c0';
        document.getElementById('sliders-div').style.color = 'black';






        document.getElementById("slider-1").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-10").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-3").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-2").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-9").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-4").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-5").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        document.getElementById("slider-6").style.background = 'linear-gradient(180deg, rgb(139, 139, 139) 0%, rgba(23,23,23,1) 25%, rgba(43,43,43,1) 50%, rgba(22,22,22,1) 75%, rgb(107, 107, 107) 100%)';

        buttonRandom.style("background-color", '#000000');
        buttonRandom.style("color", '#ffffff');

        nightButton.style("background-color", '#000000');
        nightButton.style("color", '#ffffff');

        buttonLines.style("background-color", '#000000');
        buttonLines.style("color", '#ffffff');

        buttonUpload.style("background-color", '#000000');
        buttonUpload.style("color", '#ffffff');

        // buttonAlpha.style("background-color", '#000000');
        // buttonAlpha.style("color", '#ffffff');

        buttonRefresh.style("background-color", '#000000');
        buttonRefresh.style("color", '#ffffff');

        buttonReset.style("background-color", '#000000');
        buttonReset.style("color", '#ffffff');

        if (window.innerWidth > 1000 && !isIPadPro) {

            button.style("background-color", '#000000');
            button.style("color", '#ffffff');
        }
        buttonZoom.style("background-color", '#000000');
        buttonZoom.style("color", '#ffffff');


        document.getElementById("help-button").style.backgroundColor = '#000000';

        document.getElementById("help-button").style.color = '#ffffff';



        document.getElementById("home-button").style.backgroundColor = '#c0c0c0';

        document.getElementById("home-button").style.color = '#000000';

        document.getElementById("date-selector").style.backgroundColor = '#c0c0c0';

        document.getElementById("date-selector").style.color = '#000000';

        document.getElementById("slider-7").style.background = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)';


        document.querySelector('.button-night').innerHTML = '<span class="material-icons">nights_stay</span>';

        document.body.style.backgroundImage = 'linear-gradient(164deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 35%, rgba(71,71,71,1) 58%, rgba(101,101,101,1) 78%, rgba(150,150,150,1) 100%)';



        document.getElementById("header-image").src = 'assets/padark.png';
        document.getElementById("logo-text").src = 'assets/lightpriceart.png';


    } else {
        audio2.play();
        night = false;
        document.getElementById('sliders-div').style.backgroundColor = '#000000';
        document.getElementById('sliders-div').style.color = 'white';


        document.getElementById("slider-1").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-10").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-3").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-2").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-9").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-4").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-5").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        document.getElementById("slider-6").style.background = 'linear-gradient(180deg, rgba(133,133,133,1) 0%, rgba(255,255,255,1) 17%, rgba(195,195,195,1) 50%, rgba(255,255,255,1) 85%, rgba(133,133,133,1) 100%)';

        buttonRandom.style("background-color", '#ffffff');
        buttonRandom.style("color", '#000000');

        nightButton.style("background-color", '#ffffff');
        nightButton.style("color", '#000000');

        buttonLines.style("background-color", '#ffffff');
        buttonLines.style("color", '#000000');

        buttonUpload.style("background-color", '#ffffff');
        buttonUpload.style("color", '#000000');

        // buttonAlpha.style("background-color", '#ffffff');
        // buttonAlpha.style("color", '#000000');

        buttonRefresh.style("background-color", '#ffffff');
        buttonRefresh.style("color", '#000000');

        buttonReset.style("background-color", '#ffffff');
        buttonReset.style("color", '#000000');

        if (window.innerWidth > 1000 && !isIPadPro) {
            button.style("background-color", '#ffffff');
            button.style("color", '#000000');
        }
        buttonZoom.style("background-color", '#ffffff');
        buttonZoom.style("color", '#000000');

        document.getElementById("help-button").style.backgroundColor = '#ffffff';

        document.getElementById("help-button").style.color = '#000000';

        document.getElementById("home-button").style.backgroundColor = '#000000';

        document.getElementById("home-button").style.color = '#ffffff';

        document.getElementById("date-selector").style.backgroundColor = '#000000';

        document.getElementById("date-selector").style.color = '#ffffff';



        document.getElementById("slider-7").style.background = 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)';

        document.querySelector('.button-night').innerHTML = '<span class="material-icons">wb_sunny</span>';

        document.body.style.backgroundImage = 'linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(217,217,217,1) 30%, rgba(149,149,149,1) 58%, rgba(108,108,108,1) 80%, rgba(0,0,0,1) 100%)';

        document.getElementById("header-image").src = 'assets/pa.png';
        document.getElementById("logo-text").src = 'assets/darkpriceart.png';


    }

    nightButton.style("background-color", 100);

}


function linesDisable() {
    lineOff++;
    if (lineOff === 0) {
        audio2.play();


        document.querySelector('.button-lines').innerHTML = '<span class="material-icons">fast_forward</span>';
    } else if (lineOff === 1) {
        audio2.volume = 0.4;
        audio2.play();
        audio2.volume = 0.2;

        document.querySelector('.button-lines').innerHTML = '<span class="material-icons">pause</span>';
    } else if (lineOff === 2) {
        audio2.play();

        document.querySelector('.button-lines').innerHTML = '<span class="material-icons">play_arrow</span>';
    } else {
        audio.play();

        lineOff = 0;

        document.querySelector('.button-lines').innerHTML = '<span class="material-icons">fast_forward</span>';
    }










}



function keyPressed() {
    if (key === 'g') {
        save(`${NFTnum}.png`);

    }
    // if (key === 'l') {
    //     rKey++;
    //     if (rKey === 3) {
    //         rKey = 0;
    //     }
    // } else if (key === 'n') {
    //     nightMode();
    // } else if (key === '1') {
    //     document.getElementById('slider-1').value = random(0.1, 8);

    // } else if (key === '2') {
    //     document.getElementById('slider-10').value = random(0.01, 1.2);

    // } else if (key === '3') {
    //     document.getElementById('slider-3').value = random(0, 60);

    // } else if (key === '4') {
    //     document.getElementById('slider-2').value = random(0, 0.4);

    // } else if (key === '5') {
    //     if (swapButton === 0) {
    //         document.getElementById('slider-9').value = random(0, 1);
    //     } else {
    //         document.getElementById('slider-9').value = random(0, 1).toFixed(2);

    //     }
    // } else if (key === '6') {
    //     document.getElementById('slider-4').value = random(-100, 100);

    // } else if (key === '7') {
    //     document.getElementById('slider-5').value = random(-50, 50);

    // } else if (key === '8') {
    //     document.getElementById('slider-6').value = random(-1000, 200);

    // } else if (key === '9') {
    //     document.getElementById('slider-7').value = random(0.01, 30);

    // }
}

function randomize() {
    audio2.play();
    document.getElementById('slider-10').value = random(0.4, 1.2);
    document.getElementById('slider-3').value = random(5, 60);
    document.getElementById('slider-9').value = random(0, 1);
    document.getElementById('slider-4').value = random(-100, 100);
    document.getElementById('slider-5').value = random(-50, 50);
    document.getElementById('slider-6').value = random(-1000, 200);
    if (swapButton === 0) {
        document.getElementById('slider-7').value = random(0.01, 20);
        document.getElementById('slider-2').value = random(0, 0.4);

    } else {
        document.getElementById('slider-7').value = random(0.01, 0.1);
        document.getElementById('slider-2').value = random(0.15, 0.3);

    }
    // linesDisable();
    let randColor = random(20, 255)
    let randColor2 = random(50, 255)
    let randColor3 = random(80, 255)








    document.querySelectorAll('.button-random').forEach(i => {
        i.addEventListener('click', () => {
            i.classList.toggle("down");
        });
    });


    buttonRandom.style("color", `rgb(${randColor3}, ${randColor3}, ${randColor3})`);

}

function rButton() {
    rKey++;
    if (rKey === 1) {
        audio2.play();

        document.querySelector('.button-refresh').innerHTML = '<span class="material-icons">insert_chart_outlined</span>';

    } else if (rKey === 2) {
        audio2.volume = 0.4;
        audio2.play();
        audio2.volume = 0.2;

        // rKey = false;
        document.querySelector('.button-refresh').innerHTML = '<span class="material-icons">layers_clear</span>';

    } else {
        audio.play();

        rKey = 0;
        document.querySelector('.button-refresh').innerHTML = '<span class="material-icons">layers</span>';
    }
}



function uploadFunction() {
    audio.play();
    // lineOff = 2;
    // starNum = false;
    starsToggle();
    uploadState = !uploadState;
    if (uploadState) {
        sliderButtons = document.querySelector('.slider-container')
        input = createFileInput(handleFile);
        // input.parent(sliderButtons);
        input.id = "upload";
        if (window.innerWidth > 1000) {
            if (window.innerWidth > 1300) {
                input.position(180, 60)
            } else {
                input.position(90, 60)

            }
        } else {
            input.position(70 + width / 4, (innerWidth - 170) + 300)

        }
        var inputSelector = document.querySelectorAll('input[type=file]');
        inputSelector.id = "upload";
        // inputSelector.style.display = 'flex'
        // inputSelector.style.display = 'flex'

    } else {
        // inputSelector.style.display = 'none'
        document.querySelector('input[type=file]').style.display = 'none';
    }

}

function handleFile(file) {

    print(file);
    if (file.type === 'image') {
        image = createImg(file.data, '');
        image.hide();
    } else {
        image = null;
    }


}

function handleHandle() {

    while (document.getElementById("input").value = "") {
        console.log("waiting for file")
    }
    handleFile()
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    audio2.play();

    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    audio.play();

    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}




function mouseWheel() {
    if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {

        // zoomScale = zoomScale + 10;
        if (event.deltaY > 0) {
            if (zoomScale > 0.2 || zoomScale < -0.2) {
                zoomScale = zoomScale - 0.05;
            } else {
                zoomScale = zoomScale - 0.001;
            }
            return false;

        } else {
            zoomScale = zoomScale + 0.05;
            return false;

        }
    }

}

function changeSize(event) {
    if (event.deltaY > 0) {
        zoomScale = zoomScale + 0.01;
    } else {
        zoomScale = zoomScale - 0.01;
    }
}

function mouseDragged() {
    if (mouseButton === LEFT) {
        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
            rotX = map(mouseX, 0, 1000, 2.9, -2.9);
            rotY = map(mouseY, 0, 1000, -2.9, 2.9);
            return false;

        }
    } else if (mouseButton === RIGHT) {
        if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0) {
            dragX = map(mouseX, 0, 1000, -500, 500);
            dragY = map(mouseY, 0, 1000, -500, 500);
            return false;
        }
    }
    // prevent default
}

function play() {
    audio2.play();

}

function selectChange() {
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

    document.getElementById('slider-1').value = '0.7';
    document.getElementById('slider-10').value = lineWeight;
    document.getElementById('slider-2').value = scaleDefault;
    document.getElementById('slider-3').value = numLinesDefault;
    document.getElementById('slider-9').value = rotationDefault;
    document.getElementById('slider-4').value = yOffsetDefault;
    document.getElementById('slider-5').value = xOffsetDefault;
    document.getElementById('slider-6').value = zOffsetDefault;
    document.getElementById('slider-7').value = saturation;

    pickrChange = {
        "h": dColor,
        "s": 100,
        "v": 100,
        "a": 1
    }
}


const pickr = Pickr.create({
    el: '.pickr-container',
    theme: 'nano', // or 'monolith', or 'nano'
    lockOpacity: false,

    comparison: false,
    closeWithKey: 'Escape',

    default: '#4d5bff',


    swatches: null,
    defaultRepresentation: 'HSLA',

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: false,
            clear: false,
            save: false
        }
    }

});
var pickrChange;