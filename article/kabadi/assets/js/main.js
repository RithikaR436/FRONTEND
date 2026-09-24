/**
 * Pro Kabaddi League (PKL) Portal - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initStickyHeader();
    initFilterTabs();
    initLightbox();
    initVideoModal();
    initFansChoice();
    initTeamModals();
    initCheerWall();
});

/* 1. Mobile Navigation */
function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-links');
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.classList.toggle('no-scroll', navMenu.classList.contains('open'));
        });

        // Close when clicking any nav link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}

/* 2. Sticky Header with Scroll Effect */
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* 3. Universal Filter Tabs (Matches, News, Photos, Stats) */
function initFilterTabs() {
    const tabGroups = document.querySelectorAll('[data-filter-group]');
    
    tabGroups.forEach(group => {
        const buttons = group.querySelectorAll('.filter-btn');
        const targetContainerId = group.getAttribute('data-filter-target');
        const targetContainer = document.getElementById(targetContainerId);
        
        if (!targetContainer) return;
        const items = targetContainer.querySelectorAll('[data-category]');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                items.forEach(item => {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        item.style.display = '';
                        item.classList.add('fade-in');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
}

/* 4. Lightbox for Photo Gallery */
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-card img, .lightbox-trigger');
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox || galleryItems.length === 0) return;

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    const imagesList = Array.from(galleryItems);

    function showImage(index) {
        if (index < 0) index = imagesList.length - 1;
        if (index >= imagesList.length) index = 0;
        currentIndex = index;

        const currentItem = imagesList[currentIndex];
        const fullSrc = currentItem.getAttribute('data-full') || currentItem.src;
        const captionText = currentItem.alt || currentItem.getAttribute('data-title') || 'Pro Kabaddi Moment';

        lightboxImg.src = fullSrc;
        if (lightboxCaption) {
            lightboxCaption.textContent = captionText;
        }
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    imagesList.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showImage(index);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex + 1);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        } else if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }
    });
}

/* 5. Video Modal Player */
function initVideoModal() {
    const videoCards = document.querySelectorAll('.video-card-trigger');
    const modal = document.getElementById('video-modal');
    if (!modal || videoCards.length === 0) return;

    const iframe = modal.querySelector('iframe');
    const modalTitle = modal.querySelector('.video-modal-title');
    const closeBtn = modal.querySelector('.modal-close');

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoUrl = card.getAttribute('data-video-url');
            const title = card.getAttribute('data-title') || 'Match Video';

            if (iframe) iframe.src = videoUrl;
            if (modalTitle) modalTitle.textContent = title;

            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });

    function closeVideoModal() {
        modal.classList.remove('active');
        if (iframe) iframe.src = '';
        document.body.classList.remove('no-scroll');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeVideoModal();
    });
}

/* 6. Fan's Choice Interactive Voting System with LocalStorage */
function initFansChoice() {
    const pollContainers = document.querySelectorAll('.poll-card');
    if (pollContainers.length === 0) return;

    pollContainers.forEach(poll => {
        const pollId = poll.getAttribute('data-poll-id');
        const submitBtn = poll.querySelector('.btn-vote');
        const radioInputs = poll.querySelectorAll('input[type="radio"]');
        const options = poll.querySelectorAll('.poll-option');

        // Initial default counts if not set in localStorage
        const storageKey = `pkl_poll_${pollId}`;
        let voteData = JSON.parse(localStorage.getItem(storageKey));

        if (!voteData) {
            voteData = {};
            radioInputs.forEach((r, idx) => {
                voteData[r.value] = 45 + (idx * 18);
            });
            localStorage.setItem(storageKey, JSON.stringify(voteData));
        }

        const userVotedKey = `pkl_voted_${pollId}`;
        const hasVoted = localStorage.getItem(userVotedKey);

        function updateResultsUI() {
            let totalVotes = 0;
            for (const key in voteData) {
                totalVotes += voteData[key];
            }

            options.forEach(opt => {
                const val = opt.getAttribute('data-value');
                const count = voteData[val] || 0;
                const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;

                const bar = opt.querySelector('.poll-progress-bar');
                const percentLabel = opt.querySelector('.poll-percent');
                const countLabel = opt.querySelector('.poll-count');

                if (bar) bar.style.width = `${percentage}%`;
                if (percentLabel) percentLabel.textContent = `${percentage}%`;
                if (countLabel) countLabel.textContent = `${count} votes`;
            });

            const totalLabel = poll.querySelector('.poll-total-votes');
            if (totalLabel) totalLabel.textContent = `Total votes: ${totalVotes.toLocaleString()}`;

            if (hasVoted || localStorage.getItem(userVotedKey)) {
                poll.classList.add('voted');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Vote Submitted!';
                }
            }
        }

        updateResultsUI();

        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                const selected = poll.querySelector('input[type="radio"]:checked');
                if (!selected) {
                    alert('Please select an option to cast your vote!');
                    return;
                }

                if (localStorage.getItem(userVotedKey)) {
                    alert('You have already voted in this poll. Thank you!');
                    return;
                }

                const selectedVal = selected.value;
                voteData[selectedVal] = (voteData[selectedVal] || 0) + 1;
                localStorage.setItem(storageKey, JSON.stringify(voteData));
                localStorage.setItem(userVotedKey, selectedVal);

                updateResultsUI();
            });
        }
    });
}

