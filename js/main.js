"use strict";

var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
		BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
		iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
		Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
		Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
		any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

// loader
var loader = function() {
    setTimeout(function() { 
        var loaderElement = document.getElementById('ftco-loader');
        if (loaderElement) {
            loaderElement.classList.remove('show');
        }
    }, 1);
};
loader();

var dropdowns = document.querySelectorAll('nav .dropdown');
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        this.classList.add('show');
        var link = this.querySelector('> a');
        if (link) {
            link.setAttribute('aria-expanded', true);
        }
        var menu = this.querySelector('.dropdown-menu');
        if (menu) {
            menu.classList.add('show');
        }
    });

    dropdown.addEventListener('mouseleave', function() {
        this.classList.remove('show');
        var link = this.querySelector('> a');
        if (link) {
            link.setAttribute('aria-expanded', false);
        }
        var menu = this.querySelector('.dropdown-menu');
        if (menu) {
            menu.classList.remove('show');
        }
    });
});

var dropdown04 = document.getElementById('dropdown04');
if (dropdown04) {
    dropdown04.addEventListener('show.bs.dropdown', function() {
        console.log('show');
    });
}

// scroll
var scrollWindow = function() {
    window.addEventListener('scroll', function() {
        var st = window.scrollY;
        var navbar = document.querySelector('.ftco_navbar');
        var sd = document.querySelector('.js-scroll-wrap');

        if (st > 150) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled'); 
            }
        } 
        if (st < 150) {
            if (navbar.classList.contains('scrolled')) {
                navbar.classList.remove('scrolled', 'sleep');
            }
        } 
        if (st > 350) {
            if (!navbar.classList.contains('awake')) {
                navbar.classList.add('awake'); 
            }
            
            if (sd) {
                sd.classList.add('sleep');
            }
        }
        if (st < 350) {
            if (navbar.classList.contains('awake')) {
                navbar.classList.remove('awake');
                navbar.classList.add('sleep');
            }
            if (sd) {
                sd.classList.remove('sleep');
            }
        }
    });
};
scrollWindow();

var contentWayPoint = function() {
    var elements = document.querySelectorAll('.ftco-animate');
    var i = 0;
    elements.forEach(function(element) {
        var waypoint = new Waypoint({
            element: element,
            handler: function(direction) {
                if (direction === 'down' && !element.classList.contains('ftco-animated')) {
                    i++;
                    element.classList.add('item-animate');
                    setTimeout(function() {
                        var items = document.querySelectorAll('.ftco-animate.item-animate');
                        items.forEach(function(el, k) {
                            setTimeout(function() {
                                var effect = el.getAttribute('data-animate-effect');
                                if (effect === 'fadeIn') {
                                    el.classList.add('fadeIn', 'ftco-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.classList.add('fadeInLeft', 'ftco-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.classList.add('fadeInRight', 'ftco-animated');
                                } else {
                                    el.classList.add('fadeInUp', 'ftco-animated');
                                }
                                el.classList.remove('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });
                    }, 100);
                }
            },
            offset: '95%'
        });
    });
};
contentWayPoint();

