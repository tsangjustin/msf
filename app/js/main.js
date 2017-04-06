window.onload = function() {
	init();
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '419745495028974',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    function sendMessage(msg) {
      FB.login(function(){
      // Note: The call will only work if you accept the permission request
      FB.api('/me/feed', 'post', {message: msg});
    }, {scope: 'publish_actions'});
  }
  var facebook_share = document.querySelector('.facebook-share');
  facebook_share.addEventListener('click', function() {
    sendMessage('I want to ensure orgs like MSF can afford lifesaving drugs for children. Check to see if your money is in Big Pharma at AFAIRSHOT.ORG');
  })
}


var init = function() {
	var form = document.querySelector('.intro__form');
	var search_field = document.querySelector('.intro__form__term');
  var header = document.querySelector('header');
  var body = document.querySelector('body');
  var intro = document.querySelector('.intro');
  var match_holder = document.querySelector('.intro__form__results');
  var modal_openers = document.querySelectorAll('.modal-open');
  var modal_closers = document.querySelectorAll('.modal-close')
  var intro_text = document.querySelector('.intro__wrapper');
  var end_button = document.querySelector('.end');
  var name_holder = document.querySelector('#name');
  var email_holder = document.querySelector('#email');
  var facebook_share = document.querySelector('.facebook-share');
  var back_to_top = document.querySelector('.btt');
  var window_height = $(window).height();
  var header_height = $('header').height();
  var intro_height = window_height - 100;
  var matches;
  var match = '';
  var possible_matches = '';
  var $possible_matches;
  window.msf = [];
  intro.style.height = intro_height+'px';

  match_holder.addEventListener('click', function(e) {
    if (e.target.classList.contains('match')) {
      match = e.target.textContent;
      matches_pfe = search_match_pfe(match);
      matches_gsk = search_match_gsk(match);
      matches_pfe = _.uniqBy(matches_pfe);
      matches_all = search_holders(match);
      matches_gsk = _.uniqBy(matches_gsk);
      if (matches_pfe.length >= 1 && matches_gsk.length >= 1) {
        navToResponse('both', match);  
      } else if (matches_pfe.length >= 1) {
        navToResponse('pfe', match);
      } else if (matches_gsk.length >= 1) {
        navToResponse('gsk', match);
      } else if (matches_all.length >= 1) {
        navToResponse(false, match);
      } else {
        navToResponse('neither', match); 
      }
      
      window.msf.match = match;
      var message = 'To Whom it May Concern,\r\rI am invested in '+ window.msf.match + ' and it has come to my attention that GlaxoSmithKline and Pfizer are included in the investment portfolio. I am aligned with the goals of AFAIRSHOT.ORG and want to see both companies reduce the price of the life-saving pneumonia vaccine to $5 per child in crisis-affected populations and for all developing countries.\r\rAs you hold my voting authority for these companies through my investment in your fund, I want you to represent my interests at the upcoming annual shareholder meetings for both companies.\r\rPlease confirm you’ve received this email and the steps you will take to have our voices heard at the shareholder meetings.\r\rSincerely,';
      $('#message').html(message);
      window.setTimeout(function() {
        form.classList.remove('active');
        intro_text.classList.remove('hidden');
        $('.intro__form__results').html('');
        search_field.value = '';  
      }, 1000);
      
    }
  });
  form.addEventListener('submit', function(e) {
    e.preventDefault();
      match = search_field.value;
      matches_pfe = search_match_pfe(match);
      matches_gsk = search_match_gsk(match);
      matches_all = search_holders(match);
      matches_pfe = _.uniqBy(matches_pfe);
      matches_gsk = _.uniqBy(matches_gsk);
      if (match.length === 0) {
        navToResponse(false, match);
      } else if (matches_pfe.length >= 1 && matches_gsk.length >= 1) {
        navToResponse('both', match);  
      } else if (matches_pfe.length >= 1) {
        navToResponse('pfe', match);
      } else if (matches_gsk.length >= 1) {
        navToResponse('gsk', match);
      } else if (matches_all.length >= 1) {
        navToResponse('neither', match);
      } else {
        navToResponse(false, match); 
      }
      
      window.msf.match = match;
      var message = 'To Whom it May Concern,\r\rI am invested in '+ window.msf.match + ' and it has come to my attention that GlaxoSmithKline and Pfizer are included in the investment portfolio. I am aligned with the goals of AFAIRSHOT.ORG and want to see both companies reduce the price of the life-saving pneumonia vaccine to $5 per child in crisis-affected populations and for all developing countries.\r\rAs you hold my voting authority for these companies through my investment in your fund, I want you to represent my interests at the upcoming annual shareholder meetings for both companies.\r\rPlease confirm you’ve received this email and the steps you will take to have our voices heard at the shareholder meetings.\r\rSincerely,';
      $('#message').html(message);
      window.setTimeout(function() {
        form.classList.remove('active');
        intro_text.classList.remove('hidden');
        $('.intro__form__results').html('');
        search_field.value = '';  
      }, 1000);
  });
  search_field.addEventListener('click', function(e) {
    form.classList.add('active');
    intro_text.classList.add('hidden');
  });
	search_field.addEventListener('keypress', function(e) {
    possible_matches = '';
		search_term = search_field.value.toLowerCase();
    matches = search_holders(search_term);
    matches = _.uniqBy(matches);
    if (search_term.length > 3) {
      _.each(matches, function(value) {
        possible_matches += '<div class="match">'+value+'</div>';
      })
    } else {
      $('.intro__form__results').html('');
    }
    $possible_matches = $(possible_matches);
    $('.intro__form__results').html($possible_matches);
    // console.log('Match found: '+matches);
    //
	});
  end_button.addEventListener('click', function(e) {
    e.preventDefault();
    navToEnd();
  });
  back_to_top.addEventListener('click', function(e) {
    e.preventDefault();
    navToStart();
  })
  name_holder.addEventListener('blur', function() {
    var name = document.querySelector('#name').value;
    var message = 'To Whom it May Concern,\r\rI am invested in '+ window.msf.match + ' and it has come to my attention that GlaxoSmithKline and Pfizer are included in the investment portfolio. I am aligned with the goals of AFAIRSHOT.ORG and want to see both companies reduce the price of the life-saving pneumonia vaccine to $5 per child in crisis-affected populations and for all developing countries.\r\rAs you hold my voting authority for these companies through my investment in your fund, I want you to represent my interests at the upcoming annual shareholder meetings for both companies.\r\rPlease confirm you’ve received this email and the steps you will take to have our voices heard at the shareholder meetings.\r\rSincerely, \r'+name;
    $('#message').html(message);
  });
  _.each(modal_openers, function(modal_opener) {
    modal_opener.addEventListener('click', function(e) {
      e.target.classList.add('checked')
      var modal_to_open = '.modal-'+e.target.dataset.modal;
      document.querySelector('.modal-wrapper').classList.add('active');
      document.querySelector(modal_to_open).classList.add('active');  
    }); 
  });
  _.each(modal_closers, function(modal_closer) {
    modal_closer.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.modal.active').classList.add('hidden');
      if (e.target.dataset.block !== '1') {
        document.querySelector('.success').classList.add('active');
        window.setTimeout(function() {
          document.querySelector('.modal.active').classList.remove('active');
        },500)
        window.setTimeout(function() {
          document.querySelector('.success').classList.remove('active');
          document.querySelector('.modal-wrapper').classList.remove('active');
        },2000)
      } else {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.modal-wrapper').classList.remove('active');
      }  
    })
  })
  
  window.addEventListener('click', function(e) {
    if(e.target.classList.contains('modal-wrapper')) {
      document.querySelector('.success').classList.remove('active');
      document.querySelector('.modal-wrapper').classList.remove('active');
      document.querySelector('.modal.active').classList.remove('active');
    }
    if(e.target.tagName.toLowerCase() === 'body') {
      form.classList.remove('active');
      intro_text.classList.remove('hidden');
    }
  });
  window.addEventListener('scroll', _.throttle(function() {
    if ($(window).scrollTop() > 120) {
      body.classList.add('fixed-nav');
    } else {
      body.classList.remove('fixed-nav');
    }
  }, 50));
}

