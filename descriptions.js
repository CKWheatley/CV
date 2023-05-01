//jquery ready
$(document).ready(() => {
    var months_worked = daysdifference('01/02/2023', new Date());  
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
})
    // work experience //
const ag3 = {
    company: `Avanti Gas`,
    location: `Chesterfield`,
    date: `February 2023 - Today`,
    jobtitle: `Pricing & Management Information Admin`,
    department: `Financial Pricing & Analysis`,
    desc1: `
        Creating management reports on request<br><br>
        Using Both Access & SQL Server for data<br><br>
        Teaching the analysis team SQL<BR><BR>
        Generating sheduled reports for analysis<br><br>
        Converting Access code into SQL Server<br><br>
        Creating automatic functions in excel using VBA<br><br>
        Assisting the analysis team with their work<br><br>
        Liaising with leadership and management teams (home & abroad)<br><br>
    `,
    hdr2: `Sharing SQL Expertise`,
    desc2: `As a Pricing & MI Admin, I found myself in a unique position where I could use my skills to greatly benefit the analysis team. One major contribution I made was teaching the team how to use SQL Server for extracting data, as they were unfamiliar with it. This knowledge sharing not only improved the efficiency of our team but also enabled us to work more effectively with the data at hand. In fact, my deep understanding of SQL allowed me to confidently work with the language, using it extensively to extract, manipulate, and analyze data to drive better decision-making. By combining my SQL and Excel expertise, I was able to create innovative work for the management and leadership teams, developing instantly accessible extractions that were highly accurate.`,
    hdr3: `Coding for Automation & Boosting Efficiency`,
    desc3: `During my time in this role, I utilized MS Access to build queries and relied heavily on Excel for various tasks. Working closely with the analysis team, I honed my skills in Excel and developed key analysis abilities that greatly enhanced my expertise. My knack for finding innovative solutions played a crucial role in data extraction; for instance, I was able to reduce query times from a staggering 7 hours to just 30 seconds, significantly boosting our productivity. Whenever there was an issue, I proactively addressed and resolved it, ensuring that the quality of my work remained consistently high.
    <br><br>
    My coding abilities have earned me much recognition, particularly when it comes to automating tasks and streamlining processes. Some of my notable achievements include creating automatic emails within Excel documents and acquiring skills in PowerShell, VBA, and VBScript. These proficiencies have allowed me to automate tasks and further contribute to the overall efficiency and success of the team. By leveraging my SQL skills and other technical proficiencies, I was able to demonstrate my dedication to finding innovative solutions to improve our work processes and solidify my role as an essential member of the team.`
}
const ag2 = {
        company: `Avanti Gas`,
        location: `Chesterfield`,
        date: `October 2022 - February 2023`,
        jobtitle: `Data Administrator`,
        department: `Internal Support`,
        desc1: `Sorting and Filtering old files (GDPR)<BR><BR>
        Checking if data is still relevant<BR><BR>
        Organising paperwork storage<BR><BR>
        Acting as senior team member to 4 other recruits<BR><BR>
        Delegating tasks<BR><BR>
        <BR><BR>
        `,
        hdr2: `More about the job`,
        desc2: `The job assigned to me that time around was fairly simple, although with a little more responsibility. As I was working back on the premier documents, I was one of the most senior members of staff who was still within the company that knew Premier well. This played a major role in the project as I essentially acted as a senior member to the four new recruits. As of that time, we had thrown away 40 bin bags full of information we didn't need and counting. My colleague and I had been organizing files in order of department and clearing anything we had that was beyond the GDPR breaching time limit.

        After the first week of us clearing out and organizing files in accordance with each department, three new recruits had started, so I got right to the point of explaining the first task two of them would be doing. Invoices and proof of delivery slips needed separating and putting into date order. The other recruit would remain with me to filter through customer files for dates considered too old while I checked if the files were relevant and the customers still remained. This evolved over time as, eventually, one of the recruits organized the filing structure, two of them were on the invoice job, and one of them checked the dates of the customer files.
        <br><br>`,
        hdr3: `Extra Tasks`,
        desc3: `As I mentioned in the previous paragraph, I was one of the only ones who had expertise working with Premier, and as such, many customers still needed documents. The customer services team still required adhoc for the customers and, similar to the last role, I had to provide with the exception of responding to the customer. This was taken on as a favor while managing the other teammates and filtering through Premier's data. Throughout that time, I continued to use the Gas Business System, Sage, and CRM to carry out all tasks assigned.
        <br><br>
        A surge of demand meant that I had to step in and assist the customer services team with some of their roles. Having as much experience, if not more, than most of the customer service team members, I was the first to be picked to help out. The rest of my team followed suit, except for one who continued working on the data project. Initially, I focused on making outbound calls for customers who were due to receive a gas delivery, but my responsibilities soon evolved into handling many more tasks for the team. This continued until I transitioned into my new role in FP&A.

        `
}
const prm = {
        company: `Avanti Gas`,
        location: `Chesterfield`,
        date: `April 2022 - October 2022`,
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
        desc2: `Once my contract drew to its end as a Data Admin, they asked me to see if i could stay on longer as a customer support advisor, I straight away started my new role with little to no training other than getting straight on with the job. As I was picking up some of the smaller jobs such as signing contracts and placing orders I decided to use what I learned on the DWP campaign and gather as much info as I possibly could on the first instance I learned it. For example on the Premier LPG campaign we were tasked to do every role the company did between 3 to 4 members of staff, 2 on admin and emails and 2 on the calls plus 1 on finance as part of the Avantigas takeover. Because there were so many different roles I put together a rather complex google sheet which contained all the info I needed when juggling the tasks. Not only that but the sheet was designed to be fool proof so i wouldn't miss anything when following the procedures set out, which to my surprise was promptly adopted by my other colleagues who saw it as incredibly useful in making the administration process much easier and more organized as oppose to the 100’s of templates they had in their files. You can view this google sheet <a href="https://docs.google.com/spreadsheets/d/17YLgqRMS5JgdtSgw7B4FCmHdxFlPWqg5TLxtBAWikNw/edit?usp=sharing">here</a>. 
        <br><br>
        With the takeover around the corner we had started the campaign to retain all the customers out of contract at the time, this would involve us sending around 400 emails to customers in the middle of dealing with general enquiries, responding to their replies and then drafting their contracts to them input it on their system. By this point my contract was extended by a further 3 months with a new job role as i was one of the only people in the company capable of working on Premiers System, Sage 50, Avanti's engineering system and finally Avantis main system.`,
        hdr3: `Avanti Gas Internal Support Administrator`,
        desc3: `Once the company takeover had finally happened and I had returned to work from surgery my role had changed to Internal Support Advisor/Administrator. My duties were rather all over the place and unpredictable, the switch from one company to the other could have gone much smoother for the customers and an example of that was customers who paid standing order to premier lpg. Lots of the customers were getting through to the customer service department explaining that they had already paid their tank rentals and it was mine and my colleagues' jobs to investigate if that was the case by pulling up previous invoices. The standing orders were already set up in Premier LPG’s name however as they did not foresee that customers wouldnt cancel or even notice the switch, we also had to contact around 250 customers to cancel their SO’s and switch to a direct debit. We had around 4 weeks to complete this along with keeping on top with Customer queries from the CE Team, Signing contracts on behalf of the Retentions teams and keeping on top of 4 inboxes, it makes me proud to say we completed all of these in 2 weeks just before my colleague was due to have time off. I would often find myself contacting customers to pay off the remainder of their outstanding balances and doing odd jobs for other departments as a lot of the time I found myself completing work before the predicted time frame allowing me to help other departments. 
        <br><br>
        It is also worth noting that whenever we had a project using the Standing orders and the final renewal offers we had to send out as examples it was always my duty to report statistics back to the manager. You can also see a page i created from scratch to better organise and support the use on notes on avantis system <a href="https://ckwheatley.github.io/GBSN-Generator/">here</a>. I have also practiced switching from the spreadsheet to a page <a href="https://ckwheatley.github.io/Avanti-Toolkit/">here</a>
        `
}
const ag = {
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
const dd = {
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
const de = {
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
const dwp = {
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
const sr ={
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
const kfc = {
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
const sa = {
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
const cs = {
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
const fo = {
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
const mus = {
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
const prog = {
        date: `2020 - Today`,
        desc1: ``,
        hdr2: ``,
        desc2: ``,
        hdr3: `I love technology`,
        desc3: `I really love technology`,
}
// personality & education
const p_fo = {
    hdr1: "Goal Keeper at Maltby Juniors",
    desc1: "Football has always been a big passion of mine, it all started when i was 6 years of age when I started out as a goal keeper, I wasnt the best at the time and maybe, just maybe, this was because I was the smallest in my school, including girls might I add. Never the less I played for a small team called Maltby Juniors, it was a sunday league team so 'nothing special' and nothing special, it was because we got absolutely hammered every game in the first half of the season. Luckily my father was a coach and manager for whats formally known as Maltby Main football club and he helped me improve so much as a goal keeper, I say improve, what I meant was we went from losing around 15 nil every game to about 6 or 5 and because of our age we would play 2 teams a match so half of them would be what I had conceded.",
    hdr2: "The move to Maltby Miners (Maltby Main)",
    desc2: "After growing dissatisfaction with Maltby Juniors my father had finished his last team at Maltby Miners Welfare and decided to do another decade of football with a new team, I suppose it was kind of lucky in a sense, that he would become my manager, unfortunately the first season being first season our Under 7s team fell short on players, so for most of the season we lacked the players which had huge repercussions on the scores we did get. At this time I wasn't in goal so I suppose I can push the blame onto someone else this time rather than myself haha. I played for Maltby Miners for the rest of my sunday league career as I like to refer to it as , I had various position changes all throughout the seasons moving from striker right down to center back. Over time I developed strong freindships with my team members and progressively became better at playing football; Infact there was indeed one game where the Rotherham United scout appeared at our match and took an interest in me and one of my good friends, who played along side me in center back. However we  unfortunatley didnt reach the criteria the scout needed to recruit us at Rotherham United. The criteria being that we had to be a certain height, which was rather unfortunate but we continued to play regardless of the oppotunity that we missed.",
    hdr3: `Academy football`,
    desc3: `When i reached the age of 16 me and my friend Brad who i previously mentioned trialed for a new start up football club called North England Football Academy, it was set up by businessmen named Spencer Fearne and Ryan Mcknight, luckily for me and Brad, Spencer had also taken over as chairman at Maltby Main and upon observing us playing football decided to let us train with the first team seeing potential in our skills, at this point i played left back and Brad played right back still we were like a wonder duo and solid defenders aswell as promising attackers. Spencer was the man who offered us the oppurtunity to join this new academy and we took the offer graciously, it was from this point onwards we would meet our coach Andy Mcknight (Yes Ryan Mknights dad). However, he wasnt an ordinary coach, he worked as head coach at West Bromwich Albion and as head coaches at many other proffessional football clubs from abroad. He was and still is a UEFA level coach boasting the ability to train youngsters to become potential stars.<br>
    Both me and Brad made it through the trials and made it into the first team, for the first time i would play against proffesional football clubs such as Peterborough United, Boston United Rotherham United and even Manchester United. I impressed the coach and manager often and they considered me and Brad to be 2 of the best defenders in the team. Unfortunately, an injury would occur whilst training which would ultimately see me out for the rest of the second season. At that point i decided the tough football routines the Btec-Level 3 in sport, Strict food diets And pressure to perform at all times in that sport wasnt for me. I still love football its a fantastic game so i continued refereeing, The team even allowed me to run the lines for them on a regular basis and it was nice to keep in touch with the coaching staff and the rest of the club after I left.`
    // sort a tags
}
const p_mus = {
    hdr1: `Where my music began`,
    desc1: `Who dosent like music? I dont know many people who dont and that was me included, my first obsession with music began when in college at NEFA. I met new team members who I became good friends and they listened to grime music to which i never really had much interest in and as you know the more you listen to music it either grows on you or plain and simple just gets more annoying similar tik tok trends. I grew to like grime music, I originally liked house music maybe a little dubstep from when i was younger so it was usually generic music. Then i met a good friend when working at KFC that was just obsessed with bassline and drum & bass, again this grew on me too so i decided whilst working at kfc to make music in my spare time.`,
    hdr2: `The drop`,
    desc2: `I purchased my first production software called FL Studio (Fruity Loops) and would go on to practice making music, before i even was making music though I had written my own rap songs which il admit wasnt great but they were a start. Time went on as I listened to music i liked and replicated it to then use the skills i gained from replicating others to make my own music, so i went on to make my own music channels and officially release music because people said it was good and others needed to hear it. So you can see my improvements over time by clicking <a href="#">here</a> and checking out my playlists in date order.`,
    hdr3: `Where i now stand`,
    desc3: `I make a variety of genres ranging from Bassline/DNB right over to 90s Style rap music, some of which i have sold to clients under a Ghost Production or Writing so information on these i cant disclose. To check my music website you can click href="#">here</a> alternatively you can check my music experience on this cv href="#">here</a>.`
    // sort a tags
}
const p_ref = {
    hdr1: `Football Officiating`,
    desc1: `At the age of only 15 years old, my father encouraged me to get a qualification in refereeing. This served as pocket money for myself, as well as a new career route in case my dream to be a professional footballer fell short, therefore we went to the Sheffield FA and applied. Together we went through a series of training and tests, such as a written exam and a verbal exam and low and behold, I passed first time. It felt amazing to walk around school knowing I had a qualification that many people my age didn't have.

    My GCSE PE teacher was also a football official and surprisingly school wasn't the last time I saw her, as later on down the line as a referee aged 17, I was scheduled to referee a year 10 school cup final where I saw her referee the year 11 final, which to me was an honor because she was a level 3 football official, which is very high. By the time I was 18 I started refereeing Under 18s football matches and adult football matches in Doncaster over 35 leagues, Sheffield Hallamshire Under 18s league, Rotherham adults league, and Sheffield rose adults league. I gained great reputation as a young promising referee gaining the opportunity to become a linesman for the FA youth cup semi-final alongside another good referee and another Semi Final for the FA youth cup under 14s. At this point I was appointed games by the league officials, more of which you can find out by clicking href="#">here</a>.

    However, I was refereeing professional football clubs, gaining my first opportunity to become a senior linesman in the County Senior football league until the unfortunate circumstances that started in 2020 had started to arise. Of course, all the leagues were put on hold which had scattered my momentum to level up for the season 2019/2020. However, I am still a qualified referee and aim to get back into the game after the restrictions lift again.`,
    hdr2: ``,
    desc2: `I am still a level 7 referee and enjoy refereeing so much, I will gradually ease my way back in and start leveling up again aiming to reach level 3 in the next few years.`,
    hdr3: ``,
    desc3: ``
    // sort a tags
}
// sort a tags
const p_game = {
    hdr1: `Gaming`,
    desc1: `I'm not exaggerating when I say this, but I started gaming at 3 years of age, and my favorite game was Halo Combat Evolved. My parents used to tell me that myth that if you sit too close to a screen it ruins your eyesight or it's not good for your eyes something along those lines, well my eyes are still a perfect score but you get the idea on how much I used to play games. I don't play them as often as I used to and would still rate the Halo franchise my favorite of all franchises. I'm not just a first-person shooter kind of guy although I have spent best part of my school years trying to do the final heist on GTA5 online and getting my rank up in Call of Duty or Halo, but I truly prefer strategy games such as the Total War series (think I was like 5 when I played Rome Total War).`,
    hdr2: ``,
    desc2: `It's gaming that got me into technology at the very beginning but then when Nvidia started releasing their RTX series cards, I must say I was so fascinated in neural networking and how an AI can do the processing of a human brain. These days it's absolutely crazy. I started making game mods at first using CSV and XML primarily until I just thought I'm going to go for it and splashed the cash on courses to get me into the programming industry. Now despite Covid happening and literally having no money, I had no regrets either so big thumbs up for me.`,
    hdr3: ``,
    desc3: ``
}
const p_a1 = {
    hdr1: `The story where i career switched`,
    desc1: `On the universal credit campaign everything was massively rushed due to the word I'm not even going to repeat, so I took it upon myself to find better ways to improve my working situation, I found it so difficult to read through everyones notes because the supplied template was awful (no offense to who put the 12 word script up) and it was just messy, messy to a point where you spent precious time reading. So with no skill in programming I at least took to excel to create a new template and make it easier for the staff to write notes, this effort gave me recognition from the campaign manager and as soon as I rolled it out to other colleagues scores had increased drastically and the work satisfaction made a positive moral impact on the team. If you wish to see the work I created click <a id="unicredjpg" href="https://docs.google.com/spreadsheets/d/1sL27SU5KHU2zQG5KO4JPFeGTuqs0Ki2a/edit?usp=sharing&ouid=110838322283679630892&rtpof=true&sd=true">Here</a>`,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``

}
const p_a2 = {
    hdr1: `School times`,
    desc1: `In school, I passed all the subjects necessary for any job including maths, sciences and English, along with a couple of others on top.`,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
} 
const p_a3 = {
    hdr1: `Trainer Experience`,
    desc1: `At KFC, I was trained to be a trainer, which involved training new cooks and managing the team of cooks we had.`,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
const p_a4 =  {
    hdr1: `Lets not talk political`,
    desc1: ``,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
const p_a5 = {
    hdr1: `The Bring back staff campaign`,
    desc1: `During the pandemic, there was a small period where I was sent home on medical grounds, whilst we awaited the DWP contract to fall through, I volunteered as an assistant in bringing NHS retired staff back to help with the pandemic. This included admin and customer service and I was also one of a few to help out with 111 too.`,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
const p_a6 = {
    hdr1: `Telling adults what to do at 15`,
    desc1: `Becoming a football referee gave me lots of skills I didn't think refereeing could give me, and of course starting at the age of 15 you can imagine it was some nice pocket money too.`,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
const e_oq1 = {
    hdr1: ``,
    desc1: ``,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
const e_oq2 = {
    hdr1: ``,
    desc1: ``,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
const e_sch = {
    hdr1: ``,
    desc1: `
    <table>
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
    </table>`,
    hdr2: ``,
    desc2: ``,
    hdr3: ``,
    desc3: ``
}
function cleanData() {
    $('.card').each(function(){
        if($(this).children().text().length === 0) {
            $(this).addClass("hidden");
        }
    });
}
function addHTML(data){
    const moreInfo = document.getElementById("moreInfo")
    if(moreInfo){
        moreInfo.innerHTML = `
		<section class="cards">
			<div class="card" style="flex-flow: column;">
				<h3 id="card1h">${data.hdr1}</h3>
				<p id="card1d">${data.desc1}</p>
			</div>
			<div class="card">
				<h3 id="card2h">${data.hdr2}</h3>
				<p id="card2d">${data.desc2}</p>
			</div>
			<div class="card">
				<h3 id="card3h">${data.hdr3}</h3>
				<p id="card3d">${data.desc3}</p>
			</div>
		</section>
        `
    }else{
        document.body.insertAdjacentHTML('beforeend', `
        <section id="moreInfo" class="cardsection">
		    <section class="cards">
		    	<div class="card" style="flex-flow: column;">
		    		<h3 id="card1h">${data.hdr1}</h3>
		    		<p id="card1d">${data.desc1}</p>
		    	</div>
		    	<div class="card">
		    		<h3 id="card2h">${data.hdr2}</h3>
		    		<p id="card2d">${data.desc2}</p>
		    	</div>
		    	<div class="card">
		    		<h3 id="card3h">${data.hdr3}</h3>
		    		<p id="card3d">${data.desc3}</p>
		    	</div>
		    </section>
	    </section>
        `)
    }
    cleanData()
}
function addExperienceHTML(data){
    const moreInfo = document.getElementById("moreInfo")
    if(moreInfo){
        moreInfo.innerHTML = `
		    <section class="squares">
		    	<div class="square">
		    		<h2>Company</h2>
		    		<h4 id="comdesc">${data.company}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Location</h2>
		    		<h4 id="locdesc">${data.location}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Date</h2>
		    		<h4 id="datdesc">${data.date}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Job Title</h2>
		    		<h4 id="jobdesc">${data.jobtitle}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Department</h2>
		    		<h4 id="depdesc">${data.department}</h4>
		    	</div>
		    </section>
		    <section class="cards">
		    	<div class="card">
		    		<h3>Roles &amp; Responsibilities</h3>
		    		<p id="card1d">${data.desc1}</p>
		    	</div>
		    	<div class="card">
		    		<h3 id="card2h">${data.hdr2}</h3>
		    		<p id="card2d">${data.desc2}</p>
		    	</div>
		    	<div class="card">
		    		<h3 id="card3h">${data.hdr3}</h3>
		    		<p id="card3d">${data.desc3}</p>
		    	</div>
		    </section>
        `
    }else{
        document.body.insertAdjacentHTML('beforeend', `
        <section id="moreInfo" class="cardsection">
		    <section class="squares">
		    	<div class="square">
		    		<h2>Company</h2>
		    		<h4 id="comdesc">${data.company}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Location</h2>
		    		<h4 id="locdesc">${data.location}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Date</h2>
		    		<h4 id="datdesc">${data.date}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Job Title</h2>
		    		<h4 id="jobdesc">${data.jobtitle}</h4>
		    	</div>
		    	<div class="square">
		    		<h2>Department</h2>
		    		<h4 id="depdesc">${data.department}</h4>
		    	</div>
		    </section>
		    <section class="cards">
		    	<div class="card">
		    		<h3>Roles &amp; Responsibilities</h3>
		    		<p id="card1d">${data.desc1}</p>
		    	</div>
		    	<div class="card">
		    		<h3 id="card2h">${data.hdr2}</h3>
		    		<p id="card2d">${data.desc2}</p>
		    	</div>
		    	<div class="card">
		    		<h3 id="card3h">${data.hdr3}</h3>
		    		<p id="card3d">${data.desc3}</p>
		    	</div>
		    </section>
	    </section>
        `
        )
    }
    cleanData()
}