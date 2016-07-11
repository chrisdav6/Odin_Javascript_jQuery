var etchHeight = $(".etch").height();
for (var i = 0; i < etchHeight * 6; i++) {
	$(".etch").append($("<div class='pixel'></div>"));
}

$(".pixel").on("mouseenter", function() {
	$(this).css("background", "grey");
});

$(".clear").on("click", function() {
	$(".pixel").css("background", "red");
});