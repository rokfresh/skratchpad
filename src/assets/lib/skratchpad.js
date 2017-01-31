// ## overlay on hover effect
// `a` is element triggered on hover
// `b` is div that overlays `a`
// `b` must be direct child of `a`
function caption_overlay(a, b) {
	$(a).hover(
		function() {
			$(this).children(b).css({
				opacity: 1
			});
		},
		function() {
			$(this).children(b).css({
				opacity: 0
			});
		}
	);
}

function vinyl_drop(a, b) {
	$(a).hover(
		function() {
			$(this).children(b).css({
				"top": "18px"
			})
		},
		function() {
			$(this).children(b).css({
				"top": "-5px"
			})
		}
	);
}

function close_bs_menu(el) {
	$(el)
}

$(document).ready(function() {

	vinyl_drop(".large-nav-item", ".large-nav-vinyl");
	caption_overlay(".feat-article", ".feat-caption");

	$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') || $(e.target).is('button')) {
        $(this).collapse('hide');
    }
});
});
