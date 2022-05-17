<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    function __construct() {
        parent::__construct();
		$this->load->model('Home_model', '', TRUE);
	}
	
	public function index() {


        $this->data['title'] = "Home";
        $this->data['page_title'] = "Home";
        $this->data['active_tab'] = "home";
        $this->data['page_content'] = "home/index";

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
		$this->data['categorylist'] = $this->Home_model->get_category();
		$this->data['productlist'] = $this->Home_model->get_product();

        $this->load->view('template', $this->data);
    }
	
	public function aboutus() {


        $this->data['title'] = "About Us";
        $this->data['page_title'] = "About Us";
        $this->data['active_tab'] = "about";
        $this->data['page_content'] = "home/aboutus";

        //page level css
        $this->template->add_css('css/bootstrap.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
        $this->template->add_css('css/core.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
		$this->template->add_css('css/style_childtheme.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
		$this->template->add_css('css/style.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');

        //page level plugin
        //$this->template->add_js('js/jquery.js?ver=1.12.4');
        //$this->template->add_js('js/jquery-migrate.min.js?ver=1.4.1');
	   $this->template->add_js('js/jquery.min.js');

		
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
	
	public function contactus() {


        $this->data['title'] = "Contact Us";
        $this->data['page_title'] = "Contact Us";
        $this->data['active_tab'] = "contact";
        $this->data['page_content'] = "home/contactus";
		

        //page level css
        $this->template->add_css('css/bootstrap.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
        $this->template->add_css('css/core.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
		$this->template->add_css('css/style_childtheme.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');
		$this->template->add_css('css/style.css?ver=fba7ffee8eb7da561bbd4bb8b3d5bc69');

        //page level plugin
        //$this->template->add_js('js/jquery.js?ver=1.12.4');
        //$this->template->add_js('js/jquery-migrate.min.js?ver=1.4.1');
	   $this->template->add_js('js/jquery.min.js');

		
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
	
	public function contactus_process() {


        $this->form_validation->set_rules('form_name', 'Name', 'trim|required');
		$this->form_validation->set_rules('form_email', 'Email', 'trim|required');
		$this->form_validation->set_rules('form_message', 'Message', 'trim|required');
		
        
        if ($this->form_validation->run() == FALSE) {
            //Field validation failed.  User redirected to login page
            redirect(base_url('index.php/home/contactus'));
        } else {
			$fname = $this->input->post('form_name');
			$email = $this->input->post('form_email');
			$phone = $this->input->post('form_phone');
			$msg = $this->input->post('form_message');
			$capchacode = $this->input->post('form_code');

			$service_param = array(
			'feed_fname' => $fname,
			'feed_email' => $email,
			'feed_contact' => $phone,
			'feed_msg' => $msg,
			'posting_date' => date('Y-m-d h:i:s'),
			);
		    $user_id = $this->Home_model->feedback_insert('feedback_master', $service_param);
			redirect(base_url('index.php/home/contactus'));	
			
		}
    }
	
	public function validateexpiry($pid) {
		$service_param = array(
							'status' => 0,
						);
		$product_id = $this->Home_model->product_update('product_master', $service_param,$pid,'product_id');
		return true;
	}
	
}