/* 7. Team Squad Details Modal */
const teamRosters = {
    'patna-pirates': {
        name: 'Patna Pirates',
        motto: 'Pirates Hamla!',
        championships: '3 Titles (Season 3, 4, 5)',
        captain: 'Sachin Tanwar',
        coach: 'Narender Redhu',
        stadium: 'Patliputra Sports Complex, Patna',
        raiders: ['Sachin Tanwar (C)', 'Manjeet Dahiya', 'Sudhakar M', 'Zheng-Wei Chen', 'Sandeep Kumar'],
        defenders: ['Krishan Dhull', 'Manish Dhull', 'Ankit Jaglan', 'Babu M', 'Neeraj Kumar'],
        allRounders: ['Daniel Odhiambo', 'Rohit Raghav', 'Sajin Chandrasekar']
    },
    'jaipur-pink-panthers': {
        name: 'Jaipur Pink Panthers',
        motto: 'Roar for Panthers!',
        championships: '2 Titles (Season 1, 9)',
        captain: 'Sunil Kumar',
        coach: 'Sanjeev Baliyan',
        stadium: 'Sawai Mansingh Stadium, Jaipur',
        raiders: ['Arjun Deshwal (Star)', 'Bhavani Rajput', 'Rahul Chaudhari', 'V. Ajith Kumar', 'Navneet'],
        defenders: ['Sunil Kumar (C)', 'Sahul Kumar', 'Ankush Rathee', 'Reza Mirbagheri', 'Abhishek KS'],
        allRounders: ['Ashish', 'Lucky Sharma']
    },
    'puneri-paltan': {
        name: 'Puneri Paltan',
        motto: 'Gheun Tak!',
        championships: '1 Title (Season 10 Champions)',
        captain: 'Aslam Inamdar',
        coach: 'BC Ramesh',
        stadium: 'Shree Shiv Chhatrapati Sports Complex, Pune',
        raiders: ['Aslam Inamdar (C)', 'Mohit Goyat', 'Pankaj Mohite', 'Aditya Shinde', 'Akash Shinde'],
        defenders: ['Mohammadreza Shadloui (Record Beast)', 'Gaurav Khatri', 'Sanket Sawant', 'Abinesh Nadarajan'],
        allRounders: ['Vahid RezaEimehr', 'Ahmed Enamdar']
    },
    'bengaluru-bulls': {
        name: 'Bengaluru Bulls',
        motto: 'Fully Charged!',
        championships: '1 Title (Season 6)',
        captain: 'Saurabh Nandal',
        coach: 'Randhir Singh Sehrawat',
        stadium: 'Kanteerava Indoor Stadium, Bengaluru',
        raiders: ['Bharat Hooda', 'Vikash Kandola', 'Neeraj Narwal', 'Abhishek Singh', 'Monu'],
        defenders: ['Saurabh Nandal (C)', 'Aman', 'Surjeet Singh', 'Ponparthiban Subramanian'],
        allRounders: ['Ran Singh', 'Sachin Narwal']
    },
    'u-mumba': {
        name: 'U Mumba',
        motto: 'Mumboys Rule!',
        championships: '1 Title (Season 2)',
        captain: 'Surinder Singh',
        coach: 'Gholamreza Mazandarani',
        stadium: 'Sardar Vallabhbhai Patel Stadium, Mumbai',
        raiders: ['Guman Singh', 'Zafardanesh Amirmohammad', 'Pranay Rane', 'Jai Bhagwan', 'Alireza Mirzaian'],
        defenders: ['Surinder Singh (C)', 'Rinku Sharma', 'Mahender Singh', 'Girish Maruti Ernak'],
        allRounders: ['Visvanath V', 'Shanmugam']
    },
    'dabang-delhi': {
        name: 'Dabang Delhi K.C.',
        motto: 'Bindaas Dabang!',
        championships: '1 Title (Season 8)',
        captain: 'Naveen Kumar',
        coach: 'Rambir Singh Khokhar',
        stadium: 'Thyagaraj Sports Complex, New Delhi',
        raiders: ['Naveen Kumar (The Naveen Express)', 'Ashu Malik', 'Meetu Sharma', 'Manjeet'],
        defenders: ['Vishal Bhardwaj', 'Yogesh Dahiya', 'Ashish', 'Himmat Antil'],
        allRounders: ['Vijay Malik', 'Akash Prasher']
    },
    'tamil-thalaivas': {
        name: 'Tamil Thalaivas',
        motto: 'Idhu Namma Aatam!',
        championships: 'Semi-finalists (Season 9)',
        captain: 'Sagar Rathee',
        coach: 'Ashan Kumar',
        stadium: 'Jawaharlal Nehru Indoor Stadium, Chennai',
        raiders: ['Narender Hoshiyar', 'Ajinkya Pawar', 'Himanshu Narwal', 'Masanamuthu L', 'Satish Kannan'],
        defenders: ['Sagar Rathee (C)', 'Sahil Gulia', 'Mohit', 'Abishek M', 'Aashish'],
        allRounders: ['Himanshu', 'Amirhossein Bastami']
    },
    'bengal-warriors': {
        name: 'Bengal Warriors',
        motto: 'Aamar Warriors!',
        championships: '1 Title (Season 7)',
        captain: 'Maninder Singh',
        coach: 'K Baskaran',
        stadium: 'Netaji Subhash Chandra Bose Indoor Stadium, Kolkata',
        raiders: ['Maninder Singh (Mighty Mani)', 'Shrikant Jadhav', 'Nitin Kumar', 'Maharudra Garje'],
        defenders: ['Shubham Shinde', 'Vaibhav Garje', 'Jaskirat Singh', 'Akshay Kumar'],
        allRounders: ['Nitin Rawal', 'Aslam Thambi']
    },
    'gujarat-giants': {
        name: 'Gujarat Giants',
        motto: 'Garjega Gujarat!',
        championships: 'Runners-up (Season 5, 6)',
        captain: 'Fazel Atrachali',
        coach: 'Ram Mehar Singh',
        stadium: 'The Arena by TransStadia, Ahmedabad',
        raiders: ['Rakesh Sungroya', 'Parteek Dahiya', 'Sonu Jaglan', 'HS Rakesh'],
        defenders: ['Fazel Atrachali (Sultan of Defense)', 'Sombir', 'Sourav Gulia', 'Manuj'],
        allRounders: ['Rohit Gulia', 'Mohammad Nabibakhsh']
    },
    'haryanasteelers': {
        name: 'Haryana Steelers',
        motto: 'Dhakad Boys!',
        championships: 'Runners-up (Season 10)',
        captain: 'Jaideep Dahiya',
        coach: 'Manpreet Singh',
        stadium: 'Tau Devi Lal Stadium, Panchkula',
        raiders: ['Vinay', 'Siddharth Desai (Baahubali)', 'Shivam Patare', 'K Prapanjan', 'Ghanshyam Magar'],
        defenders: ['Jaideep Dahiya (C)', 'Mohit Nandal', 'Rahul Sethpal', 'Mohsen Maghsoudlou'],
        allRounders: ['Ashish', 'Sunny Sehrawat']
    },
    'up-yoddhas': {
        name: 'UP Yoddhas',
        motto: 'Saans Rok, Seena Thok!',
        championships: 'Playoff regulars (5 Consecutive Seasons)',
        captain: 'Pardeep Narwal',
        coach: 'Jasveer Singh',
        stadium: 'Babu Banarasi Das Indoor Stadium, Lucknow',
        raiders: ['Pardeep Narwal (Record Breaker)', 'Surender Gill', 'Gagana Gowda', 'Anil Kumar'],
        defenders: ['Sumit Sangwan', 'Nitesh Kumar', 'Gurdeep', 'Harendra Kumar'],
        allRounders: ['Vijay Malik', 'Kiran Magar']
    },
    'telugu-titans': {
        name: 'Telugu Titans',
        motto: 'Dhee Kottu Kabaddi!',
        championships: 'Fan Favorites of the South',
        captain: 'Pawan Sehrawat',
        coach: 'Srinivasreddy',
        stadium: 'GMC Balayogi Sports Complex, Gachibowli, Hyderabad',
        raiders: ['Pawan Kumar Sehrawat (Hi-Flyer)', 'Robin Chaudhary', 'Rajnish Dalal', 'Prafull Zaware'],
        defenders: ['Milad Jabbari', 'Parvesh Bhainswal', 'Mohit Rathee', 'Ankit'],
        allRounders: ['Shankar Gadai', 'Sanjeevi S']
    }
};

function initTeamModals() {
    const triggerBtns = document.querySelectorAll('.btn-view-squad');
    const modal = document.getElementById('team-modal');
    if (!modal || triggerBtns.length === 0) return;

    const modalTitle = modal.querySelector('.team-modal-name');
    const modalMotto = modal.querySelector('.team-modal-motto');
    const modalStats = modal.querySelector('.team-modal-stats');
    const raidersList = modal.querySelector('.team-modal-raiders');
    const defendersList = modal.querySelector('.team-modal-defenders');
    const allRoundersList = modal.querySelector('.team-modal-allrounders');
    const closeBtn = modal.querySelector('.modal-close');

    triggerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const teamKey = btn.getAttribute('data-team');
            const data = teamRosters[teamKey];
            if (!data) return;

            if (modalTitle) modalTitle.textContent = data.name;
            if (modalMotto) modalMotto.textContent = `"${data.motto}" | ${data.championships}`;
            if (modalStats) {
                modalStats.innerHTML = `
                    <div class="team-stat-badge"><i class="fas fa-crown"></i> <strong>Captain:</strong> ${data.captain}</div>
                    <div class="team-stat-badge"><i class="fas fa-clipboard-user"></i> <strong>Coach:</strong> ${data.coach}</div>
                    <div class="team-stat-badge"><i class="fas fa-location-dot"></i> <strong>Home Arena:</strong> ${data.stadium}</div>
                `;
            }

            if (raidersList) {
                raidersList.innerHTML = data.raiders.map(r => `<li><i class="fas fa-running text-orange"></i> ${r}</li>`).join('');
            }
            if (defendersList) {
                defendersList.innerHTML = data.defenders.map(d => `<li><i class="fas fa-shield-alt text-yellow"></i> ${d}</li>`).join('');
            }
            if (allRoundersList) {
                allRoundersList.innerHTML = data.allRounders.map(a => `<li><i class="fas fa-star text-purple"></i> ${a}</li>`).join('');
            }

            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

/* 8. Fan Cheer Board (Interactive Comments) */
function initCheerWall() {
    const cheerForm = document.getElementById('cheer-form');
    const cheerFeed = document.getElementById('cheer-feed');
    if (!cheerForm || !cheerFeed) return;

    // Load initial cheers from storage or use defaults
    const storageKey = 'pkl_cheer_wall';
    let cheers = JSON.parse(localStorage.getItem(storageKey));

    if (!cheers || cheers.length === 0) {
        cheers = [
            { name: 'Karthik Raja', team: 'Tamil Thalaivas', message: 'Thalaivas this season is ours! Sagar and Narender mass!', time: '10 mins ago' },
            { name: 'Rohan Sharma', team: 'Patna Pirates', message: '3-time champions for a reason! Pirates never back down!', time: '35 mins ago' },
            { name: 'Pooja Verma', team: 'Puneri Paltan', message: 'Shadloui + Aslam = Trophy guaranteed! Best team defense in PKL history.', time: '1 hour ago' }
        ];
        localStorage.setItem(storageKey, JSON.stringify(cheers));
    }

    function renderCheers() {
        cheerFeed.innerHTML = cheers.map(c => `
            <div class="cheer-card">
                <div class="cheer-header">
                    <span class="cheer-author"><i class="fas fa-user-circle"></i> ${escapeHtml(c.name)}</span>
                    <span class="cheer-team-badge">${escapeHtml(c.team)}</span>
                </div>
                <p class="cheer-message">"${escapeHtml(c.message)}"</p>
                <span class="cheer-time"><i class="far fa-clock"></i> ${c.time || 'Just now'}</span>
            </div>
        `).join('');
    }

    renderCheers();

    cheerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = cheerForm.querySelector('#cheer-name');
        const teamSelect = cheerForm.querySelector('#cheer-team');
        const messageInput = cheerForm.querySelector('#cheer-text');

        if (!nameInput.value.trim() || !messageInput.value.trim()) {
            alert('Please enter your name and cheer message!');
            return;
        }

        const newCheer = {
            name: nameInput.value.trim(),
            team: teamSelect.value,
            message: messageInput.value.trim(),
            time: 'Just now'
        };

        cheers.unshift(newCheer);
        localStorage.setItem(storageKey, JSON.stringify(cheers));
        renderCheers();

        messageInput.value = '';
        nameInput.value = '';
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}
