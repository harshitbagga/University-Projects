$(document).ready(function () {

    $("#countryid").select2({
		placeholder: 'Select Country',
        ajax: {
            url: BASE_URL + "index.php/settings/get_country_list",
            dataType: 'json',
            type: "POST",
            quietMillis: 50,
            data: function (term) {
				return {
                    term: term
                };
            },
            results: function (data) {
                return {
                    results: data.countrydata
                };
            }
        }
    });
	
});
function edit_state(id,cid)
{
	$.ajax({
            url: BASE_URL + "index.php/settings/edit_state",
            dataType: 'json',
            type: "POST",
            quietMillis: 50,
            data:  { countryid: cid,stateid:id },
            success: function (data) {
				$('#countryid').select2('data', data.statedata[0]);
                
				$('#stateid').val(data.statedata[1]['id']);
				$('#statename').val(data.statedata[1]['text']);
				$('#statecode').val(data.statedata[1]['textcode']);
            }
        });
}