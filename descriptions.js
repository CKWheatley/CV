$(document).ready(() => {
    function data_empty(){
        var boxes = [$('#square1'), $('#square2'), $('#square3'), $('#square4'), $('#square5'), $('#card1'), $('#card2'), $('#card3'),]
        for(i in boxes){
            if(boxes[i].children().is(':empty')){
                boxes[i].addClass('hidden')
            }else{
                boxes[i].removeClass('hidden')
            }
        }
    }
    
    var months_worked = daysdifference('04/04/2022', new Date());  
        // Add two dates to two variables     
    $("#currentjob").html(`${months_worked} Months`)
    function daysdifference(start_date, end_date){  
        var startDay = new Date(start_date);  
        var endDay = new Date(end_date);  
  
        // Determine the time difference between two dates     
        var msBetween = startDay.getTime() - endDay.getTime();  
  
        // Determine the number of days between two dates  
        // 1000ms * 3600 minutes * 24 hours * 30 days
        var months = msBetween / (1000 * 3600 * 24 * 30.438);  

        // Show the final number of days between dates     
        return Math.round(Math.abs(months));  
    }  
    // add this to how long i have been programming for

        let prm = {
            company: `Premier LPG`,
            location: `Chesterfield`,
            date: `April 2022 - Today`,
            jobtitle: `Internal/Customer Support Administrator`,
            department: `Customer Experience & Resolutions`,
            desc1: `PREMIER LPG - Signing/Sending/Receiving Contracts<BR><BR>
            PREMIER LPG - Quoting Customers (Retentions and new)<BR><BR>
            PREMIER LPG - Placing Orders for deliveries<BR><BR>
            PREMIER LPG - Responding to customer queries via Email<BR><BR>
            PREMIER LPG - Booking Engineer Visits (Tank issues/relocations/uplifts)<BR><BR>
            PREMIER LPG - Chasing Customer Debts (Red lists)<BR><BR>
            PREMIER LPG - Site Safety Reviews<BR><BR>
            PREMIER LPG - Other Administrative duties such as Invoice querying & account changes<BR><BR>
            Avanti Gas - Support Customer Experience with switching information<BR><BR>
            Avanti Gas - Issue credits on accounts<BR><BR>
            Avanti Gas - Invoicing Queries/Calculations/Credits<BR><BR>
            Avanti Gas - Standing order to Direct Debit Switches<BR><BR>
            Avanti Gas - Other Internal support administration duties<BR><BR>
            `,
            hdr2: `Premier LPG Customer Service Advisor`,
            desc2: ``,
            hdr3: `Avanti Gas Internal Support Administrator`,
            desc3: ``
        }
        let ag = {
            company: `Avanti Gas`,
            location: `Chesterfield`,
            date: `March 2022 - April 2022`,
            jobtitle: `Data administrator`,
            department: `IT/Data Transfer`,
            desc1: `Validating data from Premier LPG<br>
            Inputting Data into Avanti DB via excel and google sheets QR Scanning`,
            hdr2: `About the job`,
            desc2: `At Avanti their parent company UGI Inernational was taking over Premier LPG, therefore all of their customers were to be switched over to Avantigas' systems. My job was to simply scan the QR codes on google sheets which would input data from tables they had extracted from the other system. I thought this was genius, semi-automating the switch process to save money however i took my job a bit further and decided to take on the QR coded sheets and start inputting my own data. Because of my coding experience i managed to manipulate the code in the google sheet making the process not only quicker but easier too. I enjoyed making this process quicker and more efficient as i always strive to do so with my work. `,
            hdr3: ``,
            desc3: ``
        }
        let dd = {
            company: `Unbloq`,
            location: `Doncaster`,
            date: `September 2021 - March 2022`,
            jobtitle: `Digital Developer`,
            department: `Digital`,
            desc1: `Creating websites from scratch using HTML5 & CSS3<br><br>
            Design UX and UI elements with javascript<br><br>
            Design email marketing campaigns<br><br>
            Update existing websites<br><br>
            Upload new websites to servers<br><br>
            Worked with Wordpress`,
            hdr2: `About the Job`,
            desc2: `At Unbloq i worked on both the front end and the back end of websites and email marketing campaigns. Often at times I would find myself building sites from scratch and working on wordpress, At unbloq i had my first hands on experience working on mac systems and adobe suite applications such as dreamweaver, although as time went on i resulted to sticking to visual studio code as my prefered software for builds.`,
            hdr3: `The Experience I gained`,
            desc3: ` I used a variety of languages here such as HTML, CSS, SASS, Javascript, PHP and SQL`,
        }
        let de = {
            company: `Parseq`,
            location: `Bramley`,
            date: `March 2021 - July 2021`,
            jobtitle: `Keying Agent`,
            department: `Keying`,
            desc1: `Keying data received through the system`,
            hdr2: `Targets`,
            desc2: `I regularly exceeded my speed target by around 80% on average, I also exceeded my accuracy target by 1.5% bringing my accuracy rate to almost 99%`,
            hdr3: `More Info`,
            desc3: `During the pandemic the Census project had to go on, So on a temporary contract my duty would be to key in data received from the warehouses and update the information on the system.`,
        }
        let dwp = {
            company: `Capita`,
            location: `Home`,
            date: `April 2020 - November 2020`,
            jobtitle: `Customer Service Advisor`,
            department: `DWP Universal Credits`,
            desc1: `Answer queries for new claimants<br><br>
            Admin work for Case Managers & Work Coaches`,
            hdr2: `My Claim to fame on the Universal Credit Team`,
            desc2: `I worked on the campaign which as we all know was set up in a rushed fashion to cope with the stress of the pandemic and I could clearly see that all notes left were unorganised and the note taking process was slow and ineffective. So i literally took to the internet to see how i could use Microsoft excel to organise the note taking process and make it more efficient.<br>I spent roughly a week or 2 of my own time creating and learning how to make code within excel, create macros and generally learned how to make the excel sheet aesthetically pleasing as well as simple. I used the “Call Notes Tool” whilst on call with claimants and would gather a list of notes for improvements.<br>When the tool was near enough done it was time to reveal to the team. Then it blew up, Campaign wide adoption had happened within the first week and a personal thanks from the Campaign Manager for my hard work and innovation to help the campaign as a whole. Notably the entire campaign statistics had improved in terms of scorecards, wrap times and general job satisfaction on the campaign as a whole had dramatically improved.<br>`,
            hdr3: `This was a turning point for my career direction & decided that creation and innovation was what i want to do.`,
            desc3: ``,
        }
        let sr ={
            company: `Capita`,
            location: `Dearne Valley`,
            date: `January 2020 - April 2020`,
            jobtitle: `Customer/Sales Advisor`,
            department: `O2 Retentions`,
            desc1: `Inbound calls for retention offers to leaving customers<br><br>
            Admin for leaving customers (PAC & STAC codes, Disconnection logging ect.)`,
            hdr2: `More Info`,
            desc2: `My job at Capita on O2 Retentions would be rather simple, Answer calls listen to their reason for cancellation then offer a compelling deal to stay with O2. If the barter didnt fall through i would have to perform a little bit of admin to send them on their way. There was several scenarios of which i was fully prepared for on the job however long story short the pandemic hit and i would be moved to the NHS back to work scheme where i would recruit retired health proffessionals handling their data doing security checks and performing the admin neccesary to get them started. Shortly after i was moved to the DWP department which you can read more about in the next job role.`,
            hdr3: ``,
            desc3: ``,
        }
        let kfc = {
            company: `Welcome Break`,
            location: `Woodall Services`,
            date: `July 2018 - December 2019`,
            jobtitle: `Head Cook & MOH`,
            department: `KFC`,
            desc1: `Managing and leading a team of cooks<br><br>
            Training of new & existing cooks<br><br>
            Food prep (breading, MOH burger station & wraps ec..t)<br><br>
            Cooking Of Products<br><br>
            Food stock & Defrost control<br><br>
            Gutting Chicken<br><br>
            Cleaning the unit (Vents, Workstations, Frier filtration & more)<br><br>
            Morning setups & Night closes`,
            hdr2: `My Ascent to Head Cook`,
            desc2: `Whilst working there as a cook i quickly ascended the ladder as a renown worker within the team. Standards were on point and exceeding expectations even being praised for my work ethic in passing 3 ROCC examinations flawlessly.<br>I would oftenly work up to 14 hours a day and even up to 60 to 70 hours a week, primarily due to lack of staffing levels and it was my job to make sure the cleanliness and product quality was excellent.
            My supervisors and Manager quickly realised my potential and offered me a position as a head cook and asked if i would also work in the middle of house (MOH) to make up for staffing shortfalls to which I took graciously.<br>On some occasions the KFC’s Regional CEO of the UK would check in on the unit as it was a centre of excellence prior to me working there. Although upon a few visits they then came to the decision that they would use our workplace as a hub for cook’s to improve upon their skills which was a huge compliment to my work experience whilst being there`,
            hdr3: ``,
            desc3: ``,
        }
        let sa = {
            company: `Webhelp`,
            location: `Dearne Valley`,
            date: `December 2017 - June 2018`,
            jobtitle: `Sales agent`,
            department: `Vodafone Sales`,
            desc1: `Outbound calls to existing customers<br><br>
            Sales of gadgets (Phones, Tablets, Broadband ect.)`,
            hdr2: `More Info`,
            desc2: `My job at Webhelp consisted mostly of calling our customers at Vodafone to entise them to purchase another line such as a tablet or watch on contract with a sim in it. I would work on the Household department for 3 months before they needed more people on the broadband team so i switched over with practically no training selling broadband this time and continued working there untill the end.`,
            hdr3: ``,
            desc3: ``,
        }
        let cs = {
            company: `Welcome Break`,
            location: `Woodall Services`,
            date: `March 2016 - Sep 2016`,
            jobtitle: `Customer Service`,
            department: `Harry Ramsdens`,
            desc1: `Serving customers<br><br>
            Processing customer orders via till<br><br>
            Food preparation and plating<br><br>
            Pot washing (Industrial pot wash)`,
            hdr2: `More Info`,
            desc2: `At Harry Ramsdens i was the young recruit at just 16, literally fresh out of school i worked as the till operative who would take orders then prepare their food shortly before serving them their food.`,
            hdr3: ``,
            desc3: ``,
        }
        let fo = {
            company: `The FA`,
            location: `Varied Venues`,
            date: `March 2015 - 2021`,
            jobtitle: `Football Official`,
            department: `Officials`,
            desc1: `
            Organise pre-game (administration, kit, venue .etc)<br><br>
            Pre-game checks and management<br><br>
            Officiate in accordance to laws of the game<br><br>
            Issueing disciplinaries to players that infringe the laws of the game<br><br>
            Manage a team of officials or work with lead official<br><br>
            Work as a team to make decisions decisively<br><br>
            Organise and manage up to 22 - 32 players at any one time<br><br>
            Perform crowd control and manage tension appropriately<br><br>
            Manage substitutions during the game<br><br>
            Online administration of final game`,
            hdr2: `More Info`,
            desc2: `Its not often you will see official on a CV but it is an extremely usefull job/hobby to have. I have learned so many skills Officiating, mostly skills including anger management, crowd control, organisation, eye for detail, quick decision making, disciplinaries and ommanding respect all of which can come very usefull in other jobs. Not only has it improved and introduced new skills for me but its also helped me mature at a younger age in a working environment, That in turn has helped me work indipendently and organise my own games around a shedule of assigned games by league associates. Often at times i have de-escaleted situations where i was confronted by either players or managers all of which were dealt with in a propper manner. Its also quite funny to note that one of my worst games was a local u18s derby where i disciplined a total of 13 players 9 of which were yellow cards and 4 resulting in being sent off, These games are "extremely rare" as quoted by the U18s League representitive with upwards of 20 years refereeing experience and proudly applauded me for my efforts to calm down a game that was innevitaly going to be rough.`,
            hdr3: `Even More`,
            desc3: `Not only have i worked by myself, proudly i have worked with plenty of other officials either as a referee or a linesman and some of these are high level referees boasting the potential to make it to the highest of leagues, all of this has provided me with exceptional skills and experience in management, although officially i havent passed a managers course this is a stepping stone towards future careers in management. This has provided me the skill to manage under lots of pressure whilst making competent decisions, refereeing is much more challenging than what meets the eye of an observer as you have to work at high tempos persistently literally sprinting to and from one end to the other then making decisions within a split second all within the knowledge of the laws of the game.<br>
            My proudest acheivements as a referee or linesman was refereeing a year 10s school cup final, as well as being the linesman at the U18s FA Youth cup semi-final, I have also refereed youth squads of proffessional football teams Barnsley FC, Sheffield United, Sheffield Wednesday and Rotherham United at home not to mention the away teams were also proffesional clubs. I retained a great reccord as a referee, picking up literal last minute games to cover for referees that have dropped out and wish to continue refereeing arround work time.`,
        }
        let mus = {
            company: `Self Employed`,
            location: `Home`,
            date: `August 2020 - Today`,
            jobtitle: `Music Producer & Artist`,
            department: `Music`,
            desc1: `
            Music production<br><br>
            Music Mixing & Mastering<br><br>
            Sound engineering<br><br>
            Song writing<br><br>
            Rap reccording<br><br>
            Music publication administration<br><br>
            Video choreographing<br><br>
            Video Editing<br><br>
            Music promotion<br><br>
            Graphic Design<br><br>
            DJ-ing<br><br>
            Delivering any of the above to clients`,
            hdr2: `More Info`,
            desc2: `Music was more of a passion to begin with, however it has grown to be more than that and has infact become more like a job like experience, the skills i have learned through being an artist could well benefit me in future jobs especially those that have relation to music, sounds & general creativity. This has certainly improved my ability to learn by myself, to fix and improve on errors, self manage & open up my creative ideas.`,
            hdr3: ``,
            desc3: ``,
        }
        let prog = {
            date: `2020 - Today`,
            desc1: ``,
            hdr2: ``,
            desc2: ``,
            hdr3: `I love technology`,
            desc3: `I really love technology`,
        }
        // work experience //
        function detail_assignment(id){
            $('#comdesc').html(id.company)
            $('#locdesc').html(id.location)
            $('#datdesc').html(id.date)
            $('#jobdesc').html(id.jobtitle)
            $('#depdesc').html(id.department)
            $('#card1d').html(id.desc1)
            $('#card2h').html(id.hdr2)
            $('#card2d').html(id.desc2)
            $('#card3h').html(id.hdr3)
            $('#card3d').html(id.desc3)
        }
        function pass_data(value, value2){
            value.click(() => {
                detail_assignment(value2)
                data_empty()
            })
        }
        // add new jobs to data loop
        function data_loop(){
            let clickable = [$('#prm'),$('#ag'),$('#dd'), $('#de'), $('#dwp'), $('#sr'), $('#kfc'), $('#sa'), $('#cs'), $('#fo'), $('#mus'), $('#prog')];
            let options = [prm,ag,dd, de, dwp, sr, kfc, sa, cs, fo, mus, prog];
            for(i in clickable){
                pass_data(clickable[i], options[i]);
            }
        }
        data_loop();

        // personality
        let p_fo = {
            desc: `<h2>Goal Keeper at Maltby Juniors</h2><br>
            <p>Football has always been a big passion of mine, it all started when i was 6 years of age when I started out as a goal keeper, I wasnt the best at the time and maybe, just maybe, this was because I was the smallest in my school, including girls might I add. Never the less I played for a small team called Maltby Juniors, it was a sunday league team so 'nothing special' and nothing special, it was because we got absolutely hammered every game in the first half of the season. Luckily my father was a coach and manager for whats formally known as Maltby Main football club and he helped me improve so much as a goal keeper, I say improve, what I meant was we went from losing around 15 nil every game to about 6 or 5 and because of our age we would play 2 teams a match so half of them would be what I had conceded.</p><br>
            <h3>The move to Maltby Miners (Maltby Main)</h3><br>
            <p>
					After growing dissatisfaction with Maltby Juniors my father had finished his last team at Maltby Miners Welfare and decided to do another decade of football with a new team, I suppose it was kind of lucky in a sense, that he would become my manager, unfortunately the first season being first season our Under 7s team fell short on players, so for most of the season we lacked the players which had huge repercussions on the scores we did get. At this time I wasn't in goal so I suppose I can push the blame onto someone else this time rather than myself haha. I played for Maltby Miners for the rest of my sunday league career as I like to refer to it as , I had various position changes all throughout the seasons moving from striker right down to center back. Over time I developed strong freindships with my team members and progressively became better at playing football; Infact there was indeed one game where the Rotherham United scout appeared at our match and took an interest in me and one of my good friends, who played along side me in center back. However we  unfortunatley didnt reach the criteria the scout needed to recruit us at Rotherham United. The criteria being that we had to be a certain height, which was rather unfortunate but we continued to play regardless of the oppotunity that we missed.
				</p><br>
                <h3>Academy football</h3><br>
                <p>
					When i reached the age of 16 me and my friend Brad who i previously mentioned trialed for a new start up football club called North England Football Academy, it was set up by businessmen named Spencer Fearne and Ryan Mcknight, luckily for me and Brad, Spencer had also taken over as chairman at Maltby Main and upon observing us playing football decided to let us train with the first team seeing potential in our skills, at this point i played left back and Brad played right back still we were like a wonder duo and solid defenders aswell as promising attackers. Spencer was the man who offered us the oppurtunity to join this new academy and we took the offer graciously, it was from this point onwards we would meet our coach Andy Mcknight (Yes Ryan Mknights dad). However, he wasnt an ordinary coach, he worked as head coach at West Bromwich Albion and as head coaches at many other proffessional football clubs from abroad. He was and still is a UEFA level coach boasting the ability to train youngsters to become potential stars.<br>
					Both me and Brad made it through the trials and made it into the first team, for the first time i would play against proffesional football clubs such as Peterborough United, Boston United Rotherham United and even Manchester United. I impressed the coach and manager often and they considered me and Brad to be 2 of the best defenders in the team. Unfortunately, an injury would occur whilst training which would ultimately see me out for the rest of the second season. At that point i decided the tough football routines the Btec-Level 3 in sport, Strict food diets And pressure to perform at all times in that sport wasnt for me. I still love football its a fantastic game so i continued refereeing, The team even allowed me to run the lines for them on a regular basis and it was nice to keep in touch with the coaching staff and the rest of the club after I left.
				</p><br>
            `
            // sort a tags
        }
        let p_mus = {
            desc: `<h2>Where my music began</h2><br>
            <p>
					Who dosent like music? I dont know many people who dont and that was me included, my first obsession with music began when in college at NEFA. I met new team members who I became good friends and they listened to grime music to which i never really had much interest in and as you know the more you listen to music it either grows on you or plain and simple just gets more annoying similar tik tok trends. I grew to like grime music, I originally liked house music maybe a little dubstep from when i was younger so it was usually generic music. Then i met a good friend when working at KFC that was just obsessed with bassline and drum & bass, again this grew on me too so i decided whilst working at kfc to make music in my spare time.
				</p><br>
                <h3>The drop</h3><br>
                <p>
					I purchased my first production software called FL Studio (Fruity Loops) and would go on to practice making music, before i even was making music though I had written my own rap songs which il admit wasnt great but they were a start. Time went on as I listened to music i liked and replicated it to then use the skills i gained from replicating others to make my own music, so i went on to make my own music channels and officially release music because people said it was good and others needed to hear it. So you can see my improvements over time by clicking <a href="">here</a> and checking out my playlists in date order.
				</p><br>
                <h3>Where i now stand</h3><br>
                <p>
					I make a variety of genres ranging from Bassline/DNB right over to 90s Style rap music, some of which i have sold to clients under a Ghost Production or Writing so information on these i cant disclose. To check my music website you can click <a href="https://www.northernermusicuk.co.uk/">here</a> alternatively you can check my music experience on this cv <a href="music.html">here</a>.
				</p><br>
            `
            // sort a tags
        }
        let p_ref = {
            desc: `<h2>Football Officiating</h2><br>
            <p>
                At the age of only 15 years old, my father encouraged me to get a qualification in refereeing. This served as pocket money for myself, aswell as a new career route incase my dream to be a proffesional footballer fell short, therefore we went to the Sheffield FA and applied. Together we went through a series of training and tests, such as a written exam and a verbal exam and lone behold, I passed first time. It felt amazing to walk around school knowing I had a qualification that many people my age didnt have.<br>
                My GCSE pe teacher was also a football official and surprisingly school wasnt the last time I saw her, as later on down the line as a referee aged 17, I was scheduled to referee a year 10 school cup final where I saw her referee the year 11 final, which to me was an honour because she was a level 3 football official, which is very high. By the time I was 18 I started refereeing Under 18s football matches and adult football matches in Doncaster over 35 leagues, Sheffield Hallamshire Under 18s league, Rotherham adults league, and Sheffield rose adults league. I gained great reputation as a young promising referee gaining the oppurtunity to become a linesman for the FA youth cup semi-final alongside another good referee and another Semi Final for the FA youth cup under14s. At this point I was appoionted games by the league officials, more of which you can find out by clicking <a href="experience.html #official">here</a><br>
                However I was refereeing proffesional football clubs, gaining my first oppurtunity to become a senior linesman in the County Senior football league until the unfortunate circumstances that started in 2020 had started to arise. Of course all the leagues were put on hold which had scattered my momentum to level up for the season 2019/2020. However I am still a qualified referee and aim to get back into the game after the restrictions lift again.<br>
                Im still a level 7 referee and enjoy refereeing so much, I will gradualy ease my way back in and start leveling up again aiming to reach level 3 in the next few years.
            </p><br>`
            // sort a tags
        }
        let p_game = {
            desc: `<h2>Gaming</h2><br>
            <p>
                Im not exagerating when i say this, but i started gaming at 3 years of age, and my favorite game was halo combat evolved, do you feel old yet? Also my parents used to tell me that myth that if you sit too close to a screen it ruins your eyesight or its not good for your eyes something along those lines, well my eyes are still a perfect score but you get the idea on how much i used to play games. I dont play them as often as i used too and would still rate the Halo franchise my favorite of all franchises, im not just a first person shooter kinda guy although i have spent best part of my school years trying to do the final heist on GTA5 online and getting my rank up in call of duty or halo, but i truly prefer strategy games such as the total war series (think i was like 5 when i played rome total war).<br><br> Anyway, its gaming that got me into technology at the very beginning but then when nvidia started releasing their rtx series cards i must say i was so fascinated in neural networking and how an ai can do the processing of a human brain these days its absolutely crazy. I started making game mods at first using csv and xml primarily until i just thought im going to go for it and splashed the cash on courses to get me into the programming industry. Now despite covid happening and literally having no money i had no regrets either so big thumbs up for me.
            </p><br>`
        }
        let p_a1 = {
            desc: `<h2>The story where i career switched</h2><br>
            <p>
            On the universal credit campaign everything was massively rushed due to the word im not even going to repeat, so i took it upon myself to find better ways to improve my working situation, i found it so difficult to read through everyones notes because the supplied template was aweful (no offense to who put the 12 word script up) and it was just messy, messy to a point where you spent precious time reading. So with no skill in programming i at least took to excel to create a new template and make it easier for the staff to write notes, this effort gave me recognition from the campaign manager and as soon as i rolled it out to other collegues scores had increased drastically and the work satisfaction made a positive moral impact on the team. If you wish to see the work i created click <a id="unicredjpg">Here</a></p>`
            // link the jpg to this
        }
        let p_a2 = {
            desc: `<h2>School times</h2>
            <p>In school i passed all the subjects neccesary for any job including maths sciences and english, along with a couple others on top.</p>` 
        }
        let p_a3 = {
            desc: `<h2>Trainer Experience</h2>
            <p>At kfc i was trained to be a trainer, which involved training new cooks and managing the team of cooks we had.</p>`
        }
        let p_a4 = {
            desc: `<h2>Lets not go there</h2>`
        }
        let p_a5 = {
            desc: `<h2>The Bring back staff campaign</h2>
            <p>During the pandemic there was a small period where i was sent home on medical grounds, whilst we awaited the DWP contract to fall through i volounteered as an assistant in bringing nhs retired staff back to help with the pandemic. This included admin and customer service and i was also one of a few to help out with 111 too.</p>`
        }
        let p_a6 = {
            desc: `<h2>Telling adults what to do at 15</h2>
            <p>Becoming a football referee gave me lots of skills i didnt think refereeing could give me, and of course starting at the age of 15 you can imagine it was some nice pocket money too.</p>`
        }
        // use csv files for the tables below
        let p_levels = ['Novice', 'Advanced Beginner', 'Intermediate', 'Proficient', 'Expert']
        let e_pqc1 = {
            desc: `
            <table>
    <tr>
        <td>Language or Framework</td>
        <td>My Honest Rating</td>
        <td>Cert</td>
    </tr>
    <tr>
        <td>HTML5 & CSS3</td>
        <td>${p_levels[3]}</td>
        <td><a id="htmlpdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>SASS</td>
        <td>${p_levels[2]}</td>
        <td><a id="sasspdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>Javascript</td>
        <td>${p_levels[1]}</td>
        <td><a id="jspdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>JQuery</td>
        <td>${p_levels[1]}</td>
        <td><a id="jquerypdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>Bootstrap</td>
        <td>${p_levels[0]}</td>
        <td><a id="bootstrappdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>SQL</td>
        <td>${p_levels[1]}</td>
        <td><a id="sqlpdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>PHP</td>
        <td>${p_levels[1]}</td>
        <td><a id="phppdf" class="viewcerts">View Certs</a></td>
    </tr>
    <tr>
        <td>Python</td>
        <td>${p_levels[1]}</td>
        <td><a id="pythonpdf" class="viewcerts">View Certs</a></td>
    </tr>
    
</table>
        `
        }
        let e_oq1 = {
            desc: ``
        }
        let e_oq2 = {
            desc: ``
        }
        let e_sch = {
            desc: `            <table>
            <tr>
                <td>Subject</td>
                <td>Grade</td>
            </tr>
            <tr>
                <td>History</td>
                <td>B</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>C</td>
            </tr>
            <tr>
                <td>Science Core</td>
                <td>C</td>
            </tr>
            <tr>
                <td>Science Additional</td>
                <td>C</td>
            </tr>
            <tr>
                <td>English literature</td>
                <td>C</td>
            </tr>
            <tr>
                <td>English language</td>
                <td>C</td>
            </tr>
            <tr>
                <td>Geography</td>
                <td>D</td>
            </tr>
        </table>`
        }

        function detail_assignment_2(id){
            $('.descriptions').html(id.desc)
        }
        function pass_data_2(value, value2){
            value.click(() => {
                detail_assignment_2(value2)
            })
        }
        let clickable2 = [$('.football-id'), $('.music-id'), $('.refereeing-id'), $('.gaming-id'), $('#pa1'), $('#pa2'), $('#pa3'), $('#pa4'), $('#pa5'), $('#pa6')];
        let options2 = [p_fo, p_mus, p_ref, p_game, p_a1, p_a2, p_a3, p_a4, p_a5, p_a6];
        let clickable3 = [$('#lanlist')]
        options3 = [e_pqc1, e_oq1, e_sch]
        function data_loop2(value1, value2){
            for(i in value1){
                pass_data_2(value1[i], value2[i]);
                $(value1[i]).click(() => {
                    $('.descriptions').fadeIn(250).css('display', 'block');
                })
            }
        }
        function pdf_viewer(){
            var certs = [$("htmlpdf"), $("sasspdf"),$("jspdf"),$("jquerypdf"),$("bootstrappdf"),$("sqlpdf"),$("phppdf"),$("pythonpdf")]
        }
        data_loop2(clickable2, options2)
        data_loop2(clickable3, options3)
        pdf_viewer()






    





})