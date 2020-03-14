$(document).ready(function()
{
    $(".tab-output").not("[data-tab=1]").addClass("hide"),
    $(".tab").first().addClass("active-tab"),
    $(".tab").on("click",function(){
        $(this).addClass("active-tab"),
        $(".tab").not(this).removeClass("active-tab");
        var a=$(this).attr("data-tab");
        $("[data-tab = "+a+"]").removeClass("hide"),
        $(".tab-output").not("[data-tab="+a+"]").addClass("hide")}),
        $("tab[data-tab=all]").on("click",function(){$(this).addClass("active-tab"),
        $(".tab-output").removeClass("hide")
    })
});