var navToStart = function() {
  $('html,body').animate({scrollTop: 0}, 1000);
  window.setTimeout(function() {
    var sections = document.querySelectorAll('section');
    var intro = document.querySelector('.intro');
    _.each(sections, function(section) {
      section.classList.remove('active');
    });
    intro.classList.add('active');
  }, 1000);
}

var navToResponse = function(result, match) {
  var response_section = document.querySelector('.response');
  var response_both = document.querySelector('.response__both');
  var response_gsk = document.querySelector('.response__gsk');
  var response_pfe = document.querySelector('.response__pfe');
  var response_no = document.querySelector('.response__no');
  var response_containers = document.querySelectorAll('.response > div');
  var bodyRect;
  var responseRect;
  var scrollPoint = 0;
  _.each(response_containers, function(response){
    response.classList.remove('active');
  })
  response_section.classList.add('active');
  if (result !== false) {
    if (result === 'both') {
      response_both.classList.add('active');
    } else if (result === 'gsk') {
      response_gsk.classList.add('active');  
    } else if (result === 'pfe') {
      response_pfe.classList.add('active');  
    }
    console.log('Show yes');
  } else {
    response_no.classList.add('active');
    console.log('Show no');
  }
  bodyRect = document.body.getBoundingClientRect();
  responseRect = response_section.getBoundingClientRect();
  scrollPoint = responseRect.top - bodyRect.top;
  console.log('Scroll to: '+responseRect.top);
  $('html,body').animate({scrollTop: scrollPoint}, 1000);
}

var navToEnd = function() {
  var end_section = document.querySelector('.conclusion');
  end_section.classList.add('active');
  var bodyRect = document.body.getBoundingClientRect();
  var conclusionRect = end_section.getBoundingClientRect();
  var scrollPoint = conclusionRect.top - bodyRect.top;
  $('html,body').animate({scrollTop: scrollPoint}, 1000); 
}