var btngoup=null;


document.onscroll = function onscroll()
{
    if (btngoup==null)
    {
        btngoup=document.getElementById("btngoup");
    }
    if(window.pageYOffset<150)
        btngoup.style.bottom="-55px";
    else
        btngoup.style.bottom="20px";
};

function btngoupclick()
{
    window.scrollBy(0,0-window.pageYOffset);
}