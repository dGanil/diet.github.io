$('#menuBtn').bind('click', function() {
	$('.nav').fadeToggle()

	$('#hamburger').fadeToggle(1)
	$('.cross').fadeToggle(1)
})

$('.lang__current').bind('click', function() {
	$('.lang__list').fadeToggle()
	$(this).toggleClass('bg-gray')
})


$('.lang__link').bind('click', function() {
	$('.lang__active > svg').replaceWith($(this).find('svg').clone())
	$('.lang__list').fadeOut()
	$('.lang__link').removeClass('active')
	$(this).addClass('active')
	$('.lang__current').removeClass('bg-gray')
})






if ($(window).width() > 450) {
	let open = true
	$(document).click( function(e){
	    if ( $(e.target).closest('.menu').length ) {
	    	if (open == true) {
	    		$('.nav').fadeIn()
				$('#hamburger').fadeOut(1)
				$('.cross').fadeIn(1)
		        open = false
		        return;
	    	} else if (open == false) {
	    		$('.nav').fadeOut()
				$('#hamburger').fadeIn(1)
				$('.cross').fadeOut(1)
				open = true
				return;
	    	}
	        
	    }
	    // клик снаружи элемента 
	   
	   	$('.nav').fadeOut()

		$('#hamburger').fadeIn(1)
		$('.cross').fadeOut(1)
	});
}

// $(window).on('resize', function(){
//     if ($(window).width() > 450) {
// 	let open = true
// 	$(document).click( function(e){
// 	    if ( $(e.target).closest('.menu').length ) {
// 	    	if (open == true) {
// 	    		$('.nav').fadeIn()
// 				$('#hamburger').fadeOut(1)
// 				$('.cross').fadeIn(1)
// 		        open = false
// 		        return;
// 	    	} else if (open == false) {
// 	    		$('.nav').fadeOut()
// 				$('#hamburger').fadeIn(1)
// 				$('.cross').fadeOut(1)
// 				open = true
// 				return;
// 	    	}
	        
// 	    }
// 	    // клик снаружи элемента 
	   
// 	   	$('.nav').fadeOut()

// 		$('#hamburger').fadeIn(1)
// 		$('.cross').fadeOut(1)
// 	});
// 	} else {

// 	}
// });


$(document).click( function(e){
	    if ( $(e.target).closest('.lang').length ) {
	    	return;
	    }
	    // клик снаружи элемента 
	   
	   	$('.lang__current').removeClass('bg-gray')

		$('.lang__list').fadeOut()
	});

$('.check_typical').bind('click', function() {
	$(this).find('.checkNo').fadeToggle(1)
	$(this).find('.checkYes').fadeToggle(1)
})


$('.notAll').bind('click', function() {
	$(this).parent('.form').find('input').prop('checked', false);
	$(this).parent('.form').find('.checkYes').fadeOut(1)
	$(this).parent('.form').find('.checkNo').fadeIn(1)
})

$('.check_typical').bind('click', function () {
	$('.all-not').prop('checked', false)
})



const progressbarThumb = document.querySelector('.progressbar__thumb');
const progressbarPercent = document.querySelector('.progressbar__percent > tspan');
const progressbarText = document.querySelector('.progress-level');

function onUpdateGsap() {
  const percent = gsap.getProperty(progressbarThumb, '--percent');
  
  if (percent < 20) {
    progressbarText.textContent = 'Анализ данных';
  } else if (percent < 40) {
    progressbarText.textContent = 'Обработка информации о параметрах тела';
  } else if (percent < 60) {
    progressbarText.textContent = "Вычисление размеров порций";
  } else if (percent < 80) {
    progressbarText.textContent = "Формирование рекомендаций по потреблению воды";
  } else if (percent < 99) {
    progressbarText.textContent = "Составление плана питания и рецептов";
  } else if (percent == 100) {
  	progressbarText.textContent = "Ваш персональный план питания готов";  
  }
  progressbarPercent.textContent = Math.round(percent);
}

