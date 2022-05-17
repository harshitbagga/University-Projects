<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

    function __construct() {
        parent::__construct();
		$this->load->model('User_model', '', TRUE);
    }
	
	function encrypt($string,$key){
		$string=rtrim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256,$key,$string,MCRYPT_MODE_ECB))); 
		return $string;
	}
	
	function decrypt($string,$key){
		$string=rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256,$key,base64_decode($string),MCRYPT_MODE_ECB)); 
		return $string;
	}
	
	function hashword($string,$salt){
		$string=crypt($string,"$1$".$salt."$");
		return $string;
	}

    public function index() {


        $this->data['title'] = "Dashboard";
        $this->data['page_title'] = "Dashboard";
        $this->data['active_tab'] = "dashboard";
        $this->data['page_content'] = "dashboard/index";
		$this->data['countuser']=$this->User_model->get_user();
		$this->data['countproduct']=$this->User_model->get_product();
		$this->data['countinquiry']=$this->User_model->get_inquiry();
		$this->data['countpackage']=$this->User_model->get_package();
        //page level css
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
        
		$this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;

        $this->load->view('template', $this->data);
    }
	
	public function change_password() {


        $this->data['title'] = "Change Password";
        $this->data['page_title'] = "Change Password";
        $this->data['active_tab'] = "dashboard";
        $this->data['page_content'] = "dashboard/change_pwd";

        //page level css
        $this->template->add_css('css/style.css');
        $this->template->add_css('css/bootstrap.css');

        //page level plugin
        $this->template->add_js('js/jquery.js');
        $this->template->add_js('js/bootstrap.min.js');
        $this->template->add_js('js/jquery.accordion.js');
        $this->template->add_js('js/jquery.custom-scrollbar.min.js');
        $this->template->add_js('js/icheck.min.js');
        $this->template->add_js('js/selectnav.min.js');
        $this->template->add_js('js/functions.js');
		$this->template->add_js('js/jquery.validate.min.js');
		
		//Custom Jquery Validation Library
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'opwd',
						 'label'   => 'Old Password',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'npwd',
						 'label'   => 'New Password',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'opwd'  => array( 'required'    => "Old Password is required"),
						 'npwd'     => array( 'required'    => "New Password is required"),
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
		$this->data['validation_script']=$this->jquery_validation->run('#service_form');
        
		$this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		$this->form_validation->set_rules('opwd', 'Old Password', 'trim|required');
        $this->form_validation->set_rules('npwd', 'New Password', 'trim|required');
		
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('template', $this->data);
        } else {
			//$key=md5("India");
			//$opwd = $this->encrypt($this->input->post('opwd'),$key);
			$opwd = base64_encode($this->input->post('opwd'));
			//$npwd = $this->encrypt($this->input->post('npwd'),$key);
			$npwd = base64_encode($this->input->post('npwd'));
			$uname = $this->session->userdata('username');
			$countData=$this->User_model->checkPassword($uname,$opwd);
			if($countData>0){
				$service_param = array(
					'Password' => $npwd					
				);
				$this->User_model->updatePassword('user_master', $service_param,$uname,'Username');
				$this->session->set_flashdata('success', 'Password successfully change.');
				redirect(base_url('index.php/dashboard/change_password'));
			}
			else{
				$this->session->set_flashdata('error', 'Old Password is Invalid');
				redirect(base_url('index.php/dashboard/change_password'));
			}
		}
	}
	

}
