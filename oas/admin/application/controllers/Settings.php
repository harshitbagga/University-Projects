<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Settings_model', '', TRUE);
    }

    public function country() {
		
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.dataTables.min.js');
		$this->template->add_js('js/jquery.validate.min.js');
		
		//Third-Party Plugins
		$this->template->add_js('scripts/settings/country_list.js');
		
		//Custom Jquery Validation Library
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'countrycode',
						 'label'   => 'Country Code',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'countryname',
						 'label'   => 'Country',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'countrycode'  => array( 'required'    => "Country Code is required"),
						 'countryname'  => array( 'required'    => "Country is required"),
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		$this->data['validation_script']=$this->jquery_validation->run('#country_form');

        $this->data['title'] = "List";
        $this->data['page_title'] = "Country";
        $this->data['active_tab'] = "settings";
        $this->data['page_content'] = "settings/country";

        $this->data['countrylist'] = $this->Settings_model->get_country();

        $this->load->view('template', $this->data);
    }
	
	public function add_country() {
		
		$this->form_validation->set_rules('countryname', 'Country', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/settings/country'));
        } else {
			$cid = $this->input->post('countryid');
			$ccode = $this->input->post('countrycode');
			$cname = $this->input->post('countryname');
			$uname = $this->session->userdata('username');
			if($cid==""){
				$service_param = array(
				'country_name' => $cname,
				'country_code' => $ccode,
                );
				//Transfering data to Model
				$countcountry = $this->Settings_model->country_exist($cname);
				if(count($countcountry)==0)
				{
					$country_id = $this->Settings_model->country_insert('country_master', $service_param);
					$this->session->set_flashdata('success', 'Successfully Saved '.$cname.' Country.');
				}
				else
				{
					$this->session->set_flashdata('error', $cname.' Country is already exist.');
				}
				
			}
			else{
				$service_param = array(
					'country_name' => $cname,
					'country_code' => $ccode,
				);
				
				$country_id = $this->Settings_model->country_update('country_master', $service_param,$cid,'country_id');
				$this->session->set_flashdata('success', 'Successfully Modified '.$cname.' Country.');
			}
            
			
            redirect(base_url('index.php/settings/country'));
        }
    }
	
	public function delete_country($id) {
		
        $this->data['country_data'] = $this->Settings_model->get_country($id);
		$cname=$this->data['country_data'][0]->country_name;
		
		$this->Settings_model->country_delete('country_master',$id,'country_id');

		$this->session->set_flashdata('success', 'Successfully Deleted '.$cname.' Country.');
		redirect(base_url('index.php/settings/country'));
       
        
    }
	
	public function edit_country() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$cid = $this->input->post("countryid");
			
			$result = $this->Settings_model->get_country($cid);
			if (count($result) > 0) {
				foreach ($result as $row) {
					$row_array['id'] = $row->country_id;
					$row_array['text'] = utf8_encode($row->country_name);
					$row_array['textcode'] = utf8_encode($row->country_code);
					array_push($return_arr, $row_array);
				}
			}
			

			$ret['countrydata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	public function state() {
		
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.dataTables.min.js');
		$this->template->add_js('js/jquery.validate.min.js');
		
		//Third-Party Plugins
		$this->template->add_css('plugins/select2/select2.css');
		$this->template->add_js('plugins/select2/select2.min.js');
		$this->template->add_js('scripts/settings/state_list.js');
		
		//Custom Jquery Validation Library
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'countryid',
						 'label'   => 'Country',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'statename',
						 'label'   => 'State',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'countryid'  => array( 'required'    => "Choose Country"),
						 'statename'  => array( 'required'    => "State is required"),
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		$this->data['validation_script']=$this->jquery_validation->run('#state_form');

        $this->data['title'] = "List";
        $this->data['page_title'] = "State";
        $this->data['active_tab'] = "settings";
        $this->data['page_content'] = "settings/state";

        $this->data['statelist'] = $this->Settings_model->get_state();

        $this->load->view('template', $this->data);
    }
	
	public function add_state() {
		
		$this->form_validation->set_rules('countryid', 'Country', 'trim|required');
		$this->form_validation->set_rules('statename', 'State', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/settings/state'));
        } else {
			$cid = $this->input->post('countryid');
			$sid = $this->input->post('stateid');
			$scode = $this->input->post('statecode');
			$sname = $this->input->post('statename');
			$uname = $this->session->userdata('username');
			if($sid==""){
				$service_param = array(
				'country_id' => $cid,
				'state_name' => $sname,
				'state_code' => $scode,
                );
				//Transfering data to Model
				$countstate = $this->Settings_model->state_exist($sname,$cid);
				if(count($countstate)==0)
				{
					$state_id = $this->Settings_model->state_insert('state_master', $service_param);
					$this->session->set_flashdata('success', 'Successfully Saved '.$sname.' State.');
				}
				else
				{
					$this->session->set_flashdata('error', $sname.' State is already exist.');
				}
				
			}
			else{
				$service_param = array(
					'country_id' => $cid,
					'state_name' => $sname,
					'state_code' => $scode,
				);
				
				$state_id = $this->Settings_model->country_update('state_master', $service_param,$sid,'state_id');
				$this->session->set_flashdata('success', 'Successfully Modified '.$sname.' State.');
			}
            
			
            redirect(base_url('index.php/settings/state'));
        }
    }
	
	public function delete_state($id) {
		
        $this->data['state_data'] = $this->Settings_model->get_state($id);
		$sname=$this->data['state_data'][0]->state_name;
		
		$this->Settings_model->state_delete('state_master',$id,'state_id');

		$this->session->set_flashdata('success', 'Successfully Deleted '.$sname.' State.');
		redirect(base_url('index.php/settings/state'));
       
        
    }
	
	public function edit_state() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$cid = $this->input->post("countryid");
			$sid = $this->input->post("stateid");
			
			$result = $this->Settings_model->get_country($cid);
			if (count($result) > 0) {
				foreach ($result as $row) {
					$row_array['id'] = $row->country_id;
					$row_array['text'] = utf8_encode($row->country_name);
					array_push($return_arr, $row_array);
				}
			}
			
			$result1 = $this->Settings_model->get_state($sid);
			if (count($result1) > 0) {
				foreach ($result1 as $row) {
					$row_array['id'] = $row->state_id;
					$row_array['text'] = utf8_encode($row->state_name);
					$row_array['textcode'] = utf8_encode($row->state_code);
					array_push($return_arr, $row_array);
				}
			}
			

			$ret['statedata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	public function city() {
		
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.dataTables.min.js');
		$this->template->add_js('js/jquery.validate.min.js');
		
		//Third-Party Plugins
		$this->template->add_css('plugins/select2/select2.css');
		$this->template->add_js('plugins/select2/select2.min.js');
		$this->template->add_js('scripts/settings/city_list.js');
		
		//Custom Jquery Validation Library
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'countryid',
						 'label'   => 'Country',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'stateid',
						 'label'   => 'State',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'cityname',
						 'label'   => 'City',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'countryid'  => array( 'required'    => "Choose Country"),
						 'stateid'  => array( 'required'    => "Choose State"),
						 'cityname'  => array( 'required'    => "City is required"),
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		$this->data['validation_script']=$this->jquery_validation->run('#city_form');

        $this->data['title'] = "List";
        $this->data['page_title'] = "City";
        $this->data['active_tab'] = "settings";
        $this->data['page_content'] = "settings/city";

        $this->data['citylist'] = $this->Settings_model->get_city();

        $this->load->view('template', $this->data);
    }
	
	public function add_city() {
		
		$this->form_validation->set_rules('countryid', 'Country', 'trim|required');
		$this->form_validation->set_rules('stateid', 'State', 'trim|required');
		$this->form_validation->set_rules('cityname', 'City', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/settings/city'));
        } else {
			$cid = $this->input->post('countryid');
			$sid = $this->input->post('stateid');
			$cityid = $this->input->post('cityid');
			$cityname = $this->input->post('cityname');
			$uname = $this->session->userdata('username');
			if($cityid==""){
				$service_param = array(
				'country_id' => $cid,
				'state_id' => $sid,
				'city_name' => $cityname,
                );
				//Transfering data to Model
				$countcity = $this->Settings_model->city_exist($cityname,$sid,$cid);
				if(count($countstate)==0)
				{
					$state_id = $this->Settings_model->city_insert('city_master', $service_param);
					$this->session->set_flashdata('success', 'Successfully Saved '.$cityname.' City.');
				}
				else
				{
					$this->session->set_flashdata('error', $cityname.' City is already exist.');
				}
				
			}
			else{
				$service_param = array(
					'country_id' => $cid,
					'state_id' => $sid,
					'city_name' => $cityname,
				);
				
				$state_id = $this->Settings_model->city_update('city_master', $service_param,$cityid,'city_id');
				$this->session->set_flashdata('success', 'Successfully Modified '.$cityname.' City.');
			}
            
			
            redirect(base_url('index.php/settings/city'));
        }
    }
	
	public function delete_city($id) {
		
        $this->data['state_data'] = $this->Settings_model->get_city($id);
		$cname=$this->data['city_data'][0]->city_name;
		
		$this->Settings_model->city_delete('city_master',$id,'city_id');

		$this->session->set_flashdata('success', 'Successfully Deleted '.$cname.' City.');
		redirect(base_url('index.php/settings/city'));
       
        
    }
	
	public function edit_city() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$cid = $this->input->post("countryid");
			$sid = $this->input->post("stateid");
			$cityid = $this->input->post("cityid");
			
			$result = $this->Settings_model->get_country($cid);
			if (count($result) > 0) {
				foreach ($result as $row) {
					$row_array['id'] = $row->country_id;
					$row_array['text'] = utf8_encode($row->country_name);
					array_push($return_arr, $row_array);
				}
			}
			
			$result1 = $this->Settings_model->get_state($sid);
			if (count($result1) > 0) {
				foreach ($result1 as $row) {
					$row_array['id'] = $row->state_id;
					$row_array['text'] = utf8_encode($row->state_name);
					array_push($return_arr, $row_array);
				}
			}
			
			$result2 = $this->Settings_model->get_city($cityid);
			if (count($result2) > 0) {
				foreach ($result2 as $row) {
					$row_array['id'] = $row->city_id;
					$row_array['text'] = utf8_encode($row->city_name);
					array_push($return_arr, $row_array);
				}
			}
			

			$ret['citydata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	public function get_country_list() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$keyword_name = $this->input->post("scid");
			if ($keyword_name != '') {
				$result = $this->Settings_model->search_country($keyword_name);
				if (count($result) > 0) {
					foreach ($result as $row) {
						$row_array['id'] = $row->country_id;
						$row_array['text'] = utf8_encode($row->country_name);
						array_push($return_arr, $row_array);
					}
				}
			} else {
				$result = $this->Settings_model->get_country();
				if (count($result) > 0) {
					foreach ($result as $row) {
						$row_array['id'] = $row->country_id;
						$row_array['text'] = utf8_encode($row->country_name);
						array_push($return_arr, $row_array);
					}
				}
			}

			$ret['countrydata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	public function get_state_list($cid) {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$keyword_name = $this->input->post("countryid");
			if ($keyword_name != '') {
				$result = $this->Settings_model->search_state($keyword_name);
				if (count($result) > 0) {
					foreach ($result as $row) {
						$row_array['id'] = $row->state_id;
						$row_array['text'] = utf8_encode($row->state_name);
						array_push($return_arr, $row_array);
					}
				}
			} else {
				$result = $this->Settings_model->get_state($cid);
				if (count($result) > 0) {
					foreach ($result as $row) {
						$row_array['id'] = $row->state_id;
						$row_array['text'] = utf8_encode($row->state_name);
						array_push($return_arr, $row_array);
					}
				}
			}

			$ret['statedata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	public function get_category_list() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$keyword_name = $this->input->post("catid");
			if ($keyword_name != '') {
				$result = $this->Settings_model->search_category($keyword_name);
				if (count($result) > 0) {
					foreach ($result as $row) {
						$row_array['id'] = $row->cat_id;
						$row_array['text'] = utf8_encode($row->cat_name);
						array_push($return_arr, $row_array);
					}
				}
			} else {
				$result = $this->Settings_model->get_category();
				if (count($result) > 0) {
					foreach ($result as $row) {
						$row_array['id'] = $row->cat_id;
						$row_array['text'] = utf8_encode($row->cat_name);
						array_push($return_arr, $row_array);
					}
				}
			}

			$ret['categorydata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	 public function category() {
		
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.dataTables.min.js');
		$this->template->add_js('js/jquery.validate.min.js');
		
		//Third-Party Plugins
		$this->template->add_js('scripts/settings/category_list.js');
		
		//Custom Jquery Validation Library
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'categoryname',
						 'label'   => 'Category',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'categoryname'  => array( 'required'    => "Category is required"),
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		$this->data['validation_script']=$this->jquery_validation->run('#category_form');

        $this->data['title'] = "List";
        $this->data['page_title'] = "Category";
        $this->data['active_tab'] = "settings";
        $this->data['page_content'] = "settings/category";

        $this->data['categorylist'] = $this->Settings_model->get_category();

        $this->load->view('template', $this->data);
    }
	
	public function add_category() {
		
		$this->form_validation->set_rules('categoryname', 'Category', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/settings/category'));
        } else {
			$cid = $this->input->post('categoryid');
			$cname = $this->input->post('categoryname');
			$uname = $this->session->userdata('username');
			if($cid==""){
				$service_param = array(
				'cat_name' => $cname,
                );
				//Transfering data to Model
				$countcountry = $this->Settings_model->category_exist($cname);
				if(count($countcountry)==0)
				{
					$country_id = $this->Settings_model->category_insert('category_master', $service_param);
					$this->session->set_flashdata('success', 'Successfully Saved '.$cname.' Category.');
				}
				else
				{
					$this->session->set_flashdata('error', $cname.' Category is already exist.');
				}
				
			}
			else{
				$service_param = array(
					'cat_name' => $cname,
				);
				
				$country_id = $this->Settings_model->category_update('category_master', $service_param,$cid,'cat_id');
				$this->session->set_flashdata('success', 'Successfully Modified '.$cname.' Country.');
			}
            
			
            redirect(base_url('index.php/settings/category'));
        }
    }
	
	public function delete_category($id) {
		
        $this->data['category_data'] = $this->Settings_model->get_category($id);
		$cname=$this->data['category_data'][0]->cat_name;
		
		$this->Settings_model->country_delete('category_master',$id,'cat_id');

		$this->session->set_flashdata('success', 'Successfully Deleted '.$cname.' Category.');
		redirect(base_url('index.php/settings/category'));
       
        
    }
	
	public function edit_category() {
		if (!$this->input->is_ajax_request()) {
            exit('No direct script access allowed');
        } else {
			$row = array();
			$return_arr = array();
			$row_array = array();
			$cid = $this->input->post("categoryid");
			
			$result = $this->Settings_model->get_category($cid);
			if (count($result) > 0) {
				foreach ($result as $row) {
					$row_array['id'] = $row->cat_id;
					$row_array['text'] = utf8_encode($row->cat_name);
					array_push($return_arr, $row_array);
				}
			}
			

			$ret['categorydata'] = $return_arr;
			echo json_encode($ret);
		}
    }
	
	public function inquiry() {
		
		//page level css test
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin test
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.dataTables.min.js');
		
		
		$this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		$this->data['title'] = "List";
        $this->data['page_title'] = "Inquiry";
        $this->data['active_tab'] = "inquiry";
        $this->data['page_content'] = "settings/inquiry";

        $this->data['inquirylist'] = $this->Settings_model->get_inquiry();

        $this->load->view('template', $this->data);
    }
}