const tl = gsap.timeline({defaults: {duration: 10, ease: 'linear'}})
.to(progressbarThumb, {'--percent': 100, onUpdate: onUpdateGsap});

tl.paused(true);



$('.agreement__rule').bind('click', function() {
	// if ($('#agreement').prop('checked')) {
	// 	$('#agreement_no').hide(1)
	// 	$('#agreement_yes').show(1)
	// } else {
		$('#agreement_no').fadeToggle(1)
		$('#agreement_yes').fadeToggle(1)
	// }
})

let details = true
$('.advantages').bind('click', function() {
        // $('details').removeAttr('open')
        // if (details == true) {
        // 	$(this).parent('.advantages').attr('open')
        // 	$(this).parent('.advantages').addClass('open')
        // 	details = false
        // } else if (details == false) {
        // 	$(this).parent('.advantages').removeAttr('open')
        // 	$(this).parent('.advantages').removeClass('open')
        // 	details = true
        // }
        

        $('.advantages').not(this).removeClass('open')
        $(this).toggleClass('open')
        $('.advantages').not(this).removeAttr('open')
        // $('this').attr('open')
        

})


// Вызов модального окна
$('.recurr').click( function() {
	$('.overlay').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
	}
});

$('#agree').bind('click', function() {
	$('.overlay').fadeOut();
	$('#agreement2').prop('checked', true)
	$('#alertAgreement2').css('opacity', '0')
})

// Логика квиза


// Step 1

$('input[name="gender"]').bind('change', function() {
	$('.screen').hide()
	$('.footer').hide()
	$('.steper').show()
	$('.step-2').show()

})


$('#back2').bind('click', function() {
	$('.screen').show()
	$('.footer').show()
	$('.steper').hide()
	$('.step-2').hide()
	$('input[name="gender"]').prop('checked', false)
})
// Step 2

$('#next2').bind('click', function() {
	if ($('#weith_new').val() == '' || $('#weith_new').val() > 180 || $('#weith_new').val() < 40) {
		$('#weith_new').siblings('label').css('color','var(--red)')
		$('#weith_new').css('border-color', 'var(--red)')
		$('#alert1').css('opacity', '1')
	} else {
		$('.step-2').hide()
		$('.step-3').show()
	}
})

$('#back3').bind('click', function() {
	$('.step-2').show()
	$('.step-3').hide()
})

// Step3

$('#next3').bind('click', function() {
	if ($('#age').val() == '' || $('#age').val() > 80 || $('#age').val() < 18) {
		$('#age').siblings('label').css('color','var(--red)')
		$('#age').css('border-color', 'var(--red)')
		$('#alert2').css('opacity', '1')
	} else {
		$('.step-3').hide()
		$('.step-4').show()
	}
})

$('#back4').bind('click', function() {
	$('.step-3').show()
	$('.step-4').hide()
})

// Step 4

$('#next4').bind('click', function() {
	if ($('#height').val() == '' || $('#height').val() < 130 || $('#height').val() > 250) {
		$('#height').siblings('label').css('color','var(--red)')
		$('#height').css('border-color', 'var(--red)')
		$('#alert3').css('opacity', '1')
	} else {
		$('.step-4').hide()
		$('.step-5').show()
	}
})

$('#back5').bind('click', function() {
	$('.step-4').show()
	$('.step-5').hide()
})

// Step 5

$('#next5').bind('click', function() {
	if ($('#weith').val() == '' || $('#weith').val() > 180 || $('#weith').val() < 40) {
		$('#weith').siblings('label').css('color','var(--red)')
		$('#weith').css('border-color', 'var(--red)')
		$('#alert4').css('opacity', '1')
	} else {

		if ($("#man").prop("checked")) {
			$('.step-5').hide()
			$('.step-6_man').show()
		} else if ($("#woman").prop("checked")) {
			$('.step-5').hide()
			$('.step-6_woman').show()
		}
		
	}
})

