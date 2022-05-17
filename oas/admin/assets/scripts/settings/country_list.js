$(document).ready(function () {
    $("#alert_msg").delay(5000).fadeOut();
});
function edit_country(id)
{
	$.ajax({
            url: BASE_URL + "index.php/settings/edit_country",
            dataType: 'json',
            type: "POST",
            quietMillis: 50,
            data:  { countryid: id },
            success: function (data) {
                $('#countryid').val(data.countrydata[0]['id']);
				$('#countryname').val(data.countrydata[0]['text']);
				$('#countrycode').val(data.countrydata[0]['textcode']);
            }
        });
}
