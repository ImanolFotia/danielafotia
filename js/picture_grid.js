function create_picture_grid()
{
    var por = $('#cPortfolio').addClass("container-fluid").addClass("portfolio");


    var row = $("<div></div>").attr("id", "pRow").addClass("img-row").appendTo($('#cPortfolio'));
    jQuery.getJSON("./cfg/portfolio.json", (json) => {
        console.log(json);
    var photoCounter = 0;
    for(var column = 0; column < 4; column++){
        
        var col = $('<div></div>').attr("id", "#column" + column).addClass("img-column").appendTo(row);
        for(var i = 0; i < json.portfolio.Fotos.length/4; i++)
        {
            photoCounter++;
            var p = json.portfolio.Fotos[photoCounter];
            $('<img>').click((pic) => { $('#img01').attr('src', pic.target.src); console.log(pic.target.src)})
            .attr("data-target", "#PictureModal")
            .attr("data-toggle", "modal")
            .attr("id", photoCounter)
            .attr("src", json.portfolio.Fotos[photoCounter])
            .addClass("picture")
            .appendTo(col);
        }
    }

});
}

window.onload = () => {
    create_picture_grid()
};