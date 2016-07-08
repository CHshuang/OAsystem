$(document).ready(function () {

    var xsChk = "xsChk";//定义的样式

    var xsChkAll = "input[type='checkbox'][class='" + xsChk + "'][name]";//所有定义此样式的checkbox

    $(xsChkAll).each(function () {

        var name = $(this).attr("name");

        name = "input[type='checkbox'][class!='" + xsChk + "'][name='" + name + "']";//此全选框下面的子checkbox

        $(this).click(function () {

            $(name).attr("checked", $(this)[0].checked);

        })

        var xschk = $(this);

        $(name).click(function () {

            var IAll = $(name).length; //此子项目下所有checkbox的个数

            var IChk = $(name + ":checked").length; //此子项目下所有勾选checkbox的个数

            var isAllChecked = true; //是否是全选

            if (IAll != IChk) {

                isAllChecked = false;

            }

            $(xschk).attr("checked", isAllChecked);

        });

    });

});