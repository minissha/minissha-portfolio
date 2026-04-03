

const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

 
  cursor.style.opacity     = '0';
  cursorRing.style.opacity = '0';

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left    = mouseX + 'px';
    cursor.style.top     = mouseY + 'px';
    cursor.style.opacity = '1';
    cursorRing.style.opacity = '0.6';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width           = '6px';
      cursor.style.height          = '6px';
      cursorRing.style.width       = '60px';
      cursorRing.style.height      = '60px';
      cursorRing.style.borderColor = 'var(--apricot)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width      = '12px';
      cursor.style.height     = '12px';
      cursorRing.style.width  = '36px';
      cursorRing.style.height = '36px';
    });
  });

} else {
  // Touch device - hide cursors completely
  cursor.style.display     = 'none';
  cursorRing.style.display = 'none';
}



const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sectionIds   = ['hero', 'about', 'projects', 'contact'];
  const navLinks     = document.querySelectorAll('.nav-links a');
  let currentSection = '';

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 200) {
      currentSection = id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}



const mobileMenu = document.getElementById('mobileMenu');

function toggleMobile() {
  mobileMenu.classList.toggle('open');
}

function closeMobile() {
  mobileMenu.classList.remove('open');
}

document.getElementById('mobileClose').addEventListener('click', closeMobile);


const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        const rect = entry.target.getBoundingClientRect();
        if (rect.bottom < 0) {
          entry.target.classList.remove('visible');
        }
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  }
);

revealElements.forEach((el) => revealObserver.observe(el));


document.querySelectorAll('.timeline-item').forEach((item, index) => {
  item.classList.remove('from-left');
  item.classList.add('reveal', 'from-right');
  item.style.transitionDelay = (index * 0.09) + 's';
});

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
        entry.target.style.transitionDuration = '0s';
        requestAnimationFrame(() => {
          entry.target.style.transitionDuration = '';
        });
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -30px 0px',
  }
);

document.querySelectorAll('.timeline-item').forEach((item) => {
  timelineObserver.observe(item);
});


document.querySelectorAll('.skill-tag').forEach((tag, index) => {
  tag.style.opacity    = '0';
  tag.style.transform  = 'scale(0.85)';
  tag.style.transition = 'opacity 0.3s ' + (0.05 * index) + 's, transform 0.3s ' + (0.05 * index) + 's';
});

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-tag').forEach((tag) => {
          tag.style.opacity   = '1';
          tag.style.transform = 'scale(1)';
        });
      } else {
        const rect = entry.target.getBoundingClientRect();
        if (rect.bottom < 0) {
          entry.target.querySelectorAll('.skill-tag').forEach((tag) => {
            tag.style.opacity   = '0';
            tag.style.transform = 'scale(0.85)';
          });
        }
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.skills-grid').forEach((grid) => {
  skillsObserver.observe(grid);
});



const formSubmitBtn = document.querySelector('.form-submit');

formSubmitBtn.addEventListener('click', async function () {

  const name    = document.querySelector('input[type="text"]').value.trim();
  const email   = document.querySelector('input[type="email"]').value.trim();
  const subject = document.querySelectorAll('input[type="text"]')[1].value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    this.textContent      = 'Fill all fields first!';
    this.style.background = 'var(--amaranth)';
    this.style.color      = 'var(--ivory)';
    setTimeout(() => {
      this.textContent      = 'Send Message ↗';
      this.style.background = '';
      this.style.color      = '';
    }, 2500);
    return;
  }

  this.textContent      = 'Sending...';
  this.style.background = 'var(--denim)';
  this.style.color      = 'var(--ivory)';
  this.disabled         = true;

  try {
    const res = await fetch('https://formspree.io/f/mkoqepyp', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':       'application/json'
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      this.textContent      = 'Message Sent! ✓';
      this.style.background = 'var(--apricot)';
      this.style.color      = 'var(--dark)';
      document.querySelector('input[type="text"]').value       = '';
      document.querySelector('input[type="email"]').value      = '';
      document.querySelectorAll('input[type="text"]')[1].value = '';
      document.querySelector('textarea').value                 = '';
    } else {
      throw new Error('Server error');
    }

  } catch (err) {
    this.textContent      = 'Something went wrong ✕';
    this.style.background = 'var(--amaranth)';
    this.style.color      = 'var(--ivory)';
  }

  this.disabled = false;
  setTimeout(() => {
    this.textContent      = 'Send Message ↗';
    this.style.background = '';
    this.style.color      = '';
  }, 3500);
});



if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
