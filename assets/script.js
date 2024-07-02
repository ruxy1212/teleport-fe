window.onload = function(){
    let list = document.querySelector('.goals-list'),
    goals = [
        ["Enhance Backend Development Skills:", "Explore advanced features and best practices in PHP and Laravel", "Deepen my understanding of backend architecture, performance optimization, and security practices."],
        ["Master React + Another Frontend Framework:", "Dive deeper into React hooks, context API, and advanced state management.", "Learn modern frontend techniques like server-side rendering (SSR) and progressive web apps (PWAs)."],
        ["Expand Node.js Knowledge:", "Explore Node.js frameworks beyond basics, such as Express.js, Nest.js, or Fastify.", "Gain proficiency in asynchronous programming and event-driven architecture."],
        ["DevOps and Deployment Automation:", "Learn CI/CD pipelines for automating deployments.", "Gain experience with containerization tools like Docker and orchestration platforms like Kubernetes."],
        ["Gain Experience with AI/ML Tools:", "Master tools like TensorFlow, PyTorch, Keras, and scikit-learn.", "Experiment with cloud-based AI services such as AWS SageMaker, Google AI Platform, etc."],
        ["Publish and Present My Works:", "Write blog posts, articles, or white papers on projects.", "Build and present my works at tech meetups, conferences, or webinars to gain visibility and feedback."],
        ["Network and Collaborate with Professionals:", "Join Web/AI/ML communities, forums, and professional networks", "Participate in collaborative projects, mentorship programs, and networking events."]
    ];

    goals.forEach((goal, index) => {
        setTimeout(()=>{
            let newLi = document.createElement('li'), liTitle = document.createElement('h3'), liText1 = document.createElement('p'), liText2 = document.createElement('p');
            liTitle.className = '', liText1.className = '', liText2.className = '';
            liTitle.innerHTML = (index+1)+'. '+goal[0], liText1.innerHTML = goal[1], liText2.innerHTML = goal[2];
            [liTitle, liText1, liText2].forEach(node => newLi.appendChild(node));
            list.appendChild(newLi);
            setTimeout(() => {newLi.className = newLi.className+'show fade swing'}, 10)
        }, 1000*index);
    });

    setInterval(() => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date();
        const currentDay = days[d.getUTCDay()], currentUTC = d.getTime();
        document.querySelector('h4[data-testid="currentDay"]').textContent = currentDay;
        document.querySelector('h4[data-testid="currentTimeUTC"]').textContent = currentUTC;
        document.querySelector('.full-year').textContent = d.getFullYear();
    }, 1000);

    let currentTheme = localStorage.getItem('hng-1-fe'),
        switchBtn = document.querySelector('.mode-switch .mode');
    if(currentTheme){
        if(currentTheme == 'dark') {
            document.documentElement.className='dark';
            switchBtn.className='mode dark-mode'
        }else{
            document.documentElement.className='light';
            switchBtn.className='mode light-mode'
        }
    }
    document.querySelector('.mode-switch').addEventListener('click', () => {
        if(switchBtn.classList.contains('dark-mode')){
            localStorage.setItem('hng-1-fe', 'light');
            document.documentElement.className='light';
            switchBtn.className='mode light-mode'
        }else{
            localStorage.setItem('hng-1-fe', 'dark');
            document.documentElement.className='dark';
            switchBtn.className='mode dark-mode'
        }    
    });
}