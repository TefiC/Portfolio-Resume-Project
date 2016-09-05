//BIO (HEADER)
//Bio object
var bio = {
    "name": "My Name",
    "role": "Front end web developer",
    "contacts": {
        "mobile": "999-9999",
        "email": "mail@example.com",
        "github": "Tefi",
        "twitter": "@tefi",
        "location": "Country"
    },
    "welcomeMessage": "Welcome to my RESUME and PORTFOLIO",
    "skills": ["Fast-learner", "Programming", "Team work", "Mathematics", "Detail oriented", "Trustworthy", "Honest"],
    "biopic": "images/gps-large-min-1x.jpg",
    display: function() {

        //Role
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $(".header-titles-div").prepend(formattedRole);

        //Name
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $(".header-titles-div").prepend(formattedName);

        //Welcome message
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);

        //Image
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        $(".header-image-div").append(formattedImage);

        //Generic for loop to append Contact Information (key and value) of the contacts object.
        for (var contact in bio.contacts) {

            if (bio.contacts.hasOwnProperty(contact)) {
                var formattedTitle = HTMLcontactGeneric.replace("%contact%", contact);
                var formattedContact = formattedTitle.replace("%data%", bio.contacts[contact]);
                $("#topContacts").append(formattedContact);
            }
        }

        //Appending skills

        //Check if skills array has elements
        if (bio.skills.length > 0) {
            //Append title for skills section
            $(".skills-main-div").prepend(HTMLskillsStart);

            //Append skills list div
            $(".skills-div").prepend(HTMLskillsList);

            //Iterate over array to append EACH skill to the list
            var skillsLength = bio.skills.length;
            for (var i = 0; i < skillsLength; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }

        //Append Navbar
        $(".navBar-main-div").append(HTMLnavBarStart);

        $(".navBar").append(HTMLnavBarWork);
        $(".navBar").append(HTMLnavBarEducation);
        $(".navBar").append(HTMLnavBarProjects);
        $(".navBar").append(HTMLnavBarMap);
    }
};


/**
 * @description Displays the elements in header
 */
bio.display();



//WORK SECTION

//Work object
var work = {
    "jobs": [{
        "employer": "Employer 1",
        "title": "Job Title 1",
        "location": "Orlando, FL",
        "dates": "2014-2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }, {
        "employer": "Employer 2",
        "title": "Job Title 2",
        "location": "London, UK",
        "dates": "present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }, {
        "employer": "Employer 3",
        "title": "Job Title 3",
        "location": "Montevideo, UY",
        "dates": "2016-present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }],
    display: function() {

        var jobsLength = work.jobs.length;

        for (var i = 0; i < jobsLength; i++) {
            //Add individual job div
            $("#workExperience").append(HTMLworkStart);

            //Formatting data
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

            //Appending data
            var employerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(employerTitle);

            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
            $(".work-entry:last").prepend(formattedLocation);
        }
    }
};

/**
 * @description Displays the elements in Work Section
 */
work.display();



//EDUCATION SECTION

//Education object
var education = {
    "schools": [{
        "name": "School1",
        "location": "Madrid, ES",
        "degree": "Degree 1",
        "majors": ["science"],
        "dates": "2000",
        "url": "http://coursera.org"
    }, {
        "name": "School2",
        "location": "Dublin, IR",
        "degree": "Degree 2",
        "majors": ["calculus", "biology", "genetics"],
        "dates": "2005",
        "url": "http://coursera.org"
    }, {
        "name": "School3",
        "location": "Mountain View, CA",
        "degree": "Degree 3",
        "majors": ["math"],
        "dates": "2007",
        "url": "http://coursera.org"
    }],

    "onlineCourses": [{
        "title": "Front end web developer",
        "school": "Udacity",
        "date": "2016-present",
        "url": "http://udacity.org"

    }, {
        "title": "Introduction to genetics and evolution",
        "school": "Coursera",
        "date": "2015",
        "url": "http://coursera.org"
    }, {
        "title": "Pre-university calculus",
        "school": "EdX",
        "date": "2015",
        "url": "http://edx.org"
    }],

    display: function() {

        var schoolsLength = education.schools.length;

        for (var i = 0; i < schoolsLength; i++) {

            //Add individual div
            $("#education").append(HTMLschoolStart);

            //Format name
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

            //Format degree
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

            //Append Name + degree
            var SchoolNameDegree = formattedSchoolName + formattedDegree;
            $(".education-entry:last").append(SchoolNameDegree);

            //Append Dates
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            //Append location
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            //Apend Major
            var majorsLength = education.schools[i].majors.length;
            for (var x = 0; x < majorsLength; x++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[x]);
                $(".education-entry:last").append(formattedMajor);
            }
        }

        /*For online courses*/
        if (education.onlineCourses.length > 0) {

            //Add title
            $("#education").append(HTMLonlineClasses);


            //For loop to append each online course
            var onlineLength = education.onlineCourses.length;

            for (i = 0; i < onlineLength; i++) {

                //Add individual div
                $("#education").append(HTMLonlineStart);

                //Format Title
                var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

                //Format School
                var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);

                //Append Title + School
                var OnlineCourseTitleSchool = formattedOnlineCourseTitle + formattedOnlineCourseSchool;
                $(".onlineCourse-entry:last").append(OnlineCourseTitleSchool);

                //Append Dates
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
                $(".onlineCourse-entry:last").append(formattedOnlineDates);

                //Append URL
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                $(".onlineCourse-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

/**
 * @description Displays the elements in Education Section
 */
education.display();




//PROJECTS SECTION

//Projects object
var projects = {
    "projects": [{
            "title": "Project 1 title",
            "dates": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/laptop-large-min-1x.jpg", "images/iphone-large-min-1x.jpg"]
        },

        {
            "title": "Project 2 title",
            "dates": "2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/gps-large-min-1x.jpg", "images/dog-large-min-1x.jpg"]
        },

        {
            "title": "Project 3 title",
            "dates": "2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/abstract-large-min-1x.jpg", "images/laptop-large-min-1x.jpg"]
        }
    ],
    display: function() {

        //For loop to append each project
        var projectsLength = projects.projects.length;

        for (var i = 0; i < projectsLength; i++) {
            //Append individual project div
            $("#projects").append(HTMLprojectStart);

            //Append title
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-text-div:last").append(formattedProjectTitle);

            //Append dates
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-text-div:last").append(formattedProjectDates);

            //Append description
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-text-div:last").append(formattedProjectDescription);

            //Append images from each object's array
            var imagesLength = projects.projects[i].images.length; //A variable to store the length of each project's "images" array

            //Iterate over variable x to append each image in "images" array
            for (var x = 0; x < imagesLength; x++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
                $(".project-images-div:last").append(formattedProjectImage);
            }
        }
    }
};

/**
 * @description Displays the elements in Projects
 */
projects.display();




//CUSTOM FOOTER OBJECT

//Footer object
var footer = {
    display: function() {
        //Generic for loop to append Contact Information (key and value) of the contacts object.
        for (var contact in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contact)) {
                var formattedTitle = HTMLcontactGeneric.replace("%contact%", contact);
                var formattedContact = formattedTitle.replace("%data%", bio.contacts[contact]);
                $("#footerContacts").append(formattedContact);
            }
        }
    }
};

/**
 * @description Displays the elements in Footer
 */
footer.display();






