function loadJSON(){
         var data_file = "http://starlord.hackerearth.com/kickstarter";
         $.ajax({ 
             type: "GET", 
             url: data_file,
             dataType: 'json',
             success: function(data){ 
                  $.each(data, function(index, project) {
                     project_url = "https://www.kickstarter.com" + project["url"]
                     project_title = '<h4 class = "title" name =' + project["title"].split(" ").join("-") + '>' + '<a target = "_blank" href =' + project_url + '>' + project["title"]+ '</a>' + '</h4>';
                     project_blurb = '<p class = "blurb">' + project["blurb"] + '</p>';
                     project_pledged = '<p class = "pledged">' + 'Pleadge: ' + project["amt.pledged"] + '</p>';
                     project_country = '<p class="country">' + 'Country: ' + project["country"] + '</p>';
                     project_next_page_link = '<a class = "next_page" target = "_blank" href =' + project_url + '><i class="fa fa-angle-double-right"></i></a>';  


                     project_data = '<section class="project">' + project_title + project_blurb + project_pledged + project_country + project_next_page_link +'</section>';
                     $('.project_details').append(project_data);
                  });
                  var result = data.map(function(a) {return a.title;});
                  $( "#tags" ).autocomplete({
                     source: result,
                     select: function( event, ui ) {
                        // console.log("anshu");
                        var selected_value = document.getElementsByName(ui.item.value.split(" ").join("-"));
                        $('.project_details').html($(selected_value).parent());
                     },
                     focus: function( event, ui ) {
                        // console.log("anshu");
                        var selected_value = document.getElementsByName(ui.item.value.split(" ").join("-"));
                        $('.project_details').html($(selected_value).parent());
                     }
                   });
            }
        });
}

$( document ).ready(function() {
    loadJSON();
    $(".fa.fa-search").click(function () {
       $("#tags").toggle();
    })

});
