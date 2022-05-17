<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Login {

    private $CI;

    public function try_login() {
        $this->CI = &get_instance();
        $this->CI->load->library('session');
        $username = $this->CI->session->userdata('loginname');
        $class_name = $this->CI->router->fetch_class();
        $method_name = $this->CI->router->fetch_method();

        //Stashed changes
		/*if (empty($username) && $class_name == "myaccount") {
            redirect(base_url("index.php/home/index"));
        } else if ($class_name == "myaccount" && !empty($username) && $method_name != "logout") {
			redirect(base_url("index.php/myaccount"));
        }*/
    }

}
