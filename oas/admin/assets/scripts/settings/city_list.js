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
function change_state(cid)
{
	$("#stateid").select2({
		placeholder: 'Select State',
        ajax: {
            url: BASE_URL + "index.php/settings/get_state_list/"+cid,
            dataType: 'json',
            type: "GET",
            quietMillis: 50,
            data: function (term) {
                return {
                    term: term
                };
            },
            results: function (data) {
                return {
                    results: data.statedata
                };
            }

        }
    });
}

function edit_city(id,sid,cid)
{
	$.ajax({
            url: BASE_URL + "index.php/settings/edit_city",
            dataType: 'json',
            type: "POST",
            quietMillis: 50,
            data:  { countryid: cid,stateid:sid,cityid:id },
            success: function (data) {
				console.log(data);
				$('#countryid').select2('data', data.citydata[0]);
				change_state(data.citydata[0]['id']);
				$('#stateid').select2('data', data.citydata[1]);
                
				$('#cityid').val(data.citydata[2]['id']);
				$('#cityname').val(data.citydata[2]['text']);
            }
        });
}