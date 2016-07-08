$(function() {
	$(".zhhSet .zhh_list_content").each(function(a) {

		$(this).find('tr').each(function(index) {

			$(this).find("td").each(function(i) {
				var a = $(this).parent().index();
				//按钮启用
				$(this).find('.qy').click(function() {

					$(this).hide();
					$(this).prev().show();

					$(this).parents('tr').eq(a).find("td").each(function() {
						$(this).find('.btn.ggtx').show();
						$(this).find('.btn.bj').show();
						$(this).find('.btn.chzh_pwd').show();
						$(this).find('.btn.pzh').show();


					});
//.zhh_list_content .bj_img, .zhh_list_content .btn.bj, .zhh_list_content .btn.chzh_pwd, .zhh_list_content b, .zhh_list_content .btn.pzh { display: none; }
				});
				//按钮正常
				$(this).find('.zhch').click(function() {

					$(this).hide();
					$(this).parent().find('.ty').show();
					$(this).parents('tr').eq(a).find("td").each(function() {
						$(this).find('.btn.ggtx').hide();
						$(this).find('.btn.bj').hide();
						$(this).find('.btn.chzh_pwd').hide();
						$(this).find('.btn.pzh').hide();
						$(this).find('.bj_img').hide();
						$(this).find('b').hide();
					});
				});
				//按钮停用
				$(this).find('.ty').click(function() {

					$(this).hide();
					$(this).parent().find('.qy').show();
					$(this).parents('tr').eq(a).find("td").each(function() {
						$(this).find('.btn.ggtx').show();
						$(this).find('.btn.bj').show();
						$(this).find('.btn.chzh_pwd').show();
						$(this).find('.btn.pzh').show();
					});
				});
			});
		});
	});
});