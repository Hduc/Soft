$(function () {
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom({
        preventClicks: false,

    });
//xử lí ẩn hiện tab-content,$ gọi ""
    $("#product-tab-home .expand").click(function (e) {

        //Chặn chức năng mặc định
        e.preventDefault();

        $("#product-tab-home .tab-content").css("max-height", "none");

        //Ẩn nó đi $this là nó
        $(this).removeClass("d-block").addClass("d-none");

        //Hiện nút khác
        $("#product-tab-home .collap").removeClass("d-none").addClass("d-block");

    });

    $("#product-tab-home .collap").click(function (e) {

        //Chặn chức năng mặc định
        e.preventDefault();

        $("#product-tab-home .tab-content").css("max-height", "184px");

        //Ẩn nó đi $this là nó
        $(this).removeClass("d-block").addClass("d-none");

        //Hiện nút khác
        $("#product-tab-home .expand").removeClass("d-none").addClass("d-block");

    });

})

