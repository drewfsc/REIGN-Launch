const employeeData = [
  {"id":1,"race":"Asian","age":24,"first_name":"Cassy","last_name":"Scutts","job_title":"VP Product Management","phone":"(992) 6445912","salary":54507.35,"email":"cscutts0@walmart.com","education_level":"High School Diploma","years_experience":39,"avatar":"https://robohash.org/pariatursitex.png?size=50x50&set=set1","ssn":"256-78-8769","trade_specialty":"Concrete","union_membership":false,"address":"856 Jenna Center","work_location":"Donghai","city":"Milwaukee","state":"Wisconsin","zip":53172,"dob":"1965-09-14","wage":33.19,"gender":"Female","trade":"Millwright","company":"Skyline Builders"},
  {"id":2,"race":"Native American","age":66,"first_name":"Kare","last_name":"Sudddard","job_title":"Pharmacist","phone":"(216) 6157549","salary":84436.83,"email":"ksudddard1@craigslist.org","education_level":"Bachelor's Degree","years_experience":29,"avatar":"https://robohash.org/voluptatemaliquidanimi.png?size=50x50&set=set1","ssn":"385-92-6005","trade_specialty":"Roofer","union_membership":true,"address":"969 Mallard Alley","work_location":"Krajan Sale","city":"Franklin","state":"Wisconsin","zip":53172,"dob":"2001-05-24","wage":29.86,"gender":"Female","trade":"Waterproofer","company":"Golden Hammer Construction"},
  {"id":3,"race":"Hispanic","age":46,"first_name":"Aleta","last_name":"Hawe","job_title":"Physical Therapy Assistant","phone":"(451) 8739161","salary":57934.24,"email":"ahawe2@google.nl","education_level":"High School Diploma","years_experience":21,"avatar":"https://robohash.org/velitutquasi.png?size=50x50&set=set1","ssn":"487-29-4299","trade_specialty":"Welder","union_membership":false,"address":"398 Summit Pass","work_location":"Agbannawag","city":"Wauwatosa","state":"Wisconsin","zip":53221,"dob":"2002-04-21","wage":19.54,"gender":"Female","trade":"Safety Officer","company":"BuildWell Construction"},
  {"id":4,"race":"Hispanic","age":51,"first_name":"Adiana","last_name":"Rouzet","job_title":"Environmental Tech","phone":"(491) 6208556","salary":54232.03,"email":"arouzet3@google.co.uk","education_level":"High School Diploma","years_experience":4,"avatar":"https://robohash.org/etutut.png?size=50x50&set=set1","ssn":"584-78-6607","trade_specialty":"Electrician","union_membership":false,"address":"8621 Dayton Street","work_location":"Las Americas","city":"Franklin","state":"Wisconsin","zip":53172,"dob":"2004-10-26","wage":30.78,"gender":"Female","trade":"Concrete Finisher","company":"BuildWell Construction"},
  {"id":5,"race":"Native American","age":35,"first_name":"Tuckie","last_name":"Wintle","job_title":"Payment Adjustment Coordinator","phone":"(614) 6763580","salary":91977.3,"email":"twintle4@typepad.com","education_level":"High School Diploma","years_experience":12,"avatar":"https://robohash.org/cumaliquidharum.png?size=50x50&set=set1","ssn":"518-05-2434","trade_specialty":"Roofer","union_membership":true,"address":"728 Barnett Street","work_location":"Bauru","city":"Glendale","state":"Wisconsin","zip":53221,"dob":"1990-01-10","wage":28.0,"gender":"Male","trade":"Safety Officer","company":"BuildWell Construction"},
  {"id":6,"race":"Native American","age":58,"first_name":"Ravi","last_name":"McWaters","job_title":"Junior Executive","phone":"(357) 2007295","salary":89973.25,"email":"rmcwaters5@indiegogo.com","education_level":"Associate's Degree","years_experience":23,"avatar":"https://robohash.org/voluptatescumquequo.png?size=50x50&set=set1","ssn":"371-77-0674","trade_specialty":"Roofer","union_membership":false,"address":"91 Londonderry Street","work_location":"Ollantaytambo","city":"Franklin","state":"Wisconsin","zip":53221,"dob":"2004-02-09","wage":33.16,"gender":"Male","trade":"Plumber","company":"BuildWell Construction"},
  {"id":7,"race":"Black","age":22,"first_name":"Giacomo","last_name":"Le Noury","job_title":"VP Quality Control","phone":"(907) 3546188","salary":45850.63,"email":"glenoury6@wikia.com","education_level":"Associate's Degree","years_experience":3,"avatar":"https://robohash.org/laboriosameaquesunt.png?size=50x50&set=set1","ssn":"548-37-0307","trade_specialty":"Welder","union_membership":true,"address":"73274 Warner Terrace","work_location":"Bantul","city":"Franklin","state":"Wisconsin","zip":53227,"dob":"1961-07-14","wage":34.08,"gender":"Male","trade":"Landscaper","company":"BuildWell Construction"},
  {"id":8,"race":"White","age":37,"first_name":"Nady","last_name":"O'Breen","job_title":"Human Resources Manager","phone":"(217) 5215693","salary":82706.23,"email":"nobreen7@cmu.edu","education_level":"Associate's Degree","years_experience":38,"avatar":"https://robohash.org/ducimusasperioresqui.png?size=50x50&set=set1","ssn":"791-22-3260","trade_specialty":"Plumber","union_membership":false,"address":"8 Monument Way","work_location":"Springfield","city":"Glendale","state":"Wisconsin","zip":53221,"dob":"2001-10-16","wage":21.84,"gender":"Female","trade":"Stucco Mason","company":"Solid Foundations Builders"},
  {"id":9,"race":"Hispanic","age":66,"first_name":"Karoly","last_name":"Crisp","job_title":"Automation Specialist III","phone":"(190) 6523685","salary":91633.15,"email":"kcrisp8@go.com","education_level":"Bachelor's Degree","years_experience":0,"avatar":"https://robohash.org/consequunturvoluptatemnulla.png?size=50x50&set=set1","ssn":"120-71-9119","trade_specialty":"Roofer","union_membership":false,"address":"94673 Northridge Hill","work_location":"Jialou","city":"Wauwatosa","state":"Wisconsin","zip":53172,"dob":"1992-11-17","wage":17.06,"gender":"Male","trade":"Linemen","company":"BuildWell Construction"},
  {"id":10,"race":"Native American","age":41,"first_name":"Betti","last_name":"Gleave","job_title":"Nuclear Power Engineer","phone":"(421) 4758658","salary":99929.19,"email":"bgleave9@home.pl","education_level":"Associate's Degree","years_experience":22,"avatar":"https://robohash.org/quiarerumquibusdam.png?size=50x50&set=set1","ssn":"258-11-7803","trade_specialty":"Roofer","union_membership":true,"address":"330 Moose Point","work_location":"Azogues","city":"Greenfield","state":"Wisconsin","zip":53208,"dob":"1978-02-03","wage":18.83,"gender":"Female","trade":"Cement Mason","company":"BuildWell Construction"},
  {"id":11,"race":"Hispanic","age":35,"first_name":"Allix","last_name":"Male","job_title":"Account Coordinator","phone":"(931) 2703334","salary":54680.74,"email":"amalea@techcrunch.com","education_level":"Associate's Degree","years_experience":26,"avatar":"https://robohash.org/dolorconsequaturnihil.png?size=50x50&set=set1","ssn":"673-01-9495","trade_specialty":"Carpenter","union_membership":true,"address":"25079 Everett Pass","work_location":"Balogo","city":"South Milwaukee","state":"Wisconsin","zip":53221,"dob":"1988-08-11","wage":26.31,"gender":"Female","trade":"Brickmason","company":"Skyline Builders"},
  {"id":12,"race":"Asian","age":42,"first_name":"Clari","last_name":"Niset","job_title":"Geologist II","phone":"(252) 8563274","salary":48824.52,"email":"cnisetb@over-blog.com","education_level":"Bachelor's Degree","years_experience":20,"avatar":"https://robohash.org/utrerumrem.png?size=50x50&set=set1","ssn":"673-58-5616","trade_specialty":"Welder","union_membership":false,"address":"3570 Randy Park","work_location":"Tigil'","city":"West Allis","state":"Wisconsin","zip":53172,"dob":"1998-02-28","wage":31.75,"gender":"Female","trade":"HVAC","company":"Golden Hammer Construction"},
  {"id":13,"race":"White","age":64,"first_name":"Austine","last_name":"Hartshorne","job_title":"Assistant Media Planner","phone":"(517) 4100795","salary":53791.47,"email":"ahartshornec@shareasale.com","education_level":"Associate's Degree","years_experience":30,"avatar":"https://robohash.org/eosofficiisaperiam.png?size=50x50&set=set1","ssn":"721-34-3057","trade_specialty":"HVAC Technician","union_membership":false,"address":"8 Carpenter Center","work_location":"Khodasy","city":"Glendale","state":"Wisconsin","zip":53208,"dob":"1991-04-17","wage":24.5,"gender":"Female","trade":"Boilermaker","company":"Solid Foundations Builders"},
  {"id":14,"race":"Native American","age":52,"first_name":"Alejandro","last_name":"Gilligan","job_title":"Safety Technician II","phone":"(631) 3201869","salary":28012.23,"email":"agilligand@usatoday.com","education_level":"Bachelor's Degree","years_experience":28,"avatar":"https://robohash.org/ipsametquidem.png?size=50x50&set=set1","ssn":"704-12-3246","trade_specialty":"HVAC Technician","union_membership":true,"address":"55578 Bultman Lane","work_location":"Flandes","city":"South Milwaukee","state":"Wisconsin","zip":53208,"dob":"1975-11-18","wage":37.34,"gender":"Male","trade":"Linemen","company":"Skyline Builders"},
  {"id":15,"race":"Black","age":47,"first_name":"Evie","last_name":"Meletti","job_title":"Editor","phone":"(191) 6032817","salary":89138.09,"email":"emelettie@blogspot.com","education_level":"Bachelor's Degree","years_experience":8,"avatar":"https://robohash.org/enimvoluptatemautem.png?size=50x50&set=set1","ssn":"553-35-2498","trade_specialty":"Plumber","union_membership":true,"address":"68097 Northfield Place","work_location":"Flers","city":"West Allis","state":"Wisconsin","zip":53172,"dob":"1999-08-14","wage":35.3,"gender":"Female","trade":"Stucco Mason","company":"BuildWell Construction"},
  {"id":16,"race":"White","age":45,"first_name":"Francois","last_name":"Burney","job_title":"Media Manager IV","phone":"(803) 5473905","salary":33590.83,"email":"fburneyf@nhs.uk","education_level":"High School Diploma","years_experience":20,"avatar":"https://robohash.org/accusantiumutfuga.png?size=50x50&set=set1","ssn":"715-98-2209","trade_specialty":"Carpenter","union_membership":false,"address":"03829 Hallows Terrace","work_location":"Bontang Baru","city":"Glendale","state":"Wisconsin","zip":53221,"dob":"1975-01-29","wage":35.97,"gender":"Male","trade":"Boilermaker","company":"BuildWell Construction"},
  {"id":17,"race":"Native American","age":59,"first_name":"Martita","last_name":"Cramp","job_title":"Legal Assistant","phone":"(749) 8809991","salary":58179.54,"email":"mcrampg@360.cn","education_level":"Bachelor's Degree","years_experience":11,"avatar":"https://robohash.org/eadelenitiin.png?size=50x50&set=set1","ssn":"114-42-9054","trade_specialty":"Plumber","union_membership":true,"address":"2982 Mitchell Park","work_location":"Huangpo","city":"Greenfield","state":"Wisconsin","zip":53221,"dob":"1961-09-18","wage":30.25,"gender":"Female","trade":"Boilermaker","company":"Golden Hammer Construction"},
  {"id":18,"race":"Native American","age":48,"first_name":"Keelby","last_name":"Crichmere","job_title":"Internal Auditor","phone":"(606) 5457806","salary":41593.92,"email":"kcrichmereh@biglobe.ne.jp","education_level":"Bachelor's Degree","years_experience":16,"avatar":"https://robohash.org/etmolestiaset.png?size=50x50&set=set1","ssn":"719-62-1011","trade_specialty":"Welder","union_membership":false,"address":"5033 Boyd Crossing","work_location":"Zhiryatino","city":"Greenfield","state":"Wisconsin","zip":53172,"dob":"2000-07-16","wage":35.33,"gender":"Male","trade":"Linemen","company":"Solid Foundations Builders"},
  {"id":19,"race":"Black","age":64,"first_name":"Obed","last_name":"Beesley","job_title":"Legal Assistant","phone":"(369) 2972118","salary":65761.6,"email":"obeesleyi@army.mil","education_level":"High School Diploma","years_experience":0,"avatar":"https://robohash.org/rerumvelest.png?size=50x50&set=set1","ssn":"328-85-8231","trade_specialty":"Carpenter","union_membership":false,"address":"7 Saint Paul Drive","work_location":"Tunguang","city":"Franklin","state":"Wisconsin","zip":53172,"dob":"1966-09-27","wage":24.55,"gender":"Male","trade":"Welder","company":"Golden Hammer Construction"},
  {"id":20,"race":"Black","age":50,"first_name":"Carol-jean","last_name":"Duplain","job_title":"Social Worker","phone":"(468) 9182820","salary":75866.73,"email":"cduplainj@51.la","education_level":"High School Diploma","years_experience":21,"avatar":"https://robohash.org/dictahicut.png?size=50x50&set=set1","ssn":"265-18-2317","trade_specialty":"HVAC Technician","union_membership":false,"address":"2 Oneill Plaza","work_location":"Sarilhos Grandes","city":"Greenfield","state":"Wisconsin","zip":53221,"dob":"2003-06-26","wage":26.35,"gender":"Female","trade":"Pipelayer","company":"BuildWell Construction"},
  {"id":21,"race":"Asian","age":42,"first_name":"Vinita","last_name":"Aphale","job_title":"Speech Pathologist","phone":"(526) 5645447","salary":92143.38,"email":"vaphalek@google.com.hk","education_level":"Associate's Degree","years_experience":34,"avatar":"https://robohash.org/exautet.png?size=50x50&set=set1","ssn":"853-42-9033","trade_specialty":"Concrete","union_membership":true,"address":"82 Debra Pass","work_location":"Barurao","city":"South Milwaukee","state":"Wisconsin","zip":53172,"dob":"1991-06-19","wage":17.99,"gender":"Female","trade":"Linemen","company":"Skyline Builders"},
  {"id":22,"race":"Hispanic","age":21,"first_name":"Reggie","last_name":"Janew","job_title":"Administrative Assistant III","phone":"(314) 4863653","salary":43541.2,"email":"rjanewl@t.co","education_level":"Bachelor's Degree","years_experience":17,"avatar":"https://robohash.org/temporaistecorrupti.png?size=50x50&set=set1","ssn":"338-26-0549","trade_specialty":"Plumber","union_membership":true,"address":"8 Fisk Street","work_location":"Saint Louis","city":"Franklin","state":"Wisconsin","zip":53172,"dob":"1972-03-29","wage":21.26,"gender":"Male","trade":"Refridgeration","company":"BuildWell Construction"},
  {"id":23,"race":"Hispanic","age":18,"first_name":"Collete","last_name":"Scaysbrook","job_title":"Research Assistant III","phone":"(296) 8832171","salary":38517.84,"email":"cscaysbrookm@technorati.com","education_level":"High School Diploma","years_experience":23,"avatar":"https://robohash.org/rerumexconsequatur.png?size=50x50&set=set1","ssn":"456-85-5339","trade_specialty":"Carpenter","union_membership":true,"address":"2309 Luster Place","work_location":"Uacon","city":"West Allis","state":"Wisconsin","zip":53172,"dob":"1966-05-19","wage":28.88,"gender":"Female","trade":"Plasterers","company":"BuildWell Construction"},
  {"id":24,"race":"Asian","age":62,"first_name":"Allx","last_name":"Digan","job_title":"Graphic Designer","phone":"(745) 6037703","salary":60654.23,"email":"adigann@behance.net","education_level":"High School Diploma","years_experience":14,"avatar":"https://robohash.org/essevelitqui.png?size=50x50&set=set1","ssn":"697-91-7029","trade_specialty":"Carpenter","union_membership":false,"address":"97401 Derek Way","work_location":"Shiyaogou","city":"Franklin","state":"Wisconsin","zip":53172,"dob":"1967-07-17","wage":36.22,"gender":"Female","trade":"Terrazzo","company":"Skyline Builders"},
  {"id":25,"race":"Hispanic","age":37,"first_name":"Alphonse","last_name":"Kupker","job_title":"Developer IV","phone":"(557) 9701275","salary":78058.14,"email":"akupkero@weibo.com","education_level":"Associate's Degree","years_experience":7,"avatar":"https://robohash.org/sitassumendaeum.png?size=50x50&set=set1","ssn":"156-13-0516","trade_specialty":"Concrete","union_membership":false,"address":"83 Hagan Trail","work_location":"Eira da Pedra","city":"Milwaukee","state":"Wisconsin","zip":53172,"dob":"1979-02-15","wage":33.83,"gender":"Male","trade":"Laborer","company":"Skyline Builders"},
  {"id":26,"race":"Black","age":39,"first_name":"Daryle","last_name":"Clute","job_title":"Database Administrator III","phone":"(881) 3007224","salary":41101.04,"email":"dclutep@wufoo.com","education_level":"High School Diploma","years_experience":3,"avatar":"https://robohash.org/quiamaiorestotam.png?size=50x50&set=set1","ssn":"627-99-8428","trade_specialty":"Roofer","union_membership":false,"address":"9 Montana Parkway","work_location":"Naberera","city":"Milwaukee","state":"Wisconsin","zip":53227,"dob":"1986-02-26","wage":32.41,"gender":"Male","trade":"Boilermaker","company":"Solid Foundations Builders"},
  {"id":27,"race":"Black","age":47,"first_name":"Dukie","last_name":"Stollenberg","job_title":"Recruiting Manager","phone":"(609) 8968579","salary":46292.14,"email":"dstollenbergq@bbc.co.uk","education_level":"High School Diploma","years_experience":3,"avatar":"https://robohash.org/utmodiveritatis.png?size=50x50&set=set1","ssn":"884-05-4631","trade_specialty":"HVAC Technician","union_membership":false,"address":"46572 Northfield Court","work_location":"Karuri","city":"Wauwatosa","state":"Wisconsin","zip":53208,"dob":"2002-07-26","wage":24.41,"gender":"Male","trade":"Terrazzo","company":"Solid Foundations Builders"},
  {"id":28,"race":"Hispanic","age":60,"first_name":"Leigh","last_name":"Itscovitz","job_title":"Chemical Engineer","phone":"(849) 7533853","salary":67575.3,"email":"litscovitzr@cmu.edu","education_level":"Bachelor's Degree","years_experience":4,"avatar":"https://robohash.org/cumtemporibuscumque.png?size=50x50&set=set1","ssn":"494-51-1970","trade_specialty":"HVAC Technician","union_membership":true,"address":"7 Hermina Point","work_location":"Stockholm","city":"South Milwaukee","state":"Wisconsin","zip":53227,"dob":"1986-07-22","wage":20.08,"gender":"Male","trade":"Laborer","company":"Solid Foundations Builders"},
  {"id":29,"race":"Hispanic","age":69,"first_name":"Elisabet","last_name":"Coppo","job_title":"Occupational Therapist","phone":"(513) 6573279","salary":94569.08,"email":"ecoppos@scribd.com","education_level":"High School Diploma","years_experience":20,"avatar":"https://robohash.org/sintevenietid.png?size=50x50&set=set1","ssn":"863-58-2804","trade_specialty":"HVAC Technician","union_membership":false,"address":"79920 Susan Lane","work_location":"Quimilí","city":"Greenfield","state":"Wisconsin","zip":53227,"dob":"1996-01-09","wage":21.82,"gender":"Female","trade":"Electrician","company":"Golden Hammer Construction"},
  {"id":30,"race":"Native American","age":55,"first_name":"Florencia","last_name":"Wiles","job_title":"Compensation Analyst","phone":"(628) 1364448","salary":54660.12,"email":"fwilest@upenn.edu","education_level":"High School Diploma","years_experience":22,"avatar":"https://robohash.org/delectusutvoluptates.png?size=50x50&set=set1","ssn":"676-58-3548","trade_specialty":"Plumber","union_membership":true,"address":"608 Bobwhite Alley","work_location":"Junchuan","city":"West Allis","state":"Wisconsin","zip":53227,"dob":"1983-07-19","wage":25.89,"gender":"Female","trade":"HVAC","company":"Golden Hammer Construction"},
  {"id":31,"race":"Hispanic","age":62,"first_name":"Tobit","last_name":"Mighele","job_title":"Business Systems Development Analyst","phone":"(371) 3304108","salary":98345.42,"email":"tmigheleu@chicagotribune.com","education_level":"High School Diploma","years_experience":1,"avatar":"https://robohash.org/liberosedrem.png?size=50x50&set=set1","ssn":"571-12-9964","trade_specialty":"Carpenter","union_membership":true,"address":"7 Magdeline Avenue","work_location":"Wuling","city":"Franklin","state":"Wisconsin","zip":53208,"dob":"1973-06-22","wage":38.6,"gender":"Male","trade":"Laborer","company":"Solid Foundations Builders"},
  {"id":32,"race":"Hispanic","age":63,"first_name":"Guenevere","last_name":"Mc Combe","job_title":"Geologist II","phone":"(192) 5979407","salary":65962.32,"email":"gmccombev@seattletimes.com","education_level":"High School Diploma","years_experience":10,"avatar":"https://robohash.org/perferendisveldolor.png?size=50x50&set=set1","ssn":"379-73-9677","trade_specialty":"Carpenter","union_membership":true,"address":"502 Fuller Terrace","work_location":"Kerċem","city":"Franklin","state":"Wisconsin","zip":53208,"dob":"1987-04-16","wage":27.34,"gender":"Female","trade":"Ironworker","company":"Skyline Builders"},
  {"id":33,"race":"Black","age":44,"first_name":"Halli","last_name":"Pawelski","job_title":"Information Systems Manager","phone":"(828) 2761256","salary":29584.2,"email":"hpawelskiw@cocolog-nifty.com","education_level":"High School Diploma","years_experience":4,"avatar":"https://robohash.org/cupiditatemaioreseligendi.png?size=50x50&set=set1","ssn":"740-26-5930","trade_specialty":"Carpenter","union_membership":false,"address":"1271 Arapahoe Junction","work_location":"Guanban","city":"West Allis","state":"Wisconsin","zip":53208,"dob":"1961-06-26","wage":38.54,"gender":"Female","trade":"Pipelayer","company":"BuildWell Construction"},
  {"id":34,"race":"Asian","age":52,"first_name":"Eloisa","last_name":"Ayto","job_title":"Technical Writer","phone":"(230) 6620584","salary":57375.5,"email":"eaytox@si.edu","education_level":"Bachelor's Degree","years_experience":40,"avatar":"https://robohash.org/explicabofacerecumque.png?size=50x50&set=set1","ssn":"471-49-8475","trade_specialty":"Plumber","union_membership":true,"address":"4 Memorial Road","work_location":"Bajomulyo","city":"Greenfield","state":"Wisconsin","zip":53208,"dob":"1993-10-04","wage":23.08,"gender":"Female","trade":"Carpenter","company":"BuildWell Construction"},
  {"id":35,"race":"Black","age":47,"first_name":"Sax","last_name":"Kenealy","job_title":"Help Desk Technician","phone":"(253) 8337333","salary":75215.06,"email":"skenealyy@imdb.com","education_level":"High School Diploma","years_experience":28,"avatar":"https://robohash.org/nihilabquibusdam.png?size=50x50&set=set1","ssn":"393-88-5054","trade_specialty":"Carpenter","union_membership":false,"address":"7409 Basil Circle","work_location":"Seattle","city":"West Allis","state":"Wisconsin","zip":53221,"dob":"1977-05-09","wage":22.67,"gender":"Male","trade":"Concrete Finisher","company":"Solid Foundations Builders"},
  {"id":36,"race":"Black","age":48,"first_name":"Lenard","last_name":"Sustins","job_title":"Web Designer I","phone":"(560) 8741877","salary":98461.66,"email":"lsustinsz@apple.com","education_level":"High School Diploma","years_experience":18,"avatar":"https://robohash.org/maioresrerumet.png?size=50x50&set=set1","ssn":"719-65-3599","trade_specialty":"Roofer","union_membership":true,"address":"33031 Carberry Drive","work_location":"Göteborg","city":"Glendale","state":"Wisconsin","zip":53221,"dob":"2004-05-10","wage":21.92,"gender":"Male","trade":"Pipelayer","company":"Solid Foundations Builders"},
  {"id":37,"race":"White","age":21,"first_name":"Lek","last_name":"Finden","job_title":"Software Engineer II","phone":"(867) 6578191","salary":61456.97,"email":"lfinden10@nature.com","education_level":"Associate's Degree","years_experience":29,"avatar":"https://robohash.org/similiquerepudiandaetemporibus.png?size=50x50&set=set1","ssn":"245-08-7838","trade_specialty":"Welder","union_membership":false,"address":"5850 Crescent Oaks Hill","work_location":"Évreux","city":"Greenfield","state":"Wisconsin","zip":53227,"dob":"1978-02-06","wage":32.18,"gender":"Male","trade":"Painter","company":"Skyline Builders"},
  {"id":38,"race":"Black","age":65,"first_name":"Krista","last_name":"Sydney","job_title":"Senior Quality Engineer","phone":"(213) 8287023","salary":85469.63,"email":"ksydney11@tiny.cc","education_level":"High School Diploma","years_experience":37,"avatar":"https://robohash.org/voluptatesnecessitatibusnulla.png?size=50x50&set=set1","ssn":"680-61-3158","trade_specialty":"Concrete","union_membership":true,"address":"2121 Londonderry Crossing","work_location":"Rautjärvi","city":"South Milwaukee","state":"Wisconsin","zip":53172,"dob":"1971-03-28","wage":22.17,"gender":"Female","trade":"Carpenter","company":"BuildWell Construction"},
  {"id":39,"race":"Hispanic","age":39,"first_name":"Tiffy","last_name":"Collett","job_title":"Clinical Specialist","phone":"(465) 4344147","salary":59696.42,"email":"tcollett12@is.gd","education_level":"Associate's Degree","years_experience":9,"avatar":"https://robohash.org/illoveniamaccusantium.png?size=50x50&set=set1","ssn":"713-67-3001","trade_specialty":"HVAC Technician","union_membership":false,"address":"8 Warbler Street","work_location":"Lieqiao","city":"Greenfield","state":"Wisconsin","zip":53208,"dob":"1966-06-24","wage":17.93,"gender":"Female","trade":"Refridgeration","company":"BuildWell Construction"},
  {"id":40,"race":"Asian","age":66,"first_name":"Paula","last_name":"Peasegod","job_title":"Human Resources Manager","phone":"(177) 5154432","salary":41603.77,"email":"ppeasegod13@gravatar.com","education_level":"Bachelor's Degree","years_experience":2,"avatar":"https://robohash.org/utnullarerum.png?size=50x50&set=set1","ssn":"348-70-5717","trade_specialty":"Concrete","union_membership":false,"address":"1851 Northland Drive","work_location":"Gexi","city":"Greenfield","state":"Wisconsin","zip":53172,"dob":"1989-12-28","wage":26.02,"gender":"Female","trade":"HVAC","company":"Solid Foundations Builders"},
  {"id":41,"race":"Asian","age":28,"first_name":"Merci","last_name":"MacKellen","job_title":"Chief Design Engineer","phone":"(861) 3829692","salary":34409.42,"email":"mmackellen14@t-online.de","education_level":"Associate's Degree","years_experience":31,"avatar":"https://robohash.org/etrecusandaecorrupti.png?size=50x50&set=set1","ssn":"496-26-0905","trade_specialty":"Plumber","union_membership":false,"address":"3 Graceland Circle","work_location":"Jiangkou","city":"South Milwaukee","state":"Wisconsin","zip":53227,"dob":"1981-05-01","wage":19.48,"gender":"Female","trade":"Pipelayer","company":"Solid Foundations Builders"},
  {"id":42,"race":"Hispanic","age":62,"first_name":"Dee","last_name":"Bealton","job_title":"Senior Editor","phone":"(197) 5730611","salary":81309.46,"email":"dbealton15@slashdot.org","education_level":"Bachelor's Degree","years_experience":35,"avatar":"https://robohash.org/nihilillodolor.png?size=50x50&set=set1","ssn":"743-70-7527","trade_specialty":"HVAC Technician","union_membership":false,"address":"9 Vera Crossing","work_location":"Candelaria","city":"Franklin","state":"Wisconsin","zip":53221,"dob":"1989-08-15","wage":36.49,"gender":"Female","trade":"Glazier","company":"Skyline Builders"},
  {"id":43,"race":"Black","age":19,"first_name":"Derk","last_name":"Fenlon","job_title":"Structural Analysis Engineer","phone":"(381) 5024338","salary":83791.08,"email":"dfenlon16@mail.ru","education_level":"High School Diploma","years_experience":30,"avatar":"https://robohash.org/nonillumest.png?size=50x50&set=set1","ssn":"882-12-0959","trade_specialty":"Roofer","union_membership":false,"address":"88488 Cherokee Avenue","work_location":"Ad Dabbah","city":"Greenfield","state":"Wisconsin","zip":53172,"dob":"1979-05-02","wage":33.45,"gender":"Male","trade":"Carpenter","company":"BuildWell Construction"},
  {"id":44,"race":"Asian","age":52,"first_name":"Sayers","last_name":"Fawdry","job_title":"Dental Hygienist","phone":"(763) 4754312","salary":29758.42,"email":"sfawdry17@arizona.edu","education_level":"Associate's Degree","years_experience":2,"avatar":"https://robohash.org/repellatvelitharum.png?size=50x50&set=set1","ssn":"349-25-7442","trade_specialty":"Plumber","union_membership":true,"address":"883 Hoard Circle","work_location":"Wakapuken","city":"Franklin","state":"Wisconsin","zip":53172,"dob":"1999-12-01","wage":34.79,"gender":"Male","trade":"Glazier","company":"Solid Foundations Builders"},
  {"id":45,"race":"Asian","age":29,"first_name":"Francisca","last_name":"Woodson","job_title":"Geological Engineer","phone":"(178) 2235826","salary":60369.05,"email":"fwoodson18@squidoo.com","education_level":"Bachelor's Degree","years_experience":23,"avatar":"https://robohash.org/rerumdignissimosaut.png?size=50x50&set=set1","ssn":"885-59-2071","trade_specialty":"HVAC Technician","union_membership":false,"address":"65246 Hudson Place","work_location":"Shikārpur","city":"Wauwatosa","state":"Wisconsin","zip":53208,"dob":"1993-02-26","wage":37.98,"gender":"Female","trade":"Equipment Operator","company":"Skyline Builders"},
  {"id":46,"race":"Hispanic","age":47,"first_name":"Eustace","last_name":"Condell","job_title":"Actuary","phone":"(152) 2858032","salary":70706.73,"email":"econdell19@harvard.edu","education_level":"High School Diploma","years_experience":21,"avatar":"https://robohash.org/providentvoluptasiusto.png?size=50x50&set=set1","ssn":"433-53-9108","trade_specialty":"Carpenter","union_membership":true,"address":"344 Talisman Place","work_location":"Matozinhos","city":"Wauwatosa","state":"Wisconsin","zip":53227,"dob":"1999-12-07","wage":18.51,"gender":"Male","trade":"HVAC","company":"BuildWell Construction"},
  {"id":47,"race":"Black","age":70,"first_name":"Ericka","last_name":"Gribbon","job_title":"Web Developer III","phone":"(141) 5646343","salary":32321.35,"email":"egribbon1a@wikimedia.org","education_level":"High School Diploma","years_experience":40,"avatar":"https://robohash.org/aliquamcorruptiillo.png?size=50x50&set=set1","ssn":"743-28-7878","trade_specialty":"HVAC Technician","union_membership":false,"address":"4 Buell Way","work_location":"Huangliang","city":"Greenfield","state":"Wisconsin","zip":53221,"dob":"1989-11-04","wage":30.83,"gender":"Female","trade":"Linemen","company":"Skyline Builders"},
  {"id":48,"race":"Native American","age":21,"first_name":"Claiborn","last_name":"Shailer","job_title":"VP Sales","phone":"(640) 6201118","salary":41218.74,"email":"cshailer1b@craigslist.org","education_level":"Bachelor's Degree","years_experience":17,"avatar":"https://robohash.org/noneaqui.png?size=50x50&set=set1","ssn":"221-80-0962","trade_specialty":"Welder","union_membership":false,"address":"9 Union Way","work_location":"Villejuif","city":"Glendale","state":"Wisconsin","zip":53221,"dob":"1996-10-25","wage":30.99,"gender":"Male","trade":"Brickmason","company":"Skyline Builders"},
  {"id":49,"race":"Hispanic","age":21,"first_name":"Rory","last_name":"Benardeau","job_title":"Web Developer IV","phone":"(886) 6752201","salary":74080.2,"email":"rbenardeau1c@comsenz.com","education_level":"High School Diploma","years_experience":18,"avatar":"https://robohash.org/exaccusantiumhic.png?size=50x50&set=set1","ssn":"785-92-8079","trade_specialty":"HVAC Technician","union_membership":false,"address":"004 Loftsgordon Avenue","work_location":"Sungai Raya","city":"Milwaukee","state":"Wisconsin","zip":53227,"dob":"1986-11-10","wage":32.84,"gender":"Male","trade":"Welder","company":"BuildWell Construction"},
  {"id":50,"race":"Asian","age":44,"first_name":"Cortie","last_name":"Fynes","job_title":"Office Assistant I","phone":"(305) 1482908","salary":37786.55,"email":"cfynes1d@ning.com","education_level":"High School Diploma","years_experience":0,"avatar":"https://robohash.org/ipsumquaeratomnis.png?size=50x50&set=set1","ssn":"497-13-4372","trade_specialty":"Welder","union_membership":false,"address":"8 Fieldstone Court","work_location":"Karangora","city":"Franklin","state":"Wisconsin","zip":53227,"dob":"1984-04-04","wage":24.18,"gender":"Male","trade":"Ironworker","company":"Solid Foundations Builders"},
  {"id":51,"race":"Asian","age":51,"first_name":"Isador","last_name":"Jouaneton","job_title":"Research Nurse","phone":"(415) 6471461","salary":86565.94,"email":"ijouaneton1e@discovery.com","education_level":"High School Diploma","years_experience":27,"avatar":"https://robohash.org/dolorumautdolores.png?size=50x50&set=set1","ssn":"306-31-1539","trade_specialty":"Plumber","union_membership":true,"address":"08 Kennedy Street","work_location":"San Vicente de Moravia","city":"Franklin","state":"Wisconsin","zip":53221,"dob":"1998-03-05","wage":25.48,"gender":"Male","trade":"HVAC","company":"Skyline Builders"},
  {"id":52,"race":"Black","age":28,"first_name":"Lisa","last_name":"O'Ruane","job_title":"Teacher","phone":"(888) 2803630","salary":78984.86,"email":"loruane1f@goo.gl","education_level":"High School Diploma","years_experience":13,"avatar":"https://robohash.org/omniscorruptiminus.png?size=50x50&set=set1","ssn":"895-26-9648","trade_specialty":"Plumber","union_membership":false,"address":"534 Dakota Trail","work_location":"Bogorejo","city":"Greenfield","state":"Wisconsin","zip":53227,"dob":"1996-09-30","wage":20.61,"gender":"Female","trade":"Painter","company":"Skyline Builders"},
  {"id":53,"race":"Asian","age":26,"first_name":"Ursa","last_name":"Comerford","job_title":"Project Manager","phone":"(864) 1387640","salary":57738.88,"email":"ucomerford1g@ask.com","education_level":"High School Diploma","years_experience":38,"avatar":"https://robohash.org/quasconsequaturut.png?size=50x50&set=set1","ssn":"776-62-3765","trade_specialty":"Welder","union_membership":false,"address":"094 Lillian Alley","work_location":"Xichuan","city":"Wauwatosa","state":"Wisconsin","zip":53221,"dob":"2001-10-21","wage":17.59,"gender":"Female","trade":"Linemen","company":"Solid Foundations Builders"},
  {"id":54,"race":"Hispanic","age":43,"first_name":"Onofredo","last_name":"Kwietek","job_title":"Junior Executive","phone":"(915) 2160064","salary":53946.63,"email":"okwietek1h@list-manage.com","education_level":"High School Diploma","years_experience":32,"avatar":"https://robohash.org/dolorumatquerem.png?size=50x50&set=set1","ssn":"873-61-9501","trade_specialty":"Roofer","union_membership":false,"address":"55564 Basil Center","work_location":"Chemodanovka","city":"Wauwatosa","state":"Wisconsin","zip":53221,"dob":"2004-09-27","wage":22.79,"gender":"Male","trade":"Brickmason","company":"Golden Hammer Construction"},
  {"id":55,"race":"White","age":27,"first_name":"Sisely","last_name":"Debney","job_title":"Project Manager","phone":"(373) 3821009","salary":35884.66,"email":"sdebney1i@yolasite.com","education_level":"Associate's Degree","years_experience":12,"avatar":"https://robohash.org/repudiandaealiquidet.png?size=50x50&set=set1","ssn":"280-99-1093","trade_specialty":"Plumber","union_membership":true,"address":"72 Dennis Circle","work_location":"Kasreman","city":"Glendale","state":"Wisconsin","zip":53172,"dob":"1993-07-04","wage":22.61,"gender":"Female","trade":"Welder","company":"BuildWell Construction"},
  {"id":56,"race":"Asian","age":69,"first_name":"Aubrette","last_name":"Stannus","job_title":"Analog Circuit Design manager","phone":"(312) 4382674","salary":78003.51,"email":"astannus1j@biblegateway.com","education_level":"Associate's Degree","years_experience":24,"avatar":"https://robohash.org/suntpariaturrerum.png?size=50x50&set=set1","ssn":"770-34-3419","trade_specialty":"Concrete","union_membership":false,"address":"6400 Spaight Lane","work_location":"Saint-Marcellin","city":"Milwaukee","state":"Wisconsin","zip":53172,"dob":"1969-03-29","wage":32.58,"gender":"Female","trade":"Landscaper","company":"Solid Foundations Builders"},
  {"id":57,"race":"White","age":23,"first_name":"Bella","last_name":"Pagon","job_title":"Software Engineer IV","phone":"(497) 9861505","salary":97039.51,"email":"bpagon1k@washingtonpost.com","education_level":"Bachelor's Degree","years_experience":6,"avatar":"https://robohash.org/inventoreliberoducimus.png?size=50x50&set=set1","ssn":"662-84-4895","trade_specialty":"HVAC Technician","union_membership":true,"address":"9 Cambridge Trail","work_location":"Khlong Luang","city":"Glendale","state":"Wisconsin","zip":53172,"dob":"1982-01-21","wage":19.01,"gender":"Female","trade":"Laborer","company":"BuildWell Construction"},
  {"id":58,"race":"Asian","age":40,"first_name":"Cass","last_name":"Degli Antoni","job_title":"Community Outreach Specialist","phone":"(832) 2898038","salary":42795.71,"email":"cdegliantoni1l@photobucket.com","education_level":"Bachelor's Degree","years_experience":7,"avatar":"https://robohash.org/eosutexpedita.png?size=50x50&set=set1","ssn":"736-03-4983","trade_specialty":"Welder","union_membership":true,"address":"00 Bowman Terrace","work_location":"Sedlčany","city":"Glendale","state":"Wisconsin","zip":53221,"dob":"2002-09-06","wage":25.45,"gender":"Male","trade":"Boilermaker","company":"Skyline Builders"},
  {"id":59,"race":"Native American","age":35,"first_name":"Aeriell","last_name":"Sleany","job_title":"General Manager","phone":"(616) 6188161","salary":73652.96,"email":"asleany1m@123-reg.co.uk","education_level":"Associate's Degree","years_experience":9,"avatar":"https://robohash.org/ipsamquasiquis.png?size=50x50&set=set1","ssn":"654-53-9651","trade_specialty":"Plumber","union_membership":true,"address":"65168 Dapin Plaza","work_location":"Daba","city":"Glendale","state":"Wisconsin","zip":53227,"dob":"1996-05-29","wage":23.75,"gender":"Female","trade":"HVAC","company":"Skyline Builders"},
  {"id":60,"race":"White","age":45,"first_name":"Danila","last_name":"MacCleay","job_title":"Senior Developer","phone":"(176) 5342649","salary":27650.23,"email":"dmaccleay1n@nature.com","education_level":"Bachelor's Degree","years_experience":20,"avatar":"https://robohash.org/essehicunde.png?size=50x50&set=set1","ssn":"698-93-0252","trade_specialty":"HVAC Technician","union_membership":true,"address":"3433 Dexter Alley","work_location":"Nyapar","city":"Greenfield","state":"Wisconsin","zip":53172,"dob":"1961-02-26","wage":18.38,"gender":"Female","trade":"Equipment Operator","company":"Skyline Builders"},
  {"id":61,"race":"White","age":27,"first_name":"Bobine","last_name":"Gibbin","job_title":"Nuclear Power Engineer","phone":"(475) 5883241","salary":85998.76,"email":"bgibbin1o@ftc.gov","education_level":"Bachelor's Degree","years_experience":23,"avatar":"https://robohash.org/eligendiestfugiat.png?size=50x50&set=set1","ssn":"168-27-8118","trade_specialty":"Electrician","union_membership":true,"address":"8106 Loftsgordon Road","work_location":"Salamrejo","city":"Glendale","state":"Wisconsin","zip":53227,"dob":"1984-12-31","wage":20.74,"gender":"Female","trade":"Tile Setter","company":"Solid Foundations Builders"},
  {"id":62,"race":"Hispanic","age":43,"first_name":"Hobie","last_name":"Odom","job_title":"Software Consultant","phone":"(952) 8258541","salary":29046.31,"email":"hodom1p@apache.org","education_level":"Associate's Degree","years_experience":11,"avatar":"https://robohash.org/dolorestea.png?size=50x50&set=set1","ssn":"775-13-3707","trade_specialty":"Roofer","union_membership":false,"address":"22 Tennyson Junction","work_location":"Tococ East","city":"Greenfield","state":"Wisconsin","zip":53227,"dob":"2001-11-12","wage":36.12,"gender":"Male","trade":"Concrete Finisher","company":"Solid Foundations Builders"},
  {"id":63,"race":"Native American","age":47,"first_name":"Annabela","last_name":"Petera","job_title":"Actuary","phone":"(323) 8042704","salary":30318.22,"email":"apetera1q@nps.gov","education_level":"Bachelor's Degree","years_experience":10,"avatar":"https://robohash.org/eosdictabeatae.png?size=50x50&set=set1","ssn":"703-34-7354","trade_specialty":"Carpenter","union_membership":true,"address":"9 Reindahl Alley","work_location":"Bella Vista","city":"Milwaukee","state":"Wisconsin","zip":53221,"dob":"1997-02-07","wage":27.22,"gender":"Female","trade":"Pipelayer","company":"BuildWell Construction"},
  {"id":64,"race":"Native American","age":20,"first_name":"Fleur","last_name":"Flatte","job_title":"Research Assistant II","phone":"(640) 7982164","salary":67336.12,"email":"fflatte1r@eventbrite.com","education_level":"High School Diploma","years_experience":8,"avatar":"https://robohash.org/temporenonaut.png?size=50x50&set=set1","ssn":"512-33-8598","trade_specialty":"Concrete","union_membership":true,"address":"8 Algoma Street","work_location":"Helsingborg","city":"Franklin","state":"Wisconsin","zip":53208,"dob":"1969-11-25","wage":34.25,"gender":"Female","trade":"Tile Setter","company":"BuildWell Construction"}
];

export default employeeData;