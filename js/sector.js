var videoSrcArr = new Array("Sector","Accountancy and Finance","Administration","Architecture","Aviation","Automotive","Banking, Insurance and Investment ","Business, Management and Consulting","Call Centers","Cosmetics and Beauty","Counselling","Charity and Voluntary Work","Creative Arts and Design","Credit Services","Construction and Building Services","Consumer goods and FMCG","Domestic Services","Distribution, Logistics and Supply Chain","Energy and Utilities","Engineering and Manufacturing","Environment and Agriculture","Healthcare and Pharmaceuticals","Hospitality and Events Management","IT and Technology","Institutions and Government Administration","Law","Start Up","Security","Leisure, Travel and Sport","Tourism","Marketing, Advertising and PR","Media, Journalism and Publishing","Music and Entertainment","Property","Public Services ","Recruitment and HR","Retail and Merchandising","Science and Research","Education","Transport","Trade and Sales","Telecommunications"),

    selectEl = document.getElementById('sector');


for(var i = 0; i < videoSrcArr.length; i++){
    selectEl.options.add(new Option(videoSrcArr[i], videoSrcArr[i]));
}
function selectSector() {
    var mylist = document.getElementById("sector");
    document.getElementById("phone-sector").value = mylist.options[mylist.selectedIndex].text;
    document.getElementById("phone-sector2").value = mylist.options[mylist.selectedIndex].text;
}