// Step 6

$('input[name="body_type"]').bind('change', function() {
	$('.step-6').hide()
	$('.step-7').show()
})



$('#back6').bind('click', function() {
	$('.step-5').show()
	$('.step-6').hide()
})

$('#back6a').bind('click', function() {
	$('.step-5').show()
	$('.step-6').hide()
})

// Step 7

$('input[name="activity"]').bind('change', function() {
	$('.step-7').hide()
	$('.step-8').show()
})



$('#back7').bind('click', function() {
	if ($("#man").prop("checked")) {
			$('.step-7').hide()
			$('.step-6_man').show()
		} else if ($("#woman").prop("checked")) {
			$('.step-7').hide()
			$('.step-6_woman').show()
		}
		$('input[name="body_type"]').prop("checked", false)
})



$('#back8').bind('click', function() {
	$('.step-8').hide()
	$('.step-7').show()
	$('input[name="activity"]').prop("checked", false)
})

// Step 8

$('#next8').bind('click', function() {
	// if (w$('#weith_new').val() == '') {
	// } else {
		$('.step-8').hide()
		$('.step-9').show()
	// }
})

$('#back9').bind('click', function() {
	$('.step-9').hide()
	$('.step-8').show()
})



// Step 9



$('input[name="discomfort"]').bind('change', function() {
	$('.step-9').hide()
	$('.step-10').show()
})

$('#back10').bind('click', function() {
	$('.step-9').show()
	$('.step-10').hide()
	$('input[name="discomfort"]').prop('checked', false)
})



// Step 10



$('input[name="meals_per_day"]').bind('change', function() {
	$('.step-10').hide()
	$('.step-11').show()
})

$('#back11').bind('click', function() {
	$('.step-10').show()
	$('.step-11').hide()
	$('input[name="meals_per_day"]').prop('checked', false)
})


// Step 11


$('input[name="how_long_ago"]').bind('change', function() {
	$('.step-11').hide()
	$('.step-12').show()
})


$('#back12').bind('click', function() {
	$('.step-11').show()
	$('.step-12').hide()
	$('input[name="how_long_ago"]').prop('checked', false)
})

// Step 12

$('input[name="typical_for_you"]').bind('change', function() {
	$('#warning1').hide()
})


$('#next12').bind('click', function() {
	// if (w$('#weith_new').val() == '') {
	// } else {
	// 	$('.step-12').hide()
 //        $('.step-13').show()
	// }

	if ($('input[name="typical_for_you"]').filter(':checked').length==0) {
		$('#warning1').css('display', 'flex')
	} else {
		$('.step-12').hide()
        $('.step-13').show()
	}
})


$('.notAll').bind('click', function() {
	$('.step-12').hide()
    $('.step-13').show()
})

$('#back13').bind('click', function() {
	$('.step-12').show()
	$('.step-13').hide()
	$('.step-12 #checkYes').hide()
	$('.step-12 #checkNo').show()
	$('input[name="typical_for_you"]').prop('checked', false)
})

// Step 13


$('input[name="sport"]').bind('change', function() {
	$('.step-13').hide()
	$('.step-14').show()
})

$('#back14').bind('click', function() {
	$('.step-13').show()
	$('.step-14').hide()
	$('input[name="sport"]').prop('checked', false)
})

// Step 14


$('input[name="energy"]').bind('change', function() {
	$('.step-14').hide()
	$('.step-15').show()
})

$('#back15').bind('click', function() {
	$('.step-14').show()
	$('.step-15').hide()
	$('input[name="energy"]').prop('checked', false)
})


// Step 15


$('input[name="sleep"]').bind('change', function() {
	$('.step-15').hide()
	$('.step-16').show()
})

$('#back16').bind('click', function() {
	$('.step-15').show()
	$('.step-16').hide()
	$('input[name="sleep"]').prop('checked', false)
})


