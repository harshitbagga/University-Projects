<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Myaccount extends CI_Controller {

    function __construct() {
        parent::__construct();
		$this->load->model('Home_model', '', TRUE);
	}
	
	public function index() {

		if($this->session->userdata('loginname')!="")
		{
			$this->data['title'] = "My Account";
			$this->data['page_title'] = "My Account";
			$this->data['active_tab'] = "myaccount";
			$this->data['page_content'] = "myaccount/index";
	
			//page level css
			$this->template->add_css('css/bootstrap.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/core.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style_childtheme.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
	
			//page level plugin
			$this->template->add_js('js/jquery.js?ver=1.12.4');
			$this->template->add_js('js/jquery-migrate.min.js?ver=1.4.1');
		   
			
			$this->template->add_js('js/core.min.js?ver=1.11.4');
			$this->template->add_js('js/widget.min.js?ver=1.11.4');
			$this->template->add_js('js/mouse.min.js?ver=1.11.4');
			$this->template->add_js('js/draggable.min.js?ver=1.11.4');
			$this->template->add_js('js/wp-embed.min.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.ajax.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.jquery.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			
			$this->data['js'] = $this->template->js;
			$this->data['css'] = $this->template->css;
			$this->data['categorylist'] = $this->Home_model->get_product_category();
			$this->data['userproductlist'] = array();
			$this->data['packagelist'] = $this->Home_model->get_package();
			$this->data['userinfo']=$this->Home_model->get_user($this->session->userdata('loginname'));
			$this->data['userpaymentinfo']=$this->Home_model->get_payment($this->session->userdata('loginname'));
			$this->data['countrylist']=$this->Home_model->get_country();
			$this->data['statelist']=$this->Home_model->get_state();
			$this->data['citylist']=$this->Home_model->get_city();
			$userBidInfoArray=$this->Home_model->get_user_bid_info($this->session->userdata('loginname'));
			$this->data['userbidinfo']=$userBidInfoArray["bidArray"];
			$this->data['productbidinfo']=$userBidInfoArray["maxbidArray"];
			$this->session->set_userdata('UserBid', $this->data['userinfo'][0]->balance_bid);
			$this->load->view('template', $this->data);
		}
		else
			redirect(base_url('index.php/auth/login'));
    }
	
	public function changepwd() {

		if($this->session->userdata('loginname')!="")
		{
			$this->data['title'] = "Change Password";
			$this->data['page_title'] = "Change Password";
			$this->data['active_tab'] = "myaccount";
			$this->data['page_content'] = "myaccount/changepwd";
	
			//page level css
			$this->template->add_css('css/bootstrap.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/core.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style_childtheme.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_css('css/style.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
	
			//page level plugin
			$this->template->add_js('js/jquery.js?ver=1.12.4');
			$this->template->add_js('js/jquery-migrate.min.js?ver=1.4.1');
		   
			
			$this->template->add_js('js/core.min.js?ver=1.11.4');
			$this->template->add_js('js/widget.min.js?ver=1.11.4');
			$this->template->add_js('js/mouse.min.js?ver=1.11.4');
			$this->template->add_js('js/draggable.min.js?ver=1.11.4');
			$this->template->add_js('js/wp-embed.min.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.ajax.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			$this->template->add_js('js/core.jquery.js?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
			
		
			//Custom Jquery Validation Library
			
        
		
			$this->data['js'] = $this->template->js;
			$this->data['css'] = $this->template->css;
			
			$this->load->view('template', $this->data);
		}
		else
			redirect(base_url('index.php/auth/login'));
    }
	
	public function change_password() {

		if($this->session->userdata('loginname')!="")
		{
			
			
			$this->form_validation->set_rules('old_pass', 'Old Password', 'trim|required');
			$this->form_validation->set_rules('new_pass', 'New Password', 'trim|required');
			$this->form_validation->set_rules('ret_pass', 'Re-Type Password', 'trim|required');
			
			if ($this->form_validation->run() == FALSE) {
				//Field validation failed.  User redirected to login page
				redirect(base_url('index.php/myaccount/changepwd'));
			} else {
				//$key=md5("India");
				//$opwd = $this->encrypt($this->input->post('opwd'),$key);
				$opwd = base64_encode($this->input->post('old_pass'));
				//$npwd = $this->encrypt($this->input->post('npwd'),$key);
				$npwd = base64_encode($this->input->post('new_pass'));
				$uname = $this->session->userdata('loginname');
				$countData=$this->Home_model->checkPassword($uname,$opwd);
				if($countData>0){
					$service_param = array(
						'Password' => $npwd					
					);
					$this->Home_model->updatePassword('user_master', $service_param,$uname,'Username');
					$this->session->set_flashdata('success', 'Password successfully change.');
					redirect(base_url('index.php/myaccount/changepwd'));
				}
				else{
					$this->session->set_flashdata('error', 'Old Password is Invalid');
					redirect(base_url('index.php/myaccount/changepwd'));
				}
			}
		}
		else
			redirect(base_url('index.php/auth/login'));
	}
	
	public function update_profile() {

		if($this->session->userdata('loginname')!="")
		{
			
			
			//$this->form_validation->set_rules('fname', 'First Name', 'trim|required');
			//$this->form_validation->set_rules('lname', 'Last Name', 'trim|required');
			//$this->form_validation->set_rules('phone', 'Phone No.', 'trim|required');
			//$this->form_validation->set_rules('email', 'Email Id', 'trim|required');
			//$this->form_validation->set_rules('country', 'Country', 'trim|required');
			//$this->form_validation->set_rules('state', 'State', 'trim|required');
			//$this->form_validation->set_rules('city', 'City', 'trim|required');
			
			//if ($this->form_validation->run() == FALSE) {
				//Field validation failed.  User redirected to login page
				//redirect(base_url('index.php/myaccount/index'));
			//} else {
				//$key=md5("India");
				$fname = $this->input->post('fname');
				$lname = $this->input->post('lname');
				$phone = $this->input->post('phone');
				$email = $this->input->post('email');
				$country = $this->input->post('country');
				$state = $this->input->post('state');
				$city = $this->input->post('city');
				$gender = $this->input->post('gender');
				$zipcode = $this->input->post('zipcode');
				$paypalemail = $this->input->post('paypalemail');
				$address = $this->input->post('address');
				$uname = $this->session->userdata('loginname');
				$img_name1 = $this->input->post('userphoto');
				$service_param="";
				if($img_name1=="")
					$img_exist_name=$this->input->post('photoname');
				$dir = './assets/uploads';
				if (!file_exists($dir) && !is_dir($dir)) {
					mkdir($dir, 0755, true);
				}
				//gif|jpg|jpeg|png|iso|dmg|zip|rar|doc|docx|xls|xlsx|ppt|pptx|csv|ods|odt|odp|pdf|rtf|sxc|sxi|txt|exe|avi|mpeg|mp3|mp4|3gp
				$img_config = array();
				$img_config['upload_path'] = $dir;
				$img_config['allowed_types'] = 'gif|jpg|png|jpeg';
				$this->load->library('upload', $img_config);
				
			   
				$this->upload->do_upload('userphoto');
				$path = $this->upload->data();
				
				$img_exist_name = $path['file_name'];
				$service_param = array(
					'FirstName' => $fname,
					'LastName' => $lname,
					'Gender' => $gender,
					'Address' => $address,
					'country_id' => $country,
					'state_id' => $state,
					'city_id' => $city,
					'Email' => $email,
					'Contact' => $phone,
					'Photo' => $img_exist_name,
					'zipcode' => $zipcode,
					'paypal_email' => $paypalemail
				);
						
                   
				
				
				$this->Home_model->updateProfile('user_master', $service_param,$uname,'Username');
				$this->session->set_flashdata('success', 'Your Profile successfully change.');
				redirect(base_url('index.php/myaccount/index'));
			//}
		}
		else
			redirect(base_url('index.php/auth/login'));
	}
	
}
