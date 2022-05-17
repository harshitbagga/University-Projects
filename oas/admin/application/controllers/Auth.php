<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

    
    function __construct() {

        parent::__construct();
        $this->load->model('User_model', '', TRUE);
	}
	
	/*function encrypt($string,$key){
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
	}*/

    public function index() {
		
		
		$this->template->add_js('js/jquery.validate.min.js');
		$this->load->library('jquery_validation'); 
		$rules = array(
				   array(
						 'field'   => 'username',
						 'label'   => 'Username',
						 'rules'   => 'required'
					  ),
				   array(
						 'field'   => 'password',
						 'label'   => 'Password',
						 'rules'   => 'required'
					  )
				   );
		$messages = array(
						 'username'  => array( 'required'    => "Username is required"),
						 'password'     => array( 'required'    => "Password is required")
						 );
		$this->jquery_validation->set_rules($rules);
		$this->jquery_validation->set_messages($messages);
		
        $this->data['js'] = $this->template->js;
		
		$this->data['validation_script']=$this->jquery_validation->run('#login_form');

        $this->data['title'] = "Login";
        $this->data['page_title'] = "Login";
        $this->data['active_tab'] = "Login";
        $this->data['page_content'] = "auth/login";

        //This method will have the credentials validation

        $this->form_validation->set_rules('username', 'Username', 'trim|required');
        $this->form_validation->set_rules('password', 'Password', 'trim|required');

        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('auth/login', $this->data);
        } else {
			//$key=md5("India");
			
            //Field validation succeeded.  Validate against database
            $username = $this->input->post('username');
            //$password = $this->encrypt($this->input->post('password'),$key);
			$password = base64_encode($this->input->post('password'));
			

			
            //query the database
            $result = $this->User_model->login($username, $password);
           
            if ($result) {

                $sess_array = array();
                foreach ($result as $row) {
                    $this->session->set_userdata('Firstname', $row->FirstName);
                    $this->session->set_userdata('username', $row->Username);
                }
                //Go to private area
                redirect(base_url('index.php/dashboard'), 'refresh');
            } else {
                //$this->session->set_flashdata('error', 'Invalid username or password');
                //$this->load->view('auth/login', $this->data);
            }
        }

        
    }
	
	function logout() {
        $this->session->unset_userdata('username');
        $this->session->unset_userdata('id');
        $this->session->set_flashdata('success', 'Successfully Logout');
        redirect(base_url('index.php/auth'));
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
		
		$this->data['validation_script']=$this->jquery_validation->run('#login_form');

        $this->data['title'] = "Forgot Password";
        $this->data['page_title'] = "Forgot Password";
        $this->data['active_tab'] = "Forgot";
        $this->data['page_content'] = "auth/forgot_password";

        //This method will have the credentials validation

        $this->form_validation->set_rules('email', 'Email', 'trim|required');
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            $this->load->view('auth/forgot_password', $this->data);
        } else {

            //Field validation succeeded.  Validate against database
            $email = $this->input->post('email');
            

            //query the database
            $result = $this->User_model->retriveLoginData($email);

            if ($result) {
				$username=$password="";
                foreach ($result as $row) {
                   $username.=$row->Username;
				   $password.=base64_decode($row->Password);
                }
				$config = Array(
				  //'protocol' => 'smtp',
				  //'smtp_host' => 'ssl://smtp.googlemail.com',
				  //'smtp_port' => 465,
				  //'smtp_user' => '', // change it to yours
				  //'smtp_pass' => '', // change it to yours
				  'mailtype' => 'html',
				  'charset' => 'iso-8859-1',
				  'wordwrap' => TRUE
				);
				
				
				$from_email = ""; 
				$to_email = $this->input->post('email'); 
		   
				//Load email library 
				$this->load->library('email',$config); 
				$this->email->set_newline("\r\n");
				$this->email->from($from_email, 'Auction Syatem'); 
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
                redirect(base_url('index.php/auth/forgot_pwd'));
            } else {
                $this->session->set_flashdata('error', 'Invalid email id');
                $this->load->view('auth/forgot_password', $this->data);
            }
        }

        
    }
}
