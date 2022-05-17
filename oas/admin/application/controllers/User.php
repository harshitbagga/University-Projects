<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('User_model', '', TRUE);
    }

    public function index() {
		
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
		
		
		//Third-Party Plugins
		
		
		//Custom Jquery Validation Library
		
        $this->data['js'] = $this->template->js;
        $this->data['css'] = $this->template->css;
		
		

        $this->data['title'] = "List";
        $this->data['page_title'] = "User";
        $this->data['active_tab'] = "user";
        $this->data['page_content'] = "user/index";

        $this->data['userlist'] = $this->User_model->get_user();

        $this->load->view('template', $this->data);
    }
	
	
}
