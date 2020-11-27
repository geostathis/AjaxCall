
function getData(data){
    $.ajax({
        type:'GET',
        url: 'https://api.github.com/repos/angular/angular.js/issues?per_page=10',
        dataType:'json',
        data:data,
        async:false,
        success:function(data){
            data=JSON.stringify(data);
            mydata=data;
            console.log(mydata);
        },
        error: function (err){
            alert(err);
        }
    });
    

}