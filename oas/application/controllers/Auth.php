<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

    function __construct() {
        parent::__construct();
		$this->load->model('Auth_model', '', TRUE);
    }
	
	public function login() {


        $this->data['title'] = "Login";
        $this->data['page_title'] = "Login";
        $this->data['active_tab'] = "login";
        $this->data['page_content'] = "auth/login";

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

        $this->load->view('template', $this->data);
    }
	
	public function register() {


        $this->data['title'] = "Register";
        $this->data['page_title'] = "Register";
        $this->data['active_tab'] = "register";
        $this->data['page_content'] = "auth/register";

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

        $this->load->view('template', $this->data);
    }
	
	public function add_register() {
		
		$this->form_validation->set_rules('firstname', 'First Name', 'trim|required');
		$this->form_validation->set_rules('lastname', 'Last Name', 'trim|required');
		$this->form_validation->set_rules('user_login', 'Username', 'trim|required');
		$this->form_validation->set_rules('user_pass', 'Password', 'trim|required');
		$this->form_validation->set_rules('email', 'Email', 'trim|required');
		$this->form_validation->set_rules('contactno', 'Contact No', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/auth/register'));
        } else {
			
			$fname = $this->input->post('firstname');
			$lname = $this->input->post('lastname');
			$uname = $this->input->post('user_login');
			$pwd = $this->input->post('user_pass');
			$email = $this->input->post('email');
			$mob = $this->input->post('contactno');
			$gender = $this->input->post('Gender');
			
			
			
			$service_param = array(
			'Username' => $uname,
			'FirstName' => $fname,
			'LastName' => $lname,
			'Email' => $email,
			'Contact' => $mob,
			'Password' => base64_encode($pwd),
			'Gender' => $gender,
			'Type' => 'User',
			'balance_bid' => 5,
			);
			$result = $this->Auth_model->check_user($email, $uname);
			if($result)
			{
				$user_id = $this->Auth_model->register_insert('user_master', $service_param);
				redirect(base_url('index.php/auth/login'));
			}
			else
			{
				$this->session->set_flashdata('error', 'Username or Email Id already exist.');
				redirect(base_url('index.php/auth/register'));
			}	
			
        }
    }
	
	public function get_login() {
		
		
		
        //This method will have the credentials validation

        $this->form_validation->set_rules('user_login', 'Username', 'trim|required');
        $this->form_validation->set_rules('user_pass', 'Password', 'trim|required');

        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
             redirect(base_url('index.php/auth/login'));
        } else {
			//$key=md5("India");
			
            //Field validation succeeded.  Validate against database
            $username = $this->input->post('user_login');
            $password = base64_encode($this->input->post('user_pass'));
			
            //query the database
            $result = $this->Auth_model->login($username, $password);

            if ($result) {

                $sess_array = array();
                foreach ($result as $row) {
                    $this->session->set_userdata('UserFirstname', $row->FirstName);
                    $this->session->set_userdata('loginname', $row->Username);
					$this->session->set_userdata('UserBid', $row->balance_bid);
                }
                //Go to private area
                redirect(base_url('index.php/myaccount/index'), 'refresh');
            } else {
                $this->session->set_flashdata('error', 'Invalid username or password');
               redirect(base_url('index.php/auth/login'));
            }
        }

        
    }
	
	public function forgetpwd()
	{
		$this->data['title'] = "Forgot Password";
        $this->data['page_title'] = "Forgot Password";
        $this->data['active_tab'] = "Forgot";
        $this->data['page_content'] = "auth/forgetpwd";

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
		
		$this->load->view('template', $this->data);
	}
	
	public function forgot_pwd() {
		
		//$key=md5("India");
		$this->template->add_js('js/jquery.validate.min.js');
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'email',
						 'label'   => 'Email',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'email'  => array( 'required'    => "Email is required")
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
        $this->data['js'] = $this->template->js;
		
		$this->data['validation_script']=$this->jquery_validation->run('#forgotpwdform');

        $this->data['title'] = "Forgot Password";
        $this->data['page_title'] = "Forgot Password";
        $this->data['active_tab'] = "Forgot";
        $this->data['page_content'] = "auth/forgetpwd";

        //This method will have the credentials validation

        $this->form_validation->set_rules('email', 'Email', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/auth/forgetpwd'));
        } else {

            //Field validation succeeded.  Validate against database
            $email = $this->input->post('email');
            

            //query the database
            $result = $this->Auth_model->retriveLoginData($email);

            if ($result) {
				$username=$password="";
                foreach ($result as $row) {
                   $username.=$row->Username;
				   $password.=base64_decode($row->Password);
                }
				$this->load->library('email');
				$config = Array(
				  //'protocol' => 'smtp',
				  //'smtp_host' => 'ssl://smtp.googlemail.com',
				  //'smtp_port' => 465,
				  //'smtp_user' => 'mineshmamrawala5@gmail.com', // change it to yours
				  //'smtp_pass' => 'Krishna@26', // change it to yours
				  'mailtype' => 'html',
				  'charset' => 'iso-8859-1',
				  'wordwrap' => TRUE
				);
				
				
				$from_email = "mineshmamrawala5@gmail.com"; 
				$to_email = $this->input->post('email'); 
		   
				//Load email library 
				$this->load->library('email',$config); 
				$this->email->set_newline("\r\n");
				$this->email->from($from_email, 'Auction System'); 
				$this->email->to($to_email);
				$this->email->subject('Your Login Credintial Information'); 
				$this->email->message('<b>Username : </b>'.$username.'<br /><b>Password : </b>'.$password); 
				
				
		   
				//Send mail 
				if($this->email->send())
				{
					$this->session->set_flashdata("email_sentsucsess","Email sent successfully.");
				}				 
				else 
				{
					$this->session->set_flashdata("error","Error in sending Email.");
				}				 
                //Go to private area
                redirect(base_url('index.php/auth/forgetpwd'));
            } else {
                $this->session->set_flashdata('error', 'Invalid email id');
                redirect(base_url('index.php/auth/forgetpwd'));
            }
        }

        
    }
	
	function logout() {
        $this->session->unset_userdata('username');
        $this->session->unset_userdata('Firstname');
		$this->session->sess_destroy();
        $this->session->set_flashdata('success', 'Successfully Logout');
        redirect(base_url('index.php/auth/login'));
    }
}
