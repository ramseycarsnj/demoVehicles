$(document).ready(function(){

  var vehicleArray = [];

  function Vehicle(
    stock,
    car,
    trim,
    carColor,
    msrp,
    specialPrice,
    img,
    engine,
    mpg,
    doors,
    trans,
    mileage,
    modelCode
    ){
    this.stock = stock;
    this.car = car;
    this.trim = trim;
    this.carColor = carColor;
    this.msrp = msrp;
    this.specialPrice = specialPrice;
    this.img = img;
    this.emailLink = 'mailto:rwood@ramseysubaru.net';
    this.trans = trans;
    this.mpg = mpg;
    this.doors = doors;
    this.engine = engine;
    this.mileage = mileage;
    this.modelCode = modelCode;
  };

  function listing(thisCar){
    $('#testUl').append(
      '<ul><li class="center sectionTitle">' +

      thisCar.car + '</li><li><img src="'+

      thisCar.img + '" class="vehicleImage" /></li><li class="center">Mileage<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;'+

      thisCar.mileage + '</span></li><li class="center">MSRP<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;'+

      thisCar.msrp + '</span></li><li class="center">Price<span class="pricing">&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;'+

      thisCar.specialPrice + '</span></li><li><div class="imageContainer"><div class="imageArea"><img src="http://joethemovie.com/images/engineIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Engine</span><br/>' +
      thisCar.engine + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gearIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Transmission</span><br/>' +
      thisCar.trans + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gaugeIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">MPG</span><br/>' +
      thisCar.mpg + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carFrontIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Exterior Color</span><br/>' +
      thisCar.carColor + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carSideIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Doors</span><br/>' +
      thisCar.doors + '</div></div></li><li class="sectionTitle pricingSpacing">Trim</li><li">'+

      thisCar.trim + '</li><li class="sectionTitle sectionSpacing">Color</li><li>'+

      thisCar.carColor + '</li><li class="sectionTitle sectionSpacing">Model Code</li><li>'+

      thisCar.modelCode + '</li><li class="sectionTitle sectionSpacing">Stock Number</li><li>'+

      thisCar.stock + '</li><li class="sectionSpacing"><a href="' +

      thisCar.emailLink + '?subject=I am interested in ' +

      thisCar.stock + '" class="emailLink">Request Info</a></li></ul>'
    );
}
  vehicleArray[0] = new Vehicle(
    'SUG2508',
    '2016 WRX Limited',
    'Limited w/ EyeSight, Moonroof, Nav',
    'Black Silica',
    'msrp',
    'specialPrice',
    "vehicleImages/SUG2508/SUG2508-2.JPG",
    '2.0L DOHC',
    '18 city/24 hwy',
    '4',
    'Automatic CVT AWD',
    '15,130',
    ''
  );
  vehicleArray[1] = new Vehicle(
    'SUG2509',
    '2016 Subaru Outback Limited',
    'Limited w/ EyeSight, Moonroof + Nav',
    'Carbide Grey',
    'msrp',
    'specialPrice',
    "vehicleImages/SUG2509/SUG2509-2.JPG",
    '2.5L 4-cyl AWD',
    '25 city/33 hwy',
    '4',
    'Automatic CVT',
    '18,676',
    ''
  );
  vehicleArray[2] = new Vehicle(
    'SUG2579',
    '2016 Subaru Outback 3.6R Limited',
    'Limited',
    'Tungsten',
    'msrp',
    'specialPrice',
    "vehicleImages/SUG2579/SUG2579-2.JPG",
    '3.6R Boxer H6',
    '20 city/27 hwy',
    '4',
    'Automatic CVT',
    '17,097',
    ''
  );
  vehicleArray[3] = new Vehicle(
    'SUG2609',
    '2016 Subaru WRX STi Limited',
    'Limited',
    'Blue',
    'msrp',
    'specialPrice',
    "vehicleImages/SUG2609/SUG2609-2.JPG",
    '2.5L 4-cyl',
    '17 city, 23 hwy',
    '4',
    '6 Speed Manual',
    '246',
    ''
  );
  vehicleArray[4] = new Vehicle(
    'SUG2610',
    '2016 Subaru Legacy 2.5i Limited',
    'Limited',
    'Gray',
    'msrp',
    'specialPrice',
    "vehicleImages/SUG2610/SUG2610-2.JPG",
    '2.5L 4-Cyl',
    '26 city/36 hwy',
    '4',
    'Automatic CVT',
    '17,985',
    ''
  );
  vehicleArray[5] = new Vehicle(
    'SUH0050',
    '2017 Subaru WRX STI',
    'Limited w/ EyeSight',
    'Crystal White',
    'msrp',
    'specialPrice',
    "vehicleImages/SUH0050/SUH0050-2.JPG",
    '2.0L DOHC',
    '18 city/24 hwy',
    '4',
    '6 Speed Manual',
    '0',
    ''
  );


for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