// Step 16


$('input[name="water"]').bind('change', function() {
	$('.step-16').hide()
	$('.step-17').show()
})

$('#back17').bind('click', function() {
	$('.step-16').show()
	$('.step-17').hide()
	$('input[name="water"]').prop('checked', false)
})


// Step 17

$('input[name="long_cook"]').bind('change', function() {
	$('.step-17').hide()
	$('.step-18').show()
	tl.play();

	function explode(){
  		$('.step-18').hide()
		$('.step-19').show()
	}
	setTimeout(explode, 12000);

})

function validateEmail(email) {
    var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailReg.test(email);
}

function validatePhone(phone){
 let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
 return regex.test(phone);
}

// Step 18

$('#email').bind('keyup', function() {
	var email = $(this).val();
	if (!validateEmail(email)) {
		$('#alertEmail1').css('display', 'flex')
		$(this).css('border-color', 'var(--red)')
		$(this).css('color', 'var(--red')
		$(this).siblings('label').css('color', 'var(--red')
	} else if (validateEmail(email)) {
		$('#alertEmail1').css('display', 'none')
		$(this).css('border-color', 'var(--gray)')
		$(this).css('color', 'var(--color')
		$(this).siblings('label').css('color', 'var(--color')
	}
})


$('#email2').bind('keyup', function() {
	var email = $(this).val();
	if (!validateEmail(email)) {
		$('#alertEmail2').css('display', 'flex')
		$(this).css('border-color', 'var(--red)')
		$(this).css('color', 'var(--red')
		$(this).siblings('label').css('color', 'var(--red')
	} else if (validateEmail(email)) {
		$('#alertEmail2').css('display', 'none')
		$(this).css('border-color', 'var(--gray)')
		$(this).css('color', 'var(--color')
		$(this).siblings('label').css('color', 'var(--color')
	}
})


$('#phone').bind('keyup', function() {
	var phone = $(this).val();
	if (!validatePhone(phone)) {
		$('#alertPhone1').css('display', 'flex')
		$(this).css('border-color', 'var(--red)')
		$(this).css('color', 'var(--red')
		$(this).siblings('label').css('color', 'var(--red')
	} else if (validatePhone(phone)) {
		$('#alertPhone1').css('display', 'none')
		$(this).css('border-color', 'var(--gray)')
		$(this).css('color', 'var(--color')
		$(this).siblings('label').css('color', 'var(--color')
	}
})



function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

// let valueField1 = $("#card").val().substr(0,1);


$('#card').bind('keyup', function() {
	var number = $(this).val();
	if (!validateCardNumber(number)) {
		if ($("#card").val().substr(0,1) == '1' || $("#card").val().substr(0,1) == '0' || $("#card").val().substr(0,1) == '8' || $("#card").val().substr(0,1) == '9') {
			$('#card1').text($("#card").val().substr(0,1))
			$('#alertcard').css('display', 'flex')
		} else {
			$('#alertcard').css('display', 'none')
		}
		$(this).css('border-color', 'var(--red)')
		$(this).css('color', 'var(--red')
		$(this).siblings('label').css('color', 'var(--red')
	} else if (validateCardNumber(number)) {
		$('#alertcard').css('display', 'none')
		$(this).css('border-color', 'var(--gray)')
		$(this).css('color', 'var(--color')
		$(this).siblings('label').css('color', 'var(--color')
	}
})

// Step 19
let height = $('#height').val(),
	weight_new = $('#weight_new').val(),
	age = $('#age').val()

$('#agreement').bind('click', function() {
	$('#agreement_no path').css('fill', 'var(--green)')
	$('#alertAgreement1').css('display', 'none')
	// height = $('#height').val()
	// weight_new = $('#weight_new').val()
	// age = $('#age').val()
})


