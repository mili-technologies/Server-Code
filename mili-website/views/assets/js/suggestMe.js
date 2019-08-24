$(document).ready(function () {
	$(".suggestMeHomeModal").trigger('click');
});
$(document).on("change", ".suggestMeVoteYes", function () {
	var suggestMeId = $(this).data('id');
	console.log($(this).prop('checked'));
	var jsonData = {
		suggestMeId: suggestMeId,
		vote: $(this).prop('checked')
	};
	ajaxRequestToVoteYes(jsonData);
});
$(document).on("change", ".suggestMeVoteNo", function () {
	var suggestMeId = $(this).data('id');
	console.log($(this).prop('checked'));
	var jsonData = {
		suggestMeId: suggestMeId,
		vote: $(this).prop('checked')
	};
	ajaxRequestToVoteNo(jsonData);
});
$(document).on("click", ".suggestMeLike", function () {
	var suggestMeId = $(this).data('id');
	var jsonData = {
		suggestMeId: suggestMeId
	};
	ajaxRequestToAddLike(jsonData);
});
$(document).on("click", ".suggestMeComment", function () {
	var suggestMeId = $(this).data('id');
	$('#suggestMeId').val(suggestMeId);
	$('#CommentReply').val('');
	var jsonData = {
		suggestMeId: suggestMeId
	};
	ajaxRequestToAddCommentReplyPrev(jsonData);
});
$(document).on("click", ".CommentReplySubmit", function () {
	var suggestMeId = $('#suggestMeId').val();
	var CommentReply = $('#CommentReply').val();
	if (CommentReply != '') {
		var jsonData = {
			suggestMeId: suggestMeId,
			CommentReply: CommentReply
		};
		ajaxRequestToAddCommentReply(jsonData);
	} else {

	}
});

function ajaxRequestToVoteYes(jsonData) {
	$.ajax({
		url: "/suggestMeVoteYes",
		type: "post",
		data: jsonData,
		success: function (result, state, xhr) {
			$('.suggestMevoteYes-' + jsonData.suggestMeId).empty();
			$('.suggestMevoteYes-' + jsonData.suggestMeId).append(' ' + result[0].suggestMeVoteYes + ' Yes');
		},
		error: function (error) {

		}
	});
}

function ajaxRequestToVoteNo(jsonData) {
	$.ajax({
		url: "/suggestMeVoteNo",
		type: "post",
		data: jsonData,
		success: function (result, state, xhr) {
			$('.suggestMevoteNo-' + jsonData.suggestMeId).empty();
			$('.suggestMevoteNo-' + jsonData.suggestMeId).append(' ' + result[0].suggestMeVoteNo + ' No');
		},
		error: function (error) {

		}
	});
}

function ajaxRequestToAddLike(jsonData) {
	$.ajax({
		url: "/suggestMeAddLike",
		type: "post",
		data: jsonData,
		success: function (result, state, xhr) {
			$('.suggestMeLike-' + jsonData.suggestMeId).empty();
			$('.suggestMeLike-' + jsonData.suggestMeId).append('<i class="fa fa-gittip"></i> ' + result[0].suggestMeLike + ' Like');
		},
		error: function (error) {

		}
	});
}

function ajaxRequestToAddCommentReplyPrev(jsonData) {
	$.ajax({
		url: "/suggestMeCommentReplyPrev",
		type: "post",
		data: jsonData,
		success: function (result, state, xhr) {
			$(".modal-body #suggestMeId").val(suggestMeId);
			var suggestMeCommentReplyPrev = result[0].suggestMeAnswer;
			$(".CommentReplyPrev").empty();
			if (suggestMeCommentReplyPrev != null) {
				var arr = suggestMeCommentReplyPrev.split(";");
				arr.forEach(function (item) {
					$(".CommentReplyPrev").append('<div class="msg msg-1" onclick="clicked(this)"><p class="msg-txt">' + item + '</p></div>');
				});
			}
		},
		error: function (error) {

		}
	});
}

function ajaxRequestToAddCommentReply(jsonData) {
	$.ajax({
		url: "/suggestMeCommentReply",
		type: "post",
		data: jsonData,
		success: function (result, state, xhr) {
			$('.suggestMeComment-' + jsonData.suggestMeId).empty();
			$('.suggestMeComment-' + jsonData.suggestMeId).append('<i class="fa fa-gittip"></i> ' + result[0].suggestMeAnswerCount + ' Comment');
		},
		error: function (error) {

		}
	});
}
