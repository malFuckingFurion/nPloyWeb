var videoSrcArrr = new Array("Sector","Accountancy and Finance","Administration","Architecture","Aviation","Automotive","Banking, Insurance and Investment ","Business, Management and Consulting","Call Centers","Cosmetics and Beauty","Counselling","Charity and Voluntary Work","Creative Arts and Design","Credit Services","Construction and Building Services","Consumer goods and FMCG","Domestic Services","Distribution, Logistics and Supply Chain","Energy and Utilities","Engineering and Manufacturing","Environment and Agriculture","Healthcare and Pharmaceuticals","Hospitality and Events Management","IT and Technology","Institutions and Government Administration","Law","Start Up","Security","Leisure, Travel and Sport","Tourism","Marketing, Advertising and PR","Media, Journalism and Publishing","Music and Entertainment","Property","Public Services ","Recruitment and HR","Retail and Merchandising","Science and Research","Education","Transport","Trade and Sales","Telecommunications"),

    selectEl = document.getElementById('tags_1');


for(var i = 0; i < videoSrcArrr.length; i++){
    selectEl.options.add(new Option(videoSrcArrr[i], videoSrcArrr[i]));
}
function selectSkills() {
    var mylist = document.getElementById("tags_1");
    document.getElementById("phone-skills").value = mylist.options[mylist.selectedIndex].text;
    document.getElementById("phone-skills2").value = mylist.options[mylist.selectedIndex].text;
}
