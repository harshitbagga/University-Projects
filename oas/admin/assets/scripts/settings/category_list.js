$(document).ready(function () {
    $("#alert_msg").delay(5000).fadeOut();
});
function edit_category(id)
{
	$.ajax({
            url: BASE_URL + "index.php/settings/edit_category",
            dataType: 'json',
            type: "POST",
            quietMillis: 50,
            data:  { categoryid: id },
            success: function (data) {
                $('#categoryid').val(data.categorydata[0]['id']);
				$('#categoryname').val(data.categorydata[0]['text']);
            }
        });
}
