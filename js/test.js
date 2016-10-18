$(document).ready(function(){
  var vehicleArray = [];
  function Vehicle(
    stock,
    car,
    trim,
    carColor,
    specialPrice,
    msrp,
    supportImg1,
    supportImg2,
    supportImg3,
    supportImg4,
    supportImg5,
    supportImg6,
    supportImg7,
    supportImg8,
    supportImg9,
    supportImg10,
    supportImg11,
    supportImg12,
    supportImg13,
    supportImg14,
    supportImg15,
    supportImg16,
    supportImg17,
    supportImg18,
    supportImg19,
    supportImg20,
    supportImg21,
    supportImg22,
    supportImg23,
    supportImg24,
    supportImg25,
    supportImg26,
    supportImg27,
    supportImg28,
    supportImg29,
    supportImg30,
    supportImg31,
    supportImg32,
    supportImg33,
    engine,
    mpg,
    doors,
    trans,
    mileage
  ){
    this.stock=stock,
    this.car=car,
    this.trim=trim,
    this.carColor=carColor,
    this.specialPrice=specialPrice,
    this.msrp=msrp,
    this.supportImg1=supportImg1,
    this.supportImg2=supportImg2,
    this.supportImg3=supportImg3,
    this.supportImg4=supportImg4,
    this.supportImg5=supportImg5,
    this.supportImg6=supportImg6,
    this.supportImg7=supportImg7,
    this.supportImg8=supportImg8,
    this.supportImg9=supportImg9,
    this.supportImg10=supportImg10,
    this.supportImg11=supportImg11,
    this.supportImg12=supportImg12,
    this.supportImg13=supportImg13,
    this.supportImg14=supportImg14,
    this.supportImg15=supportImg15,
    this.supportImg16=supportImg16,
    this.supportImg17=supportImg17,
    this.supportImg18=supportImg18,
    this.supportImg19=supportImg19,
    this.supportImg20=supportImg20,
    this.supportImg21=supportImg21,
    this.supportImg22=supportImg22,
    this.supportImg23=supportImg23,
    this.supportImg24=supportImg24,
    this.supportImg25=supportImg25,
    this.supportImg26=supportImg26,
    this.supportImg27=supportImg27,
    this.supportImg28=supportImg28,
    this.supportImg29=supportImg29,
    this.supportImg30=supportImg30,
    this.supportImg31=supportImg31,
    this.supportImg32=supportImg32,
    this.supportImg33=supportImg33,
    this.engine=engine,
    this.mpg=mpg,
    this.doors=doors,
    this.trans=trans,
    this.mileage=mileage
  };


function listing(thisCar){
  // insert append function code here


$('.mainImg').append(
  '<img src="'
  + thisCar.supportImg1 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg1 mains" /><img src="'
  + thisCar.supportImg2 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg2 mains" /><img src="'
  + thisCar.supportImg3 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg3 mains" /><img src="'
  + thisCar.supportImg4 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg4 mains" /><img src="'
  + thisCar.supportImg5 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg5 mains" /><img src="'
  + thisCar.supportImg6 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg6 mains" /><img src="'
  + thisCar.supportImg7 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg7 mains" /><img src="'
  + thisCar.supportImg8 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg8 mains" /><img src="'
  + thisCar.supportImg9 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg9 mains" /><img src="'
  + thisCar.supportImg10 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg10 mains" /><img src="'
  + thisCar.supportImg11 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg11 mains" /><img src="'
  + thisCar.supportImg12 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg12 mains" /><img src="'
  + thisCar.supportImg13 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg13 mains" /><img src="'
  + thisCar.supportImg14 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg14 mains" /><img src="'
  + thisCar.supportImg15 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg15 mains" /><img src="'
  + thisCar.supportImg16 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg16 mains" /><img src="'
  + thisCar.supportImg17 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg17 mains" /><img src="'
  + thisCar.supportImg18 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg18 mains" /><img src="'
  + thisCar.supportImg19 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg19 mains" /><img src="'
  + thisCar.supportImg20 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg20 mains" /><img src="'
  + thisCar.supportImg21 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg21 mains" /><img src="'
  + thisCar.supportImg22 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg22 mains" /><img src="'
  + thisCar.supportImg23 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg23 mains" /><img src="'
  + thisCar.supportImg24 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg24 mains" /><img src="'
  + thisCar.supportImg25 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg25 mains" /><img src="'
  + thisCar.supportImg26 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg26 mains" /><img src="'
  + thisCar.supportImg27 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg27 mains" /><img src="'
  + thisCar.supportImg28 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg28 mains" /><img src="'
  + thisCar.supportImg29 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg29 mains" /><img src="'
  + thisCar.supportImg30 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg30 mains" /><img src="'
  + thisCar.supportImg31 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg31 mains" /><img src="'
  + thisCar.supportImg32 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg32 mains" /><img src="'
  + thisCar.supportImg33 + '" alt="' + thisCar.car + ' Image" class="' + thisCar.stock + 'MainImg33 mains" /><img src="'

  + thisCar.supportImg1 + '" alt="' + thisCar.car + ' Image 1" class="' + thisCar.stock + 'Sup1 supSize"/><img src="'
  + thisCar.supportImg2 + '" alt="' + thisCar.car + ' Image 2" class="' + thisCar.stock + 'Sup2 supSize" /><img src="'
  + thisCar.supportImg3 + '" alt="' + thisCar.car + ' Image 3" class="' + thisCar.stock + 'Sup3 supSize" /><img src="'
  + thisCar.supportImg4 + '" alt="' + thisCar.car + ' Image 4" class="' + thisCar.stock + 'Sup4 supSize" /><img src="'
  + thisCar.supportImg5 + '" alt="' + thisCar.car + ' Image 5" class="' + thisCar.stock + 'Sup5 supSize" /><img src="'
  + thisCar.supportImg6 + '" alt="' + thisCar.car + ' Image 6" class="' + thisCar.stock + 'Sup6 supSize" /><img src="'
  + thisCar.supportImg7 + '" alt="' + thisCar.car + ' Image 7" class="' + thisCar.stock + 'Sup7 supSize" /><img src="'
  + thisCar.supportImg8 + '" alt="' + thisCar.car + ' Image 8" class="' + thisCar.stock + 'Sup8 supSize" /><img src="'
  + thisCar.supportImg9 + '" alt="' + thisCar.car + ' Image 9" class="' + thisCar.stock + 'Sup9 supSize" /><img src="'
  + thisCar.supportImg10 + '" alt="' + thisCar.car + ' Image 10" class="' + thisCar.stock + 'Sup10 supSize" /><img src="'
  + thisCar.supportImg11 + '" alt="' + thisCar.car + ' Image 11" class="' + thisCar.stock + 'Sup11 supSize" /><img src="'
  + thisCar.supportImg12 + '" alt="' + thisCar.car + ' Image 12" class="' + thisCar.stock + 'Sup12 supSize" /><img src="'
  + thisCar.supportImg13 + '" alt="' + thisCar.car + ' Image 13" class="' + thisCar.stock + 'Sup13 supSize" /><img src="'
  + thisCar.supportImg14 + '" alt="' + thisCar.car + ' Image 14" class="' + thisCar.stock + 'Sup14 supSize" /><img src="'
  + thisCar.supportImg15 + '" alt="' + thisCar.car + ' Image 15" class="' + thisCar.stock + 'Sup15 supSize" /><img src="'
  + thisCar.supportImg16 + '" alt="' + thisCar.car + ' Image 16" class="' + thisCar.stock + 'Sup16 supSize" /><img src="'
  + thisCar.supportImg17 + '" alt="' + thisCar.car + ' Image 17" class="' + thisCar.stock + 'Sup17 supSize" /><img src="'
  + thisCar.supportImg18 + '" alt="' + thisCar.car + ' Image 18" class="' + thisCar.stock + 'Sup18 supSize" /><img src="'
  + thisCar.supportImg19 + '" alt="' + thisCar.car + ' Image 19" class="' + thisCar.stock + 'Sup19 supSize" /><img src="'
  + thisCar.supportImg20 + '" alt="' + thisCar.car + ' Image 20" class="' + thisCar.stock + 'Sup20 supSize" /><img src="'
  + thisCar.supportImg21 + '" alt="' + thisCar.car + ' Image 21" class="' + thisCar.stock + 'Sup21 supSize" /><img src="'
  + thisCar.supportImg22 + '" alt="' + thisCar.car + ' Image 22" class="' + thisCar.stock + 'Sup22 supSize" /><img src="'
  + thisCar.supportImg23 + '" alt="' + thisCar.car + ' Image 23" class="' + thisCar.stock + 'Sup23 supSize" /><img src="'
  + thisCar.supportImg24 + '" alt="' + thisCar.car + ' Image 24" class="' + thisCar.stock + 'Sup24 supSize" /><img src="'
  + thisCar.supportImg25 + '" alt="' + thisCar.car + ' Image 25" class="' + thisCar.stock + 'Sup25 supSize" /><img src="'
  + thisCar.supportImg26 + '" alt="' + thisCar.car + ' Image 26" class="' + thisCar.stock + 'Sup26 supSize" /><img src="'
  + thisCar.supportImg27 + '" alt="' + thisCar.car + ' Image 27" class="' + thisCar.stock + 'Sup27 supSize" /><img src="'
  + thisCar.supportImg28 + '" alt="' + thisCar.car + ' Image 28" class="' + thisCar.stock + 'Sup28 supSize" /><img src="'
  + thisCar.supportImg29 + '" alt="' + thisCar.car + ' Image 29" class="' + thisCar.stock + 'Sup29 supSize" /><img src="'
  + thisCar.supportImg30 + '" alt="' + thisCar.car + ' Image 30" class="' + thisCar.stock + 'Sup30 supSize" /><img src="'
  + thisCar.supportImg31 + '" alt="' + thisCar.car + ' Image 31" class="' + thisCar.stock + 'Sup31 supSize" /><img src="'
  + thisCar.supportImg32 + '" alt="' + thisCar.car + ' Image 32" class="' + thisCar.stock + 'Sup32 supSize" /><img src="'
  + thisCar.supportImg33 + '" alt="' + thisCar.car + ' Image 33" class="' + thisCar.stock + 'Sup33 supSize" />');




  supArray.push(thisCar.stock + 'Sup');
  mainArray.push(thisCar.stock + 'MainImg');

}

vehicleArray[0] = new Vehicle(
  'SUG2508',
  '2016 WRX Limited',
  'Limited w/ EyeSight, Moonroof, Nav',
  'Black Silica',
  'specialPrice',
  'msrp',
  "vehicleImages/SUG2508/SUG2508-1.JPG",
  "vehicleImages/SUG2508/SUG2508-2.JPG",
  "vehicleImages/SUG2508/SUG2508-3.JPG",
  "vehicleImages/SUG2508/SUG2508-4.JPG",
  "vehicleImages/SUG2508/SUG2508-5.JPG",
  "vehicleImages/SUG2508/SUG2508-6.JPG",
  "vehicleImages/SUG2508/SUG2508-7.JPG",
  "vehicleImages/SUG2508/SUG2508-8.JPG",
  "vehicleImages/SUG2508/SUG2508-9.JPG",
  "vehicleImages/SUG2508/SUG2508-10.JPG",
  "vehicleImages/SUG2508/SUG2508-11.JPG",
  "vehicleImages/SUG2508/SUG2508-12.JPG",
  "vehicleImages/SUG2508/SUG2508-13.JPG",
  "vehicleImages/SUG2508/SUG2508-14.JPG",
  "vehicleImages/SUG2508/SUG2508-15.JPG",
  "vehicleImages/SUG2508/SUG2508-16.JPG",
  "vehicleImages/SUG2508/SUG2508-17.JPG",
  "vehicleImages/SUG2508/SUG2508-18.JPG",
  "vehicleImages/SUG2508/SUG2508-19.JPG",
  "vehicleImages/SUG2508/SUG2508-20.JPG",
  "vehicleImages/SUG2508/SUG2508-21.JPG",
  "vehicleImages/SUG2508/SUG2508-22.JPG",
  "vehicleImages/SUG2508/SUG2508-23.JPG",
  "vehicleImages/SUG2508/SUG2508-24.JPG",
  "vehicleImages/SUG2508/SUG2508-25.JPG",
  "vehicleImages/SUG2508/SUG2508-26.JPG",
  "vehicleImages/SUG2508/SUG2508-27.JPG",
  "vehicleImages/SUG2508/SUG2508-28.JPG",
  "vehicleImages/SUG2508/SUG2508-29.JPG",
  "vehicleImages/SUG2508/SUG2508-30.JPG",
  "vehicleImages/SUG2508/SUG2508-31.JPG",
  "vehicleImages/SUG2508/SUG2508-32.JPG",
  "vehicleImages/SUG2508/SUG2508-33.JPG",
  '2.0L DOHC',
  '18 city/24 hwy',
  '4',
  'Automatic CVT AWD',
  '15,130'
);
vehicleArray[1] = new Vehicle(
  'SUG2509',
  '2016 Subaru Outback Limited',
  'Limited w/ EyeSight, Moonroof + Nav',
  'Carbide Grey',
  'specialPrice',
  'msrp',
  "vehicleImages/SUG2509/SUG2509-1.JPG",
  "vehicleImages/SUG2509/SUG2509-2.JPG",
  "vehicleImages/SUG2509/SUG2509-3.JPG",
  "vehicleImages/SUG2509/SUG2509-4.JPG",
  "vehicleImages/SUG2509/SUG2509-5.JPG",
  "vehicleImages/SUG2509/SUG2509-6.JPG",
  "vehicleImages/SUG2509/SUG2509-7.JPG",
  "vehicleImages/SUG2509/SUG2509-8.JPG",
  "vehicleImages/SUG2509/SUG2509-9.JPG",
  "vehicleImages/SUG2509/SUG2509-10.JPG",
  "vehicleImages/SUG2509/SUG2509-11.JPG",
  "vehicleImages/SUG2509/SUG2509-12.JPG",
  "vehicleImages/SUG2509/SUG2509-13.JPG",
  "vehicleImages/SUG2509/SUG2509-14.JPG",
  "vehicleImages/SUG2509/SUG2509-15.JPG",
  "vehicleImages/SUG2509/SUG2509-16.JPG",
  "vehicleImages/SUG2509/SUG2509-17.JPG",
  "vehicleImages/SUG2509/SUG2509-18.JPG",
  "vehicleImages/SUG2509/SUG2509-19.JPG",
  "vehicleImages/SUG2509/SUG2509-20.JPG",
  "vehicleImages/SUG2509/SUG2509-21.JPG",
  "vehicleImages/SUG2509/SUG2509-22.JPG",
  "vehicleImages/SUG2509/SUG2509-23.JPG",
  "vehicleImages/SUG2509/SUG2509-24.JPG",
  "vehicleImages/SUG2509/SUG2509-25.JPG",
  "vehicleImages/SUG2509/SUG2509-26.JPG",
  "vehicleImages/SUG2509/SUG2509-27.JPG",
  "vehicleImages/SUG2509/SUG2509-28.JPG",
  "vehicleImages/SUG2509/SUG2509-29.JPG",
  "vehicleImages/SUG2509/SUG2509-30.JPG",
  "vehicleImages/SUG2509/SUG2509-31.JPG",
  "vehicleImages/SUG2509/SUG2509-32.JPG",
  "vehicleImages/SUG2509/SUG2509-33.JPG",
  '2.5L 4-cyl AWD',
  '25 city/33 hwy',
  '4',
  'Automatic CVT',
  '18,676'
);
vehicleArray[2] = new Vehicle(
  'SUG2579',
  '2016 Subaru Outback 3.6R Limited',
  'Limited',
  'Tungsten',
  'specialPrice',
  'msrp',
  "vehicleImages/SUG2579/SUG2579-1.JPG",
  "vehicleImages/SUG2579/SUG2579-2.JPG",
  "vehicleImages/SUG2579/SUG2579-3.JPG",
  "vehicleImages/SUG2579/SUG2579-4.JPG",
  "vehicleImages/SUG2579/SUG2579-5.JPG",
  "vehicleImages/SUG2579/SUG2579-6.JPG",
  "vehicleImages/SUG2579/SUG2579-7.JPG",
  "vehicleImages/SUG2579/SUG2579-8.JPG",
  "vehicleImages/SUG2579/SUG2579-9.JPG",
  "vehicleImages/SUG2579/SUG2579-10.JPG",
  "vehicleImages/SUG2579/SUG2579-11.JPG",
  "vehicleImages/SUG2579/SUG2579-12.JPG",
  "vehicleImages/SUG2579/SUG2579-13.JPG",
  "vehicleImages/SUG2579/SUG2579-14.JPG",
  "vehicleImages/SUG2579/SUG2579-15.JPG",
  "vehicleImages/SUG2579/SUG2579-16.JPG",
  "vehicleImages/SUG2579/SUG2579-17.JPG",
  "vehicleImages/SUG2579/SUG2579-18.JPG",
  "vehicleImages/SUG2579/SUG2579-19.JPG",
  "vehicleImages/SUG2579/SUG2579-20.JPG",
  "vehicleImages/SUG2579/SUG2579-21.JPG",
  "vehicleImages/SUG2579/SUG2579-22.JPG",
  "vehicleImages/SUG2579/SUG2579-23.JPG",
  "vehicleImages/SUG2579/SUG2579-24.JPG",
  "vehicleImages/SUG2579/SUG2579-25.JPG",
  "vehicleImages/SUG2579/SUG2579-26.JPG",
  "vehicleImages/SUG2579/SUG2579-27.JPG",
  "vehicleImages/SUG2579/SUG2579-28.JPG",
  "vehicleImages/SUG2579/SUG2579-29.JPG",
  "vehicleImages/SUG2579/SUG2579-30.JPG",
  "vehicleImages/SUG2579/SUG2579-31.JPG",
  "vehicleImages/SUG2579/SUG2579-32.JPG",
  "vehicleImages/SUG2579/SUG2579-33.JPG",
  '3.6R Boxer H6',
  '20 city/27 hwy',
  '4',
  'Automatic CVT',
  '17,097'
);
vehicleArray[3] = new Vehicle(
  'SUG2609',
  '2016 Subaru WRX STi Limited',
  'Limited',
  'Blue',
  'specialPrice',
  'msrp',
  "vehicleImages/SUG2609/SUG2609-1.JPG",
  "vehicleImages/SUG2609/SUG2609-2.JPG",
  "vehicleImages/SUG2609/SUG2609-3.JPG",
  "vehicleImages/SUG2609/SUG2609-4.JPG",
  "vehicleImages/SUG2609/SUG2609-5.JPG",
  "vehicleImages/SUG2609/SUG2609-6.JPG",
  "vehicleImages/SUG2609/SUG2609-7.JPG",
  "vehicleImages/SUG2609/SUG2609-8.JPG",
  "vehicleImages/SUG2609/SUG2609-9.JPG",
  "vehicleImages/SUG2609/SUG2609-10.JPG",
  "vehicleImages/SUG2609/SUG2609-11.JPG",
  "vehicleImages/SUG2609/SUG2609-12.JPG",
  "vehicleImages/SUG2609/SUG2609-13.JPG",
  "vehicleImages/SUG2609/SUG2609-14.JPG",
  "vehicleImages/SUG2609/SUG2609-15.JPG",
  "vehicleImages/SUG2609/SUG2609-16.JPG",
  "vehicleImages/SUG2609/SUG2609-17.JPG",
  "vehicleImages/SUG2609/SUG2609-18.JPG",
  "vehicleImages/SUG2609/SUG2609-19.JPG",
  "vehicleImages/SUG2609/SUG2609-20.JPG",
  "vehicleImages/SUG2609/SUG2609-21.JPG",
  "vehicleImages/SUG2609/SUG2609-22.JPG",
  "vehicleImages/SUG2609/SUG2609-23.JPG",
  "vehicleImages/SUG2609/SUG2609-24.JPG",
  "vehicleImages/SUG2609/SUG2609-25.JPG",
  "vehicleImages/SUG2609/SUG2609-26.JPG",
  "vehicleImages/SUG2609/SUG2609-27.JPG",
  "vehicleImages/SUG2609/SUG2609-28.JPG",
  "vehicleImages/SUG2609/SUG2609-29.JPG",
  "vehicleImages/SUG2609/SUG2609-30.JPG",
  "vehicleImages/SUG2609/SUG2609-31.JPG",
  "vehicleImages/SUG2609/SUG2609-32.JPG",
  "vehicleImages/SUG2609/SUG2609-33.JPG",
  '2.5L 4-cyl',
  '17 city, 23 hwy',
  '4',
  '6 Speed Manual',
  '246'
);
vehicleArray[4] = new Vehicle(
  'SUG2610',
  '2016 Subaru Legacy 2.5i Limited',
  'Limited',
  'Gray',
  'specialPrice',
  'msrp',
  "vehicleImages/SUG2610/SUG2610-1.JPG",
  "vehicleImages/SUG2610/SUG2610-2.JPG",
  "vehicleImages/SUG2610/SUG2610-3.JPG",
  "vehicleImages/SUG2610/SUG2610-4.JPG",
  "vehicleImages/SUG2610/SUG2610-5.JPG",
  "vehicleImages/SUG2610/SUG2610-6.JPG",
  "vehicleImages/SUG2610/SUG2610-7.JPG",
  "vehicleImages/SUG2610/SUG2610-8.JPG",
  "vehicleImages/SUG2610/SUG2610-9.JPG",
  "vehicleImages/SUG2610/SUG2610-10.JPG",
  "vehicleImages/SUG2610/SUG2610-11.JPG",
  "vehicleImages/SUG2610/SUG2610-12.JPG",
  "vehicleImages/SUG2610/SUG2610-13.JPG",
  "vehicleImages/SUG2610/SUG2610-14.JPG",
  "vehicleImages/SUG2610/SUG2610-15.JPG",
  "vehicleImages/SUG2610/SUG2610-16.JPG",
  "vehicleImages/SUG2610/SUG2610-17.JPG",
  "vehicleImages/SUG2610/SUG2610-18.JPG",
  "vehicleImages/SUG2610/SUG2610-19.JPG",
  "vehicleImages/SUG2610/SUG2610-20.JPG",
  "vehicleImages/SUG2610/SUG2610-21.JPG",
  "vehicleImages/SUG2610/SUG2610-22.JPG",
  "vehicleImages/SUG2610/SUG2610-23.JPG",
  "vehicleImages/SUG2610/SUG2610-24.JPG",
  "vehicleImages/SUG2610/SUG2610-25.JPG",
  "vehicleImages/SUG2610/SUG2610-26.JPG",
  "vehicleImages/SUG2610/SUG2610-27.JPG",
  "vehicleImages/SUG2610/SUG2610-28.JPG",
  "vehicleImages/SUG2610/SUG2610-29.JPG",
  "vehicleImages/SUG2610/SUG2610-30.JPG",
  "vehicleImages/SUG2610/SUG2610-31.JPG",
  "vehicleImages/SUG2610/SUG2610-32.JPG",
  "vehicleImages/SUG2610/SUG2610-33.JPG",
  '2.5L 4-Cyl',
  '26 city/36 hwy',
  '4',
  'Automatic CVT',
  '17,985'
);
vehicleArray[5] = new Vehicle(
  'SUH0050',
  '2017 Subaru WRX STI',
  'Limited w/ EyeSight',
  'Crystal White',
  'specialPrice',
  'msrp',
  "vehicleImages/SUH0050/SUH0050-1.JPG",
  "vehicleImages/SUH0050/SUH0050-2.JPG",
  "vehicleImages/SUH0050/SUH0050-3.JPG",
  "vehicleImages/SUH0050/SUH0050-4.JPG",
  "vehicleImages/SUH0050/SUH0050-5.JPG",
  "vehicleImages/SUH0050/SUH0050-6.JPG",
  "vehicleImages/SUH0050/SUH0050-7.JPG",
  "vehicleImages/SUH0050/SUH0050-8.JPG",
  "vehicleImages/SUH0050/SUH0050-9.JPG",
  "vehicleImages/SUH0050/SUH0050-10.JPG",
  "vehicleImages/SUH0050/SUH0050-11.JPG",
  "vehicleImages/SUH0050/SUH0050-12.JPG",
  "vehicleImages/SUH0050/SUH0050-13.JPG",
  "vehicleImages/SUH0050/SUH0050-14.JPG",
  "vehicleImages/SUH0050/SUH0050-15.JPG",
  "vehicleImages/SUH0050/SUH0050-16.JPG",
  "vehicleImages/SUH0050/SUH0050-17.JPG",
  "vehicleImages/SUH0050/SUH0050-18.JPG",
  "vehicleImages/SUH0050/SUH0050-19.JPG",
  "vehicleImages/SUH0050/SUH0050-20.JPG",
  "vehicleImages/SUH0050/SUH0050-21.JPG",
  "vehicleImages/SUH0050/SUH0050-22.JPG",
  "vehicleImages/SUH0050/SUH0050-23.JPG",
  "vehicleImages/SUH0050/SUH0050-24.JPG",
  "vehicleImages/SUH0050/SUH0050-25.JPG",
  "vehicleImages/SUH0050/SUH0050-26.JPG",
  "vehicleImages/SUH0050/SUH0050-27.JPG",
  "vehicleImages/SUH0050/SUH0050-28.JPG",
  "vehicleImages/SUH0050/SUH0050-29.JPG",
  "vehicleImages/SUH0050/SUH0050-30.JPG",
  "vehicleImages/SUH0050/SUH0050-31.JPG",
  "vehicleImages/SUH0050/SUH0050-32.JPG",
  "vehicleImages/SUH0050/SUH0050-33.JPG",
  '2.0L DOHC',
  '18 city/24 hwy',
  '4',
  '6 Speed Manual',
  '0'
);
// vehicleArray[6] = new Vehicle(
//   'SUU2687',
//   '2013 Subaru Legacy',
//   'trim',
//   'Silver',
//   'specialPrice',
//   'used',
//   "vehicleImages/SUU2687/SUU2687-1.JPG",
//   "vehicleImages/SUU2687/SUU2687-2.JPG",
//   "vehicleImages/SUU2687/SUU2687-3.JPG",
//   "vehicleImages/SUU2687/SUU2687-4.JPG",
//   "vehicleImages/SUU2687/SUU2687-5.JPG",
//   "vehicleImages/SUU2687/SUU2687-6.JPG",
//   "vehicleImages/SUU2687/SUU2687-7.JPG",
//   "vehicleImages/SUU2687/SUU2687-8.JPG",
//   "vehicleImages/SUU2687/SUU2687-9.JPG",
//   "vehicleImages/SUU2687/SUU2687-10.JPG",
//   "vehicleImages/SUU2687/SUU2687-11.JPG",
//   "vehicleImages/SUU2687/SUU2687-12.JPG",
//   "vehicleImages/SUU2687/SUU2687-13.JPG",
//   "vehicleImages/SUU2687/SUU2687-14.JPG",
//   "vehicleImages/SUU2687/SUU2687-15.JPG",
//   "vehicleImages/SUU2687/SUU2687-16.JPG",
//   "vehicleImages/SUU2687/SUU2687-17.JPG",
//   "vehicleImages/SUU2687/SUU2687-18.JPG",
//   "vehicleImages/SUU2687/SUU2687-19.JPG",
//   "vehicleImages/SUU2687/SUU2687-20.JPG",
//   "vehicleImages/SUU2687/SUU2687-21.JPG",
//   "vehicleImages/SUU2687/SUU2687-22.JPG",
//   "vehicleImages/SUU2687/SUU2687-23.JPG",
//   "vehicleImages/SUU2687/SUU2687-24.JPG",
//   "vehicleImages/SUU2687/SUU2687-25.JPG",
//   "vehicleImages/SUU2687/SUU2687-26.JPG",
//   "vehicleImages/SUU2687/SUU2687-27.JPG",
//   "vehicleImages/SUU2687/SUU2687-28.JPG",
//   "vehicleImages/SUU2687/SUU2687-29.JPG",
//   "vehicleImages/SUU2687/SUU2687-30.JPG",
//   "vehicleImages/SUU2687/SUU2687-31.JPG",
//   "vehicleImages/SUU2687/SUU2687-32.JPG",
//   "vehicleImages/SUU2687/SUU2687-33.JPG",
//   'engine',
//   'mpg',
//   '4',
//   'Automatic CVT',
//   '61,268'
// );
var supArray = []
for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


// $('.mains').hide();

for (var j = 0; j < supArray.length; j++) {
  $('.' + supArray[j]).hide();
  $('.' + supArray[0]).show();
}



});