$('#agreement2').bind('click', function() {
	$('#agreement_no path').css('fill', 'var(--green)')
	$('#alertAgreement2').css('opacity', '0')
	// height = $('#height').val()
	// weight_new = $('#weight_new').val()
	// age = $('#age').val()
})

$('#next19').bind('click', function() {
	if (!validatePhone($('#phone').val()) || !validateEmail($('#email').val()) || !$('#agreement').prop('checked')) {
		if (!validatePhone($('#phone').val())) {
			$('#alertPhone1').css('display', 'flex')
			$('#phone').css('border-color', 'var(--red)')
			$('#phone').css('color', 'var(--red')
			$('#phone').siblings('label').css('color', 'var(--red')
		}

		if (!validateEmail($('#email').val())) {
			$('#alertEmail1').css('display', 'flex')
			$('#email').css('border-color', 'var(--red)')
			$('#email').css('color', 'var(--red')
			$('#email').siblings('label').css('color', 'var(--red')
		}


		if (!$('#agreement').prop('checked')) {
			$('#alertAgreement1').css('display', 'flex')
			$('#agreement_no path').css('fill', 'var(--red)')
		}


	} else {
		// var complete = '';
  // 		location.href = meni_1;
  // let indexBody = $('#weight_new').val() / $('#height').val()
  			// $('#agePlan').text(age)
  			// $('#weightPlan').text(weight_new)
  			// $('#heightPlan').text(height)
  			document.location='plan.html'

	}
})


$('#cancelOffer').bind('click', function() {
	var number = $('#card').val();
	if (!validateCardNumber(number)) {
		if ($("#card").val().substr(0,1) == '1' || $("#card").val().substr(0,1) == '0' || $("#card").val().substr(0,1) == '8' || $("#card").val().substr(0,1) == '9') {
			$('#card1').text($("#card").val().substr(0,1))
			$('#alertcard').css('display', 'flex')
		} else {
			$('#alertcard').css('display', 'none')
		}
		$('#card').css('border-color', 'var(--red)')
		$('#card').css('color', 'var(--red')
		$('#card').siblings('label').css('color', 'var(--red')
	} else if (validateCardNumber(number)) {
		$('#alertcard').css('display', 'none')
		$('#card').css('border-color', 'var(--gray)')
		$('#card').css('color', 'var(--color')
		$('#card').siblings('label').css('color', 'var(--color')
	}

	var email = $("#email2").val();
	if (!validateEmail(email)) {
		$('#alertEmail2').css('display', 'flex')
		$("#email2").css('border-color', 'var(--red)')
		$("#email2").css('color', 'var(--red')
		$("#email2").siblings('label').css('color', 'var(--red')
	} else if (validateEmail(email)) {
		$('#alertEmail2').css('display', 'none')
		$("#email2").css('border-color', 'var(--gray)')
		$("#email2").css('color', 'var(--color')
		$("#email2").siblings('label').css('color', 'var(--color')
	}
})


$('#payAuto').bind('click', function() {
	if ($('#agreement2').filter(':checked').length == 0) {
		$('#alertAgreement2').css('opacity', '1')
		$('#agreement_no path').css('fill', 'var(--red)')
	} else {
		
	}
})

 //задаете x как любое число 
    // $.mask.definitions['x']='[0-9]';

    //устанавливаете саму маску и * вместо подчеркивания
    // $("#card").mask("xxxx xxxx xxxx xxxx", {placeholder: '*'}); 


// $("#card").mask("~(999) - 999 - 9999");

// $.mask.definitions['~'] = '([0-9] )?';

$('.menu-lang').bind('click', function() {
	$('.menu-mobile-lang').css('left', '0')
})

$('.menu-mobile-lang__top').bind('click', function() {
	$('.menu-mobile-lang').css('left', '100%')
})

$('.lang-sheet__item').bind('click', function() {
	$('.lang-sheet__item').removeClass('active')
	$(this).addClass('active')
})

