const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }

  const draft = document.getElementById('challengeId')
 
    const described = document.getElementById('descriptionHead');
    described.textContent=asabenehChallenges2020.description;
    
    const subtitle = document.createElement('div');
    subtitle.textContent=asabenehChallenges2020.challengeSubtitle;
    document.body.appendChild(subtitle);


    const year = document.createElement('div');
    year.textContent = asabenehChallenges2020.challengeYear;
    document.body.appendChild(year);

    const keywordsId = document.createElement('div');
    const keywordArray = asabenehChallenges2020.keywords;

    
    keywordArray.forEach(keyword => {
       const keywordDiv = document.createElement('div');
       const keywordData = keyword;
       keywordsId.classList.add('stackList');
       keywordDiv.classList.add('innerList');
       keywordDiv.textContent = keywordData;
       keywordsId.appendChild(keywordDiv)
    });

    document.body.appendChild(keywordsId);

    
    const authorId = document.createElement('div');
    const authorArray = asabenehChallenges2020.author;
    const authorName = authorArray.firstName;
    //authorId.classList.add('firstName')
    authorId.classList.add('skillList');
    const authorNameId = document.createElement('div');
    authorNameId.textContent=authorName;
    authorId.appendChild(authorNameId)

    document.body.appendChild(authorId)
    
    
    const authorTitle = authorArray.titles;
    authorTitle.forEach(title => {
      const titleData = title;
      const titleDiv = document.createElement('div');
      titleDiv.textContent = titleData;
      authorId.appendChild(titleDiv);
    });

    document.body.appendChild(authorId);

    const authorQua = authorArray.qualifications;
    authorQua.forEach(qualification => {
      const qualificationData = qualification;
      const qualificationDiv = document.createElement('div');
      qualificationDiv.classList.add('qualList');
      qualificationDiv.textContent =qualificationData;
      authorId.appendChild(qualificationDiv)
    });

    document.body.appendChild(authorId)
    
    const authorSkill =authorArray.skills;
    authorSkill.forEach(skill => {
      const skillData = skill;
      const skillDiv = document.createElement('div');
      //authorId.classList.add('skillList');
      skillDiv.textContent = skillData;
      authorId.appendChild(skillDiv);
    })

    document.body.appendChild(authorId);

    const authorBio = authorArray.bio;
    const bioDiv = document.createElement('div');
    bioDiv.textContent =authorBio;
    bioDiv.classList.add('bioList')

    document.body.appendChild(bioDiv